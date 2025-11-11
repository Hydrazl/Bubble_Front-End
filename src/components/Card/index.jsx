import './Card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, image }) {
  return (
    <div className="card-container">
      <h1 className="card-title">
        {title}
      </h1>

      <div className="card-image-wrapper">
        <img src={image} alt="card-image" className="card-image" />
      </div>
    </div>
  );
}
