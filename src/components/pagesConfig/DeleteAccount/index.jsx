import { useState } from "react";
import axios from "axios";
import "./deleteAccount.css";

const API_URL = import.meta.env.VITE_API_URL;

export default function DeleteAccount() {
    const token = localStorage.getItem("token");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        if (confirm !== "DELETAR") {
            alert('Digite "DELETAR" para confirmar.');
            return;
        }

        setLoading(true);

        try {
            const res = await axios.delete(`${API_URL}/delete-account`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert(res.data.message);

            localStorage.removeItem("token");
            window.location.href = "/"; // deslogar e mandar pro login
        } catch (error) {
            alert(error.response?.data?.message || "Erro ao excluir conta.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="da-container">
            <h1 className="text-[var(--text-primary)]">Excluir Conta</h1>
            <p className="text-[var(--text-primary)]">
                Esta ação é permanente. Seus dados serão excluídos e não poderão ser recuperados.
            </p>

            <div className="da-card">
                <label className="text-[var(--text-primary)]">Para confirmar, digite: <b>DELETAR</b></label>
                <input
                    type="text"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Digite DELETAR"
                />

                <button className="da-btn" onClick={handleDelete} disabled={loading}>
                    {loading ? "Excluindo..." : "Excluir Conta"}
                </button>
            </div>
        </div>
    );
}
