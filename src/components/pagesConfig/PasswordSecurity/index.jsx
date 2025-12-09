import { useState } from "react";
import axios from "axios";
import "./passwordSecurity.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function PasswordSecurity() {
    const token = localStorage.getItem("token");

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleChangePassword() {
        if (!oldPassword || !newPassword) {
            alert("Preencha os dois campos!");
            return;
        }

        setLoading(true);

        try {
            const res = await axios.put(
                `${API_URL}/change-password`,
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            alert(res.data.message);
            setOldPassword("");
            setNewPassword("");
        } catch (error) {
            alert(error.response?.data?.message || "Erro ao alterar senha.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="ps-container">
            <h1>Senha e Segurança</h1>
            <p>Gerencie a sua senha e mantenha sua conta protegida.</p>

            <div className="ps-card">
                <label>Senha Atual</label>
                <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Digite sua senha atual"
                />

                <label>Nova Senha</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Digite a nova senha"
                />

                <button
                    className="ps-btn"
                    onClick={handleChangePassword}
                    disabled={loading}
                >
                    {loading ? "Alterando..." : "Alterar Senha"}
                </button>
            </div>
        </div>
    );
}
