import React from "react";
import "./design.css";

const text = {
  header: "Лаконичный современный дизайн,\nв котором нет ничего лишнего",
  images: {
    design: {
      header: "Минималистичный дизайн ",
      text: "Рама, компоненты и аксессуары скутера выдержаны в едином стиле, где удобство пользователя выходит на первое место.  Одного прикосновения достаточно, чтобы запустить самокат.",
    },
    control: {
      header: "Удобная панель управления",
      text: "Удобно расположенные элементы управления. Отображение\n8 типов данных в реальном времени: скорость, режим, заряд аккумулятора, состояние блокировки и другая информация.",
    },
  },
};

export default function Design() {
  return (
    <div className='design'>
      <div className='design__content'>
        <div className='design__content-header'>{text.header}</div>
        <div className='design__content-images'>
          <div className='design__content-image-design'>
            <div className='image-header'>{text.images.design.header}</div>
            <div className='image-text'>{text.images.design.text}</div>
          </div>
          <div className='design__content-image-control'>
            <div className='image-header'>{text.images.control.header}</div>
            <div className='image-text'>{text.images.control.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
