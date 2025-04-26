import axios from "axios";

// Create an axios instance with default settings
const api = axios.create({
  baseURL: "https://example.com/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
