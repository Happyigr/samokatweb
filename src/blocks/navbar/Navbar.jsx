import React from "react";
import "./navbar.css";
import logo from "./../../assets/logo.png";

export default function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <img className='header-logo' alt={logo} src={logo} />
        <div className='header-links'>
          <p>
            <a href='#Product'>O продукте</a>
          </p>
          <p>Внешний вид</p>
          <p>Безопасность</p>
          <p>Отзывы</p>
          <p>FAQ</p>
        </div>
        <div className='header-right'>
          <button className='header-button'>Купить</button>
        </div>
      </div>
    </div>
  );
}
