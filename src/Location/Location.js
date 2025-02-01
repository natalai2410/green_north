import React from "react";

import "../Location/Location.css";

function Location() {
  return (
    <section className="page__container ">
      <div className="location">
        <div className="location__desctiprion">
          <div className="location__text">
            <div className="location__text2">
              Место для
              <span className="location__text2_green"> вашего</span> отдыха
            </div>
            <p className="location__title">Преимущества</p>
            <ul className="location__list">
              <li>
                Возможность отключения от цивилизации. Здесь можно
                сосредоточиться на себе и своих близких.
              </li>
              <li>
                Отсутствие шума города, пробок и толпы людей позволяет
                расслабиться и восстановить силы.
              </li>
              <li>
                Можно организовать пикник, поиграть в активные игры на свежем
                воздухе.
              </li>
              <li>
                А можно заняться садоводством и уходом за растениями, что
                являются отличным хобби, которое приносит удовольствие и
                расслабляет.
              </li>
            </ul>
            <div className="posts__button_green">
              <a className="posts__button_text" href="https://forms.gle/mp2vW7qYRGgH3ZXt7">Забронировать</a>        
            </div>
          </div>
          <div className="location__image"></div>
        </div>
      </div>
    </section>
  );
}

export default Location;
