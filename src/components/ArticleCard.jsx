import arrow from '../assets/images/arrow.svg';

import '../styles/ArticleCard.scss';

export function ArticleCard({ cardImg, title, text }) {
  return (
    <div className="article-card">
      <img src={cardImg} alt="" className="article-card-image" />
      <div className="text-content">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="/">Read more <img src={arrow} alt="" /></a>
      </div>
    </div>
  );
}