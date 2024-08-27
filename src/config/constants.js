export const BASE_URL =
  process.env.NODE_ENV == "production"
    ? `https://accommodeme-backend.onrender.com/api/v1`
    : `http://127.0.0.1:8000/api/v1`;

export const AUTH_URL =
  process.env.NODE_ENV == "production"
    ? `https://accommodeme-backend.onrender.com/api/v1`
    : `http://127.0.0.1:8000/api/v1`;
