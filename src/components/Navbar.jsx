import TrafalgarLogo from '../assets/images/logo.svg';

import '../styles/Navbar.scss';

export function Navbar() {
  return (
    <header>
      <img src={TrafalgarLogo} alt="" />
      <nav>
        <ul>
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/">Find a doctor</a></li>
          <li><a href="/">Apps</a></li>
          <li><a href="/">Testimonials</a></li>
          <li><a href="/">About us</a></li>
        </ul>
      </nav>
    </header>
  );
}
