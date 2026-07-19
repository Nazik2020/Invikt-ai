const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  const { hostname } = window.location;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "http://localhost:5000/api";
  }

  return "https://aspirev-backend-bhe7g2fdabbycbap.eastus-01.azurewebsites.net/api";
};

export const API_URL = getApiUrl();
