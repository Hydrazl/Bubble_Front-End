import './Card.css'

export default function Card({ title, image }) {
  return (
    <div className="container">
      <h1 className="title">
        {title}
      </h1>

      <div className="imagens">
        <div className="card-image-wrapper">
            <img src={image} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image} alt="card-image" className="card-image" />
        </div>
      </div>
    </div>
  );
}
