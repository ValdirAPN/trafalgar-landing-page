import '../styles/SlideCard.scss';

export function SlideCard({ customer }) {
  return (
    <div className="card-content">
      <div className="customer">
        <img src={customer.imgUrl} alt="" />
        <div>
          <p className="name">{customer.name}</p>
          <p>{customer.position}</p>
        </div>
      </div>
      <p className="testimonial">{customer.testimonial}</p>
    </div>
  );
}