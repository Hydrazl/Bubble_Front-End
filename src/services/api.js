// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function loginUser(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Erro ao fazer login");
  }

  const data = await res.json();

  // salva o token JWT localmente para futuras requisições
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  return data;
}
