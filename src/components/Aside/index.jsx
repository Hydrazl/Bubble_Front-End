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

export default function Aside() {
  const icons = [
    FaRegLaughSquint,
    IoGameController,
    FaPaw,
    FaPlane,
    FaBasketballBall,
    FaMusic,
    FaTree,
    FaCode,
  ];

  const [positions, setPositions] = useState(() =>
    icons.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const move = () => {
      setPositions((prev) =>
        prev.map(() => ({
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
        {icons.map((Icon, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
              transition: "transform 3s cubic-bezier(0.4, 0, 0.2, 1)",
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <Icon className="bubble-icon" />
          </div>
        ))}
      </div>
    </aside>
  );
}
