import './Card.css'

export default function Card({ title, image1, image2, image3, image4, image5 }) {
  return (
    <div className="container">
      <h1 className="title">
        {title}
      </h1>

      <div className="imagens">
        <div className="card-image-wrapper">
            <img src={image1} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image2} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image3} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image4} alt="card-image" className="card-image" />
        </div>

        <div className="card-image-wrapper">
            <img src={image5} alt="card-image" className="card-image" />
        </div>
      </div>
    </div>
  );
}
