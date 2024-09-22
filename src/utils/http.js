import { BASE_URL } from "@/config/constants";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

// Create a non-authorized axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 500000,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

// Create an authorized axios instance
const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 500000,
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

// Function to get the authorization token (example using cookies)
const getAuthToken = () => Cookies.get("authToken");

// Add a request interceptor to include the token in authorized requests
axiosAuthInstance.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401 Unauthorized
const addResponseInterceptor = (instance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);

      if (error.response && error.response.status === 401) {
        console.log("ejej");
        localStorage.clear();
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
};

addResponseInterceptor(axiosAuthInstance);

// Helper function to extract the response body
const responseBody = (response) => response.data;

// Non-authorized requests
const requests = {
  get: (url) => axiosInstance.get(url).then(responseBody),

  post: (url, body, option) =>
    axiosInstance.post(url, body, option).then(responseBody),

  put: (url, body) => axiosInstance.put(url, body).then(responseBody),

  patch: (url, body) => axiosInstance.patch(url, body).then(responseBody),

  delete: (url) => axiosInstance.delete(url).then(responseBody),
};

// Authorized requests
const authRequests = {
  get: (url) => axiosAuthInstance.get(url).then(responseBody),

  post: (url, body, option) =>
    axiosAuthInstance.post(url, body, option).then(responseBody),

  put: (url, body) => axiosAuthInstance.put(url, body).then(responseBody),

  patch: (url, body) => axiosAuthInstance.patch(url, body).then(responseBody),

  delete: (url) => axiosAuthInstance.delete(url).then(responseBody),
};

export { requests, authRequests };
