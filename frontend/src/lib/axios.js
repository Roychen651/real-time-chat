import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api" // Local backend
      : "https://chat-o.netlify.app", // Replace with your deployed backend URL
  withCredentials: true,
});
