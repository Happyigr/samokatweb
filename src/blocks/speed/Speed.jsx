import React from "react";
import logo from "../../assets/logo.png";
import "./speed.css";

const text = {
  header: "Высокая скорость\nпередвижения",
  info: "Двигатель мощностью до 600 Вт позволяет\nразвивать скорость до 25 км/ч.",
};

export default function Speed() {
  return (
    <div className='speed'>
      <div className='speed__content'>
        <div className='speed__content-logo'>
          <img className='speed__content-logo-image' src={logo} alt={logo} />
        </div>
        <div className='speed__content-text'>
          <div className='speed__content-text-header'>{text.header}</div>
          <div className='speed__content-text-info'>{text.info}</div>
        </div>
      </div>
    </div>
  );
}
