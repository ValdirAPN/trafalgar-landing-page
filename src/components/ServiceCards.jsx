import { ServiceCard } from "./ServiceCard";

import searchDoctor from '../assets/images/search-doctor.svg';
import onlinePharmacy from '../assets/images/online-pharmacy.svg';
import consultation from '../assets/images/consultation.svg';
import detailsInfo from '../assets/images/details-info.svg';
import emergencyCare from '../assets/images/emergency-care.svg';
import traking from '../assets/images/tracking.svg';

import '../styles/ServiceCards.scss';


export function ServiceCards() {
  return (
    <div className="service-cards">
      <ServiceCard
        imgSrc={searchDoctor}
        title="Search doctor"
        description="Choose your doctor from thousands of specialist, general, and trusted hospitals"
      />
      <ServiceCard
        imgSrc={onlinePharmacy}
        title="Online pharmacy"
        description="Buy  your medicines with our mobile application with a simple delivery system"
      />
      <ServiceCard
        imgSrc={consultation}
        title="Consultation"
        description="Free consultation with our trusted doctors and get the best recomendations"
      />
      <ServiceCard
        imgSrc={detailsInfo}
        title="Details info"
        description="Free consultation with our trusted doctors and get the best recomendations"
      />
      <ServiceCard
        imgSrc={emergencyCare}
        title="Emergency care"
        description="You can get 24/7 urgent care for yourself or your children and your
        lovely family"
      />
      <ServiceCard
        imgSrc={traking}
        title="Tracking"
        description="Track and save your medical history and health data"
      />
    </div>
  );
}