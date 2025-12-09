import { faFaceSmile, faMusic, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./status.css"

export default function Status({ onPostCreated }) {
    const [postText, setPostText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const backendURL = import.meta.env.VITE_API_URL;

    const handleSendPost = async () => {
        if (!postText.trim()) {
            alert("Digite algo para postar!");
            return;
        }

        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = localStorage.getItem("userId") || user?.id;

        if (!token || !userId) {
            alert("Você não está logado!");
            return;
        }

        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("userId", userId);
            formData.append("description", postText);
            formData.append("bubbleId", "");

            const res = await fetch(`${backendURL}/posts`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Erro ao criar post.");
                return;
            }

            setPostText("");

            if (onPostCreated) {
                onPostCreated(data);
            }
        } catch (error) {
            console.error("Erro ao criar post:", error);
            alert("Erro no servidor.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendPost();
        }
    };

    return (
        <div className='container-status'>
            <div className="music">
                <FontAwesomeIcon icon={faMusic} id="icons" />
            </div>
            <div className='inside-line' />
            <div className="input-bubble">
                <input
                    placeholder='Qual a bolha de hoje?'
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                />
                <div style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faFaceSmile} id="smile-icon" />
                </div>
            </div>
            <div className='inside-line' />
            <div
                onClick={handleSendPost}
                style={{ cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.5 : 1 }}
            >
                <FontAwesomeIcon icon={faPaperPlane} id="arrow-icon" />
            </div>
        </div>
    )
}