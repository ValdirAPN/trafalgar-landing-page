import { Button } from "./Button";

import '../styles/ContentSection.scss';

export function ContentSection({ textPosition, title, text, buttonText, image }) {

  return textPosition === "right" ? (
    <section className="content-section">
      <img src={image} alt="" className="content-section-img right" />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>{buttonText}</Button>
      </div>
    </section >
  ) : (
    <section className="content-section">
      <div >
        <h2>{title}</h2>
        <p>{text}</p>
        <Button>{buttonText}</Button>
      </div>
      <img src={image} alt="" className="content-section-img" />
    </section >

  )

}