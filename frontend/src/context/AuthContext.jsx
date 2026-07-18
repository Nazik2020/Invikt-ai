import React, { createContext, useState, useEffect, useContext, useCallback, useRef } from "react";

import { API_URL } from "../config/api";

const TOKEN_KEY = "invikt_token";
const REFRESH_KEY = "invikt_refresh";
const REMEMBER_KEY = "invikt_remember";

const getStoredToken = () => {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || null;
};

const getStoredRefreshToken = () => {
  return localStorage.getItem(REFRESH_KEY) || sessionStorage.getItem(REFRESH_KEY) || null;
};

const storeTokens = (accessToken, refreshToken, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(REMEMBER_KEY, "true");
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_KEY);
  } else {
    sessionStorage.setItem(TOKEN_KEY, accessToken);
    sessionStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(REMEMBER_KEY);
  }
};

const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(REMEMBER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(REFRESH_KEY);
};

const AuthContext = createContext(null);

const extractTokens = (json) => ({
  accessToken: json.accessToken || json.token || null,
  refreshToken: json.refreshToken || null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getStoredToken);
  const [loading, setLoading] = useState(true);
  const [isRemembered, setIsRemembered] = useState(
    localStorage.getItem(REMEMBER_KEY) === "true"
  );
  const refreshTimeoutRef = useRef(null);

  const scheduleRefresh = useCallback((refreshToken) => {
    if (refreshTimeoutRef.current) {
      clearTimeout(refreshTimeoutRef.current);
    }

    try {
      const payload = JSON.parse(atob(refreshToken.split(".")[1]));
      const expiresAt = payload.exp * 1000;
      const now = Date.now();
      const refreshIn = Math.max(expiresAt - now - 60000, 30000);

      refreshTimeoutRef.current = setTimeout(async () => {
        try {
          const res = await fetch(`${API_URL}/auth/refresh`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refreshToken }),
          });
          const json = await res.json();
          if (json.success) {
            const { accessToken: newAccess, refreshToken: newRefresh } = extractTokens(json);
            const remember = localStorage.getItem(REMEMBER_KEY) === "true";
            storeTokens(newAccess, newRefresh, remember);
            setToken(newAccess);
            if (newRefresh) scheduleRefresh(newRefresh);
          } else {
            clearTokens();
            setToken(null);
            setUser(null);
          }
        } catch {
          // network error — will retry on next request
        }
      }, refreshIn);
    } catch {
      // malformed token
    }
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      const storedToken = getStoredToken();
      const storedRefresh = getStoredRefreshToken();

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        const json = await res.json();
        if (json.success) {
          setUser(json.user);
          setToken(storedToken);
          if (storedRefresh) {
            scheduleRefresh(storedRefresh);
          }
        } else if (res.status === 401 && storedRefresh) {
          try {
            const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ refreshToken: storedRefresh }),
            });
            const refreshJson = await refreshRes.json();
            if (refreshJson.success) {
              const { accessToken: newAccess, refreshToken: newRefresh } = extractTokens(refreshJson);
              const remember = localStorage.getItem(REMEMBER_KEY) === "true";
              storeTokens(newAccess, newRefresh, remember);
              setToken(newAccess);
              if (newRefresh) scheduleRefresh(newRefresh);

              const meRes = await fetch(`${API_URL}/auth/me`, {
                headers: { Authorization: `Bearer ${newAccess}` },
              });
              const meJson = await meRes.json();
              if (meJson.success) {
                setUser(meJson.user);
              } else {
                clearTokens();
                setToken(null);
                setUser(null);
              }
            } else {
              clearTokens();
              setToken(null);
              setUser(null);
            }
          } catch {
            clearTokens();
            setToken(null);
            setUser(null);
          }
        } else {
          clearTokens();
          setToken(null);
          setUser(null);
        }
      } catch {
        clearTokens();
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();

    return () => {
      if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    };
  }, [scheduleRefresh]);

  const register = async (firstName, lastName, username, email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    const json = await res.json();
    return json;
  };

  const login = async (email, password, rememberMe = false) => {
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });
      const json = await res.json();
      if (json.success) {
        const { accessToken, refreshToken } = extractTokens(json);
        storeTokens(accessToken, refreshToken, rememberMe);
        setToken(accessToken);
        setUser(json.user);
        setIsRemembered(rememberMe);
        if (refreshToken) scheduleRefresh(refreshToken);
      }
      return json;
    } catch (err) {
      return { success: false, error: "Could not connect to server." };
    }
  };

  const logout = async () => {
    try {
      const storedRefresh = getStoredRefreshToken();
      if (token) {
        await fetch(`${API_URL}/auth/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ refreshToken: storedRefresh }),
        });
      }
    } catch {
      // proceed with local cleanup regardless
    }

    if (refreshTimeoutRef.current) clearTimeout(refreshTimeoutRef.current);
    clearTokens();
    setToken(null);
    setUser(null);
    setIsRemembered(false);
  };

  const getAuthHeaders = useCallback(() => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  }), [token]);

  const updateUser = (updatedFields) => {
    setUser((prev) => {
      if (!prev) return null;
      return { ...prev, ...updatedFields };
    });
  };

  const isAuthenticated = !!user && !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        isRemembered,
        register,
        login,
        logout,
        getAuthHeaders,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};

export default AuthContext;
