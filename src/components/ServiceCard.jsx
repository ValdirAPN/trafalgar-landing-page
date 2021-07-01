import '../styles/ServiceCard.scss';

export function ServiceCard({ imgSrc, title, description }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imgSrc} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}