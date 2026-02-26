import axios from "axios";

const api_client = axios.create({
  baseURL: "https://sign-plants-qualified-bras.trycloudflare.com",
  headers: {
    "Content-Type": "application/vnd.api+json",
    Accept: "application/vnd.api+json",
  },
});

export default api_client;
