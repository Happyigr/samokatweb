import React from "react";
import "./banner.css";
import bike from "./../../assets/bike.png";
import blur1 from "./../../assets/rightleftblur.png";

const text = {
  main: "Стильный электросамокат\nс мощным аккумулятором",
  info: "Улучшенная производительность\nдля дальних путешествий.\nРаботает так же просто,\nкак и выглядит.",
};

export default function Banner() {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <div className='banner__content-text'>
          <h1 className='banner__content-text-header'>{text.main}</h1>
          <h2 className='banner__content-text-info'>{text.info}</h2>
        </div>
        {/* make animation + darkmode */}
        <div className='banner__content-button'>
          <div className='slider' />
          <div className='button-text'>
            <div className='white-text'>Белый</div>
            <div className='black-text'>Чёрный</div>
          </div>
        </div>
      </div>
      <div className='banner__bike'>
        <img className='banner__bike-image' alt={bike} src={bike} />
      </div>
      <div className='leftup__blur'>
        <img alt={blur1} src={blur1} />
      </div>
    </div>
  );
}
