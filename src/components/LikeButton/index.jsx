import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { toggleLike } from "../../services/api"; // Ajuste o caminho conforme sua estrutura
import "./LikeButton.css";

export default function LikeButton({
    postId,
    initialLiked = false,
    initialCount = 0,
    onLikeChange
}) {
    const [liked, setLiked] = useState(initialLiked);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        // Previne cliques múltiplos
        if (isLoading) return;

        setIsLoading(true);

        // Guarda o estado anterior para poder reverter em caso de erro
        const previousLiked = liked;
        const newLiked = !liked;

        // Atualização otimista - muda a UI antes da resposta da API
        setLiked(newLiked);

        // Notify parent optimistically
        if (onLikeChange) {
            onLikeChange({ liked: newLiked });
        }

        // Animação apenas quando curtir
        if (newLiked) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }

        try {
            // Chama a API para dar/remover like
            const response = await toggleLike(postId);

            // Atualiza com os dados reais da API
            setLiked(response.liked);

            // Notifica o componente pai (Post) sobre a mudança
            if (onLikeChange) {
                onLikeChange({
                    liked: response.liked,
                    likesCount: response.likesCount
                });
            }

        } catch (error) {
            console.error("Erro ao curtir post:", error);

            // Reverte para o estado anterior em caso de erro
            setLiked(previousLiked);

            // Mostra mensagem de erro ao usuário
            alert("Erro ao curtir o post. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={`text-4xl cursor-pointer transition-transform duration-200 ease-out 
                ${liked ? "scale-125 text-red-500" : "scale-100 text-gray-400"} 
                ${isAnimating ? "animate-like" : ""}
                ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
            aria-label={liked ? "Descurtir" : "Curtir"}
        >
            {liked ? (
                <IoHeart className="animate-like-bounce" />
            ) : (
                <IoHeartOutline />
            )}
        </button>
    );
}