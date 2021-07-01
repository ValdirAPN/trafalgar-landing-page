import { Button } from './Button';
import { ArticleCard } from './ArticleCard'

import diseaseDetection from '../assets/images/disease-detection.png';
import herbalMedicines from '../assets/images/herbal-medicines.png';
import naturalCare from '../assets/images/natural-care.png';

import '../styles/LatestArticles.scss'

export function LatestArticles() {
  return (
    <section className="latest-articles">
      <h2>Check out our latest articles</h2>
      <div className="articles">
        <ArticleCard
          cardImg={diseaseDetection}
          title="Disease detection, check up in the laboratory"
          text="In this case, the role of the health laboratory is very important to do a disease detection..."
        />

        <ArticleCard
          cardImg={herbalMedicines}
          title="Herbal medicines that are safe for consumption"
          text="Herbal medicine is very widely used at this time because of its very good for your health..."
        />

        <ArticleCard
          cardImg={naturalCare}
          title="Natural care for healthy facial skin"
          text="A healthy lifestyle should start from now and also for your skin health.
          There are some..."
        />

      </div>
      <Button>View all</Button>
    </section>
  );
}