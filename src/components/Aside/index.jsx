import { useEffect, useState } from "react";
import {
  FaCode,
  FaPaw,
  FaPlane,
  FaRegLaughSquint,
  FaBasketballBall,
  FaTree,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import "./Aside.css";
import { usePosts } from "../../context/PostContext";

export default function Aside() {
  const { setFilter } = usePosts();

  // Ícones + categorias correspondentes
  const bubbles = [
    { icon: FaRegLaughSquint, id: "funny" },
    { icon: IoGameController, id: "games" },
    { icon: FaPaw, id: "pets" },
    { icon: FaPlane, id: "travel" },
    { icon: FaBasketballBall, id: "sports" },
    { icon: FaMusic, id: "music" },
    { icon: FaTree, id: "nature" },
    { icon: FaCode, id: "dev" },
  ];

  const [positions, setPositions] = useState(() =>
    bubbles.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const move = () => {
      setPositions(() =>
        bubbles.map(() => ({
          x: Math.random() * 12 - 6,
          y: Math.random() * 12 - 6,
        }))
      );
    };

    move();
    const interval = setInterval(move, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="aside-root">
      <div className="bubble-container">
        {bubbles.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="bubble"
              onClick={() => setFilter(item.id)}
              style={{
                transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
                transition: "transform 3s cubic-bezier(0.4, 0, 0.2, 1)",
                animationDelay: `${i * 0.1}s`,
                cursor: "pointer",
              }}
            >
              <Icon className="bubble-icon" />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
