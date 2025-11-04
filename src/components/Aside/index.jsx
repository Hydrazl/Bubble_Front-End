import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitAlt,
  faGithub,
  faPython,
  faSteam,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBasketball,
  faPlane,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import "./Aside.css";

export default function Aside() {
  const icons = [
    faGithub,
    faRocket,
    faPlane,
    faGitAlt,
    faBasketball,
    faTiktok,
    faPython,
    faSteam,
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
        {icons.map((icon, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              transform: `translate(${positions[i].x}px, ${positions[i].y}px)`,
              transition: "transform 3s cubic-bezier(0.4, 0, 0.2, 1)",
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <FontAwesomeIcon icon={icon} className="bubble-icon" />
          </div>
        ))}
      </div>
    </aside>
  );
}