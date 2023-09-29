import React from "react";

import bike from "./../../assets/bike.png";

const text = {
  main: "Стильный электросамокатс мощным аккумулятором",
  info: "Улучшенная производительность для дальних путешествий.\n Работает так же просто, как и выглядит.",
};

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <div className='banner__content-text'>
          <h1 className='banner__content-text-header'>{text.main}</h1>
          <h2 className='banner__content-text-info'>{text.info}</h2>
        </div>
        <div className='banner__content-button'>
          <button className='dark-light-mode-button'>dark</button>
        </div>
      </div>
      <div className='banner__bike'>
        <img className='banner__bike-image' alt={bike} src={bike} />
      </div>
    </div>
  );
}
