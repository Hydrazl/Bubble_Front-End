import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function loginUser(email, password) {
  const { data } = await axios.post(`${API_URL}/`, { email, password });

  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}
