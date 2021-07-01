import { Button } from "./components/Button";
import { Navbar } from "./components/Navbar";

import illustration from './assets/images/illustration.png';
import backgroundShape from './assets/images/background-shape.svg';
import leadingHealthcareProviders from './assets/images/leading-healthcare-providers.png';
import downloadOurMobileApps from './assets/images/download-our-mobile-apps.png';

import './styles/Home.scss';

import { ServiceCards } from "./components/ServiceCards";
import { ContentSection } from "./components/ContentSection";
import { SlideShow } from "./components/SlideShow";
import { LatestArticles } from "./components/LatestArticles";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <>
      <div className="root">
        <Navbar />
        <main>
          <section className="hero">
            <div className="content">
              <h1>Virtual healthcare for you</h1>
              <p>
                Trafalgar provides progressive, and affordable
                healthcare, accessible on mobile and online
                for everyone
              </p>
              <Button className="filled">Consult today</Button>
            </div>
            <img src={illustration} alt="" />
          </section>


          <section className="our-services">
            <div className="content">
              <h2>Our services</h2>
              <p>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
              </p>
            </div>
            <ServiceCards />
            <img src={backgroundShape} alt="" className="background-shape" />
            <Button>Learn more</Button>
          </section>

          <ContentSection
            textPosition="right"
            title="Leading healthcare providers"
            text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
            buttonText="Learn more"
            image={leadingHealthcareProviders}
          />

          <ContentSection
            title="Download our mobile apps"
            text="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
            buttonText="Download"
            image={downloadOurMobileApps}
          />

          <SlideShow />

          <LatestArticles />
        </main>
      </div>
      <Footer />
    </>
  );
}
