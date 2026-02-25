import axios from "axios";

const api_client = axios.create({
  baseURL: "https://sign-plants-qualified-bras.trycloudflare.com",
});

export default api_client;
