import React from "react";
import "./info.css";
import foto_speed from "../../assets/speed.png";
import foto_energy from "../../assets/energy.png";
import foto_battery from "../../assets/battery.png";
import blur from "../../assets/blurinfo.png";

const text = {
  header: "Мощная батарея и экономичный расход\nзаряда позволяют преодолевать\nрасстояния до 45 км",
  karoussel: {
    speed: {
      header: "Три режима скорости",
      text: "Три режима езды позволяют почуствовать себя комфортно в любой ситуации. Режим «S» увеличитвает скорость, если опаздываете на работу. Во время прогулки по парку активируйте режим «D». Включите режим «Пешеход», когда двигаетесь по оживлённой улице.",
    },
    energy: {
      header: "Система восстановления энергии",
      text: "Во время торможения и движения по инерции система преобразовывает кинетическую энергию в электрическую, позволяя увеличить общий запас хода самоката.",
    },
    battery: {
      header: "Мощная батарея",
      text: "Самокат оснащен аккумулятором емкостью 12 800 мАч. Это позволяет преодолевать расстояния до 45 км без подзарядки.",
    },
  },
};

export default function Info() {
  return (
    <div className='info'>
      <div className='blur' />
      <div className='info__content'>
        <div className='info__content-header'>{text.header}</div>
        <div className='info__content-karoussel'>
          <div className='karoussel-speed'>
            <div className='karoussel-header'>{text.karoussel.speed.header}</div>
            <div className='orange-line-connect' />
            <div className='karoussel-text'>{text.karoussel.speed.text}</div>
            <div className='karoussel-foto'>
              <img src={foto_speed} alt={foto_speed} />
            </div>
          </div>
          <div className='karoussel-energy'>
            <div className='karoussel-header'>{text.karoussel.energy.header}</div>
            <div className='orange-line-connect' />
            <div className='karoussel-text'>{text.karoussel.energy.text}</div>
            <div className='karoussel-foto'>
              <img src={foto_energy} alt={foto_energy} />
            </div>
          </div>
          <div className='karoussel-battery'>
            <div className='karoussel-header'>{text.karoussel.battery.header}</div>
            <div className='orange-line' />
            <div className='karoussel-text'>{text.karoussel.battery.text}</div>
            <div className='karoussel-foto'>
              <img src={foto_battery} alt={foto_battery} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
