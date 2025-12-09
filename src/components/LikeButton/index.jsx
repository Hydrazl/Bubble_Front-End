import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { toggleLike } from "../../services/api";
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
      
        if (isLoading) return;

        setIsLoading(true);

       
        const previousLiked = liked;
        const newLiked = !liked;

       
        setLiked(newLiked);

        if (onLikeChange) {
            onLikeChange({ liked: newLiked });
        }

    
        if (newLiked) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }

        try {
          
            const response = await toggleLike(postId);

            
            setLiked(response.liked);

           
            if (onLikeChange) {
                onLikeChange({
                    liked: response.liked,
                    likesCount: response.likesCount
                });
            }

        } catch (error) {
            console.error("Erro ao curtir post:", error);

           
            setLiked(previousLiked);

          
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