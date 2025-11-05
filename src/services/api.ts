import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // pega do .env
});

export default api;
