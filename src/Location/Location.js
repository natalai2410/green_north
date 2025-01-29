import React from "react";

import "../Location/Location.css";

function Location() {
  return (
    <section className="page__container ">

      <div className="location">
      <div className="location__image_1"></div>
        <div className="location__content">
          <p className="location__title">Место для вашего отдыха</p>
          <div className="location__desctiprion">
            <div className="location__text">
              <ul className="location__list">
              <div className="location__text_1">Преимущества:</div>
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
                <li></li>
              </ul>
            </div>
            <div className="location__image"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
