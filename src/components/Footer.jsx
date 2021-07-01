import TrafalgarLogoWhite from '../assets/images/logo-white.svg';

import '../styles/Footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company">
          <img src={TrafalgarLogoWhite} alt="" />
          <p>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
          </p>
          <p className="reserved">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </div>
        <div className="links">
          <dl>
            <dt>Company</dt>
            <dd> <a href="/">About</a></dd>
            <dd> <a href="/">Testimonials</a></dd>
            <dd> <a href="/">Find a doctor</a></dd>
            <dd> <a href="/">Apps</a></dd>
          </dl>
          <dl>
            <dt>Regio</dt>
            <dd> <a href="/">Indonesia</a></dd>
            <dd> <a href="/">Singapore</a></dd>
            <dd> <a href="/">Hongkong</a></dd>
            <dd> <a href="/">Canada</a></dd>
          </dl>
          <dl>
            <dt>Help</dt>
            <dd> <a href="/">Help center</a></dd>
            <dd> <a href="/">Contact support</a></dd>
            <dd> <a href="/">Instructions</a></dd>
            <dd> <a href="/">How it works</a></dd>
          </dl>
        </div>
      </div>
    </footer>
  );
}