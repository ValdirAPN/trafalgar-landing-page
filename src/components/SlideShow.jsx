import { useEffect, useState, useCallback } from 'react';
import customersData from '../services/customers-api.json';

import { SlideCard } from './SlideCard';

import arrow from '../assets/images/arrow.svg';

import '../styles/SlideShow.scss';



export function SlideShow() {
  const [slidePosition, setSlidePosition] = useState(0);
  const [customer, setCustomer] = useState({});

  const handleNextSlidePosition = useCallback(() => {

    slidePosition === customersData.length - 1 ?
      setSlidePosition(0) :
      setSlidePosition(slidePosition + 1);

  }, [slidePosition])

  const handlePreviousSlidePosition = useCallback(() => {

    slidePosition === 0 ?
      setSlidePosition(2) :
      setSlidePosition(prevState => prevState - 1);

  }, [slidePosition])

  useEffect(() => {
    setCustomer(customersData[slidePosition]);
  }, [slidePosition])

  return (
    <section className="slide-show">
      <div className="cards">
        <h2>What our costumers are saying</h2>
        <SlideCard customer={customer} />
      </div>
      <div className="slider">
        <button type="button" onClick={handlePreviousSlidePosition}>
          <img src={arrow} alt="" className="left-arrow" />
        </button>

        {
          customersData.map((customer, index) => {
            return <div key={index} className={`circle ${index === slidePosition ? 'active' : ''}`}></div>
          })
        }

        <button type="button" onClick={handleNextSlidePosition}>
          <img src={arrow} alt="" className="right-arrow" />
        </button>
      </div>
    </section>
  );
}