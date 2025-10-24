import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./LikeButton.css";

export default function LikeButton({ initialLiked = false, onToggle}) {
    const [liked, setLiked] = useState(initialLiked);

    const handleClick = () => {
        const newValue = !liked;
        setLiked(newValue);
        if (onToggle) onToggle(newValue)
    };

    return (
        <button onClick={handleClick} className={`text-2xl cursor-pointer transition-transform duration-200 ease-out ${liked ? "scale-125 text-red-500" : "scale-100 text-gray-400"}`}>
            {liked ? (<FaHeart className="animate-ping-once" />) : <FaRegHeart />}
        </button>
    );
}