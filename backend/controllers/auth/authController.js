const User = require("../../models/auth/User");
const jwt = require("jsonwebtoken");
const TokenBlacklist = require("../../models/TokenBlacklist");

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId, type: "access" }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId, type: "refresh" }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  });
};

const getRefreshExpiry = () => {
  const ms = 30 * 24 * 60 * 60 * 1000;
  return new Date(Date.now() + ms);
};

const sanitizeUser = (user) => ({
  id: user._id,
  firstName: user.firstName,
  lastName: user.lastName,
  fullName: user.fullName,
  username: user.username,
  email: user.email,
  role: user.role,
  profilePicture: user.profilePicture,
});

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(409).json({ success: false, error: "An account with this email already exists." });
    }

    const usernameExists = await User.findOne({ username: username.toLowerCase() });
    if (usernameExists) {
      return res.status(409).json({ success: false, error: "This username is already taken." });
    }

    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      passwordHash: password,
    });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    await TokenBlacklist.create({
      token: "pending",
      expiresAt: new Date(),
      userId: user._id,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      accessToken,
      refreshToken,
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() }).select("+passwordHash");
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      accessToken,
      refreshToken,
      user: sanitizeUser(user),
    });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;

    const blacklisted = await TokenBlacklist.findOne({ token: refreshToken });
    if (blacklisted) {
      return res.status(401).json({ success: false, error: "Refresh token has been revoked." });
    }

    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ success: false, error: "Invalid or expired refresh token." });
    }

    if (decoded.type !== "refresh") {
      return res.status(401).json({ success: false, error: "Invalid token type." });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, error: "User no longer exists." });
    }

    if (user.isDeactivated) {
      return res.status(403).json({ success: false, error: "Account has been suspended." });
    }

    await TokenBlacklist.create({
      token: refreshToken,
      expiresAt: new Date(decoded.exp * 1000),
      userId: user._id,
    });

    const newAccessToken = generateAccessToken(user._id);
    const newRefreshToken = generateRefreshToken(user._id);

    res.status(200).json({
      success: true,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token,
            expiresAt: new Date(decoded.exp * 1000),
            userId: req.user.id,
          });
        }
      } catch (e) {
        // token already expired or malformed, ignore
      }
    }

    if (req.body && req.body.refreshToken) {
      try {
        const decoded = jwt.decode(req.body.refreshToken);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token: req.body.refreshToken,
            expiresAt: new Date(decoded.exp * 1000),
            userId: req.user.id,
          });
        }
      } catch (e) {
        // ignore
      }
    }

    res.status(200).json({ success: true, message: "Logged out successfully." });
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }
    res.status(200).json({
      success: true,
      user: {
        ...sanitizeUser(user),
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, error: "Both current and new password are required." });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ success: false, error: "New password must be at least 8 characters." });
    }
    if (!/[A-Z]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include an uppercase letter." });
    }
    if (!/[0-9]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include a number." });
    }
    if (!/[^A-Za-z0-9]/.test(newPassword)) {
      return res.status(400).json({ success: false, error: "New password must include a special character." });
    }

    const user = await User.findById(req.user.id).select("+passwordHash");
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Current password is incorrect." });
    }

    user.passwordHash = newPassword;
    await user.save();

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.decode(token);
        if (decoded && decoded.exp) {
          await TokenBlacklist.create({
            token,
            expiresAt: new Date(decoded.exp * 1000),
            userId: user._id,
          });
        }
      } catch (e) {
        // ignore
      }
    }

    res.status(200).json({ success: true, message: "Password changed successfully. Please log in again." });
  } catch (error) {
    next(error);
  }
};

const getBackendUrl = (req) => {
  if (process.env.BACKEND_URL) return process.env.BACKEND_URL;
  return `http://localhost:${process.env.PORT || 5000}`;
};

const getFrontendUrl = () => {
  return process.env.FRONTEND_URL || "http://localhost:3000";
};

exports.googleAuth = (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = `${getBackendUrl(req)}/api/auth/google/callback`;
  const scope = encodeURIComponent("email profile");
  const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
  
  res.redirect(googleUrl);
};

