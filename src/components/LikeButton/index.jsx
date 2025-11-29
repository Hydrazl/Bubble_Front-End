import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import axios from "axios";

export default function LikeButton({ postId, userId, initialLiked = false }) {
    const [liked, setLiked] = useState(initialLiked);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = async () => {
        const newValue = !liked;
        setLiked(newValue);

        if (newValue) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }

        try {
            const response = await axios.post("http://localhost:4000/like/toggle", {
                postId,
                userId
            });

            // vamo garantir que vai no backend:
            setLiked(response.data.liked);

        } catch (err) {
            console.error("Erro ao enviar like:", err);
            setLiked(liked);
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className={`text-4xl cursor-pointer transition-transform duration-200 ease-out 
                ${liked ? "scale-125 text-red-500" : "scale-100 text-gray-400"} 
                ${isAnimating ? "animate-like" : ""}
            `}
        >
            {liked ? <IoHeart className="animate-like-bounce" /> : <IoHeartOutline />}
        </button>
    );
}
