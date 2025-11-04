import { useEffect, useState } from "react";
import { FaGamepad, FaMusic, FaCamera, FaBook } from "react-icons/fa";

const communities = [
  { id: 1, name: "Games", icon: <FaGamepad />, link: "/community/games" },
  { id: 2, name: "Música", icon: <FaMusic />, link: "/community/music" },
  { id: 3, name: "Fotografia", icon: <FaCamera />, link: "/community/photo" },
  { id: 4, name: "Leitura", icon: <FaBook />, link: "/community/books" },
];

export default function AsideBubbles() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Cria posições iniciais aleatórias para as bolhas
    setPositions(
      communities.map(() => ({
        x: Math.random() * 20 - 10, // -10 a 10
        y: Math.random() * 20 - 10,
      }))
    );

    // Faz o movimento contínuo das bolhas
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map(() => ({
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">
      {communities.map((comm, index) => (
        <a
          key={comm.id}
          href={comm.link}
          title={comm.name}
          className="relative w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
          style={{
            transform: `translate(${positions[index]?.x || 0}px, ${
              positions[index]?.y || 0
            }px)`,
            transition: "transform 2.5s ease-in-out",
          }}
        >
          <span className="text-2xl">{comm.icon}</span>
        </a>
      ))}
    </aside>
  );
}
