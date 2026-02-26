import axios from "axios";
import { useAuthStore } from "../hooks/useAuthStore";

const api_client = axios.create({
  baseURL: "https://sign-plants-qualified-bras.trycloudflare.com",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

api_client.interceptors.request.use((config) => {
  const token = useAuthStore.getState().userData?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api_client;
