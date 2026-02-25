import axios from "axios";

const api_client = axios.create({
  baseURL: "http://initiatives-episode-deaths-driven.trycloudflare.com",
});

export default api_client;
