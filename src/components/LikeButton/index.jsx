import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import "./LikeButton.css";

export default function LikeButton({ initialLiked = false, onToggle }) {
    const [liked, setLiked] = useState(initialLiked);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        const newValue = !liked;
        setLiked(newValue);

        if (newValue) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }

        if (onToggle) onToggle(newValue);
    };

    return (
        <button
            onClick={handleClick}
            className={`text-4xl cursor-pointer transition-transform duration-200 ease-out 
                ${liked ? "scale-125 text-red-500" : "scale-100 text-gray-400"} 
                ${isAnimating ? "animate-like" : ""}
            `}
        >
            {liked ? (
                <IoHeart className="animate-like-bounce" />
            ) : (
                <IoHeartOutline />
            )}
        </button>
    );
}
