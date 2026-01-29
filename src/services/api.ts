import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const apiError = error?.response?.data;

    if (apiError?.message) {
      toast.error(apiError.message);
    } else {
      toast.error("Erro inesperado. Tente novamente.");
    }

    return Promise.reject(error);
  }
);

export default api;
