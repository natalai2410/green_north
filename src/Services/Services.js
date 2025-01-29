import React from "react";

import "../Services/Services.css";

function Services() {
  return (
    <div className="services">
      <div className="page__container">
        <div className="services__content">
          <p className="services__title">Услуги</p>
          <ul className="services__list">
            <il className="services__list-item">
              <div className="services__item-txt">
                Аренда участка с бытовой постройкой
              </div>
            </il>
            <il className="services__list-item">
              <div className="services__item-txt">
                Аренда садового инвертаря
              </div>
            </il>
            <il className="services__list-item">
              <div className="services__item-txt">Аренда грядки</div>
            </il>
            <il className="services__list-item">
              <div className="services__item-txt"> Аренда теплицы</div>
            </il>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
