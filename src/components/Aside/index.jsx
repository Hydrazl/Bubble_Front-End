import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLaughBeam,
  FaGamepad,
  FaPaw,
  FaPlane,
  FaBasketballBall,
  FaMusic,
  FaLeaf,
  FaCode,
} from "react-icons/fa";

import "./Aside.css";

export default function Aside() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [bubbles, setBubbles] = useState([]);
  const [positions, setPositions] = useState([]);

  // Mapa de ícones por nome da bolha
  const iconMap = {
    funny: FaLaughBeam,
    games: FaGamepad,
    pets: FaPaw,
    travel: FaPlane,
    sports: FaBasketballBall,
    music: FaMusic,
    nature: FaLeaf,
    dev: FaCode,
  };

  // Carrega bolhas do back-end
  useEffect(() => {
    async function loadBubbles() {
      try {
        const res = await fetch(`${API_URL}/bubbles`);
        const data = await res.json();

        setBubbles(data);
        setPositions(data.map(() => ({ x: 0, y: 0 })));
      } catch (err) {
        console.log("Erro ao carregar bolhas:", err);
      }
    }

    loadBubbles();
  }, []);

  // animação das bolhas
  useEffect(() => {
    if (bubbles.length === 0) return;

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
  }, [bubbles]);

  return (
    <aside className="aside-root">
      <div className="bubble-container">
        {bubbles.map((bubble, i) => {
          // pega ícone pelo nome OU usa fallback
          const Icon = iconMap[bubble.name] || FaGamepad;

          return (
            <div
              key={bubble.id}
              className="bubble"
              onClick={() => navigate(`/bubble/${bubble.id}`)}
              style={{
                transform: `translate(${positions[i]?.x}px, ${positions[i]?.y}px)`,
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
