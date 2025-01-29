import React from "react";

import "../About/About.css";

function About() {
  return (
    <section className="page__container ">
      <div className="about">
        <div className="about__content">
          <p className="about__title">О нас</p>
          <div className="about__desctiprion">
            <div className="about__text">
            <div >Добро пожаловать на сайт аренды теплиц, грядок и садового инвертаря!</div>
            <div >Наш сервис создан специально для тех, кто хочет заниматься садоводством без необходимости вкладывать большие средства в покупку оборудования и материалов. Мы предлагаем широкий выбор теплиц различных размеров и конструкций, 
                а также готовых грядок, которые идеально подойдут для выращивания овощей, фруктов, ягод и цветов.</div>
            </div>
            <div className="about__image"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