exports.googleCallback = async (req, res, next) => {
  const frontendUrl = getFrontendUrl();
  try {
    const { code, error: googleErr } = req.query;

    if (googleErr || !code) {
      return res.redirect(`${frontendUrl}/signin?error=${encodeURIComponent(googleErr || "google_cancelled")}`);
    }

    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = `${getBackendUrl(req)}/api/auth/google/callback`;

    // 1. Exchange authorization code for tokens
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      console.error("Google Token Exchange Failed:", tokenData);
      return res.redirect(`${frontendUrl}/signin?error=token_exchange_failed`);
    }

    // 2. Fetch User Profile from Google
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profile = await userRes.json();

    if (!profile.email) {
      return res.redirect(`${frontendUrl}/signin?error=no_email_provided`);
    }

    // 3. Find or Create User
    let user = await User.findOne({
      $or: [{ googleId: profile.id }, { email: profile.email.toLowerCase() }],
    });

    if (user && user.isDeactivated) {
      return res.redirect(`${frontendUrl}/signin?error=account_deactivated`);
    }

    if (!user) {
      const emailPrefix = profile.email.split("@")[0].replace(/[^a-zA-Z0-9_]/g, "");
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const username = `${emailPrefix}_${randomSuffix}`.toLowerCase();

      user = await User.create({
        firstName: profile.given_name || profile.name || "Google",
        lastName: profile.family_name || "User",
        username,
        email: profile.email.toLowerCase(),
        googleId: profile.id,
        authProvider: "google",
        profilePicture: profile.picture || "",
      });
    } else if (!user.googleId) {
      user.googleId = profile.id;
      if (!user.profilePicture && profile.picture) {
        user.profilePicture = profile.picture;
      }
      await user.save();
    }

    // 4. Generate Aspirev JWTs
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // 5. Redirect back to frontend with tokens
    res.redirect(`${frontendUrl}/signin?token=${accessToken}&refreshToken=${refreshToken}`);
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.redirect(`${frontendUrl}/signin?error=google_auth_failed`);
  }
};

exports.githubAuth = (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = `${getBackendUrl(req)}/api/auth/github/callback`;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:email`;
  
  res.redirect(githubUrl);
};

exports.githubCallback = async (req, res, next) => {
  const frontendUrl = getFrontendUrl();
  try {
    const { code, error: githubErr } = req.query;

    if (githubErr || !code) {
      return res.redirect(`${frontendUrl}/signin?error=${encodeURIComponent(githubErr || "github_cancelled")}`);
    }

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;
    const redirectUri = `${getBackendUrl(req)}/api/auth/github/callback`;

    // 1. Exchange authorization code for token
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      console.error("GitHub Token Exchange Failed:", tokenData);
      return res.redirect(`${frontendUrl}/signin?error=github_token_failed`);
    }

    // 2. Fetch User Profile from GitHub
    const userRes = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        "User-Agent": "Aspirev-App",
      },
    });
    const profile = await userRes.json();

    let userEmail = profile.email;

    // If GitHub email is marked private, fetch primary email from emails endpoint
    if (!userEmail) {
      const emailRes = await fetch("https://api.github.com/user/emails", {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "User-Agent": "Aspirev-App",
        },
      });
      const emails = await emailRes.json();
      if (Array.isArray(emails)) {
        const primary = emails.find((e) => e.primary && e.verified) || emails[0];
        if (primary) userEmail = primary.email;
      }
    }

    if (!userEmail) {
      return res.redirect(`${frontendUrl}/signin?error=no_github_email`);
    }

    const githubIdStr = String(profile.id);

    // 3. Find or Create User
    let user = await User.findOne({
      $or: [{ githubId: githubIdStr }, { email: userEmail.toLowerCase() }],
    });

    if (user && user.isDeactivated) {
      return res.redirect(`${frontendUrl}/signin?error=account_deactivated`);
    }

    if (!user) {
      const nameParts = (profile.name || profile.login || "GitHub User").trim().split(" ");
      const firstName = nameParts[0] || "GitHub";
      const lastName = nameParts.slice(1).join(" ") || "User";
      
      const cleanUsername = (profile.login || userEmail.split("@")[0]).replace(/[^a-zA-Z0-9_]/g, "");
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const username = `${cleanUsername}_${randomSuffix}`.toLowerCase();

      user = await User.create({
        firstName,
        lastName,
        username,
        email: userEmail.toLowerCase(),
        githubId: githubIdStr,
        authProvider: "github",
        profilePicture: profile.avatar_url || "",
      });
    } else if (!user.githubId) {
      user.githubId = githubIdStr;
      if (!user.profilePicture && profile.avatar_url) {
        user.profilePicture = profile.avatar_url;
      }
      await user.save();
    }

    // 4. Generate Aspirev JWTs
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // 5. Redirect back to frontend with tokens
    res.redirect(`${frontendUrl}/signin?token=${accessToken}&refreshToken=${refreshToken}`);
  } catch (error) {
    console.error("GitHub Auth Error:", error);
    res.redirect(`${frontendUrl}/signin?error=github_auth_failed`);
  }
};



