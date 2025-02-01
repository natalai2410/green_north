import React from "react";

import "../About/About.css";

function About() {
  return (
    <section className="page__container ">
      <div className="about">
        <div className="about__content">
          <div className="about__desctiprion">
          <div className="about__text">
            <div className="about__text1">Добро пожаловать!</div>
            <div className="about__text2">Сделаем север   <span className="about__text2_green">зеленым</span> вместе</div>
            <div className="about__text3">Наш сервис создан специально для тех, кто хочет заниматься садоводством без необходимости вкладывать большие средства в покупку оборудования и материалов. Мы предлагаем широкий выбор теплиц различных размеров и конструкций, 
                а также готовых грядок, которые идеально подойдут для выращивания овощей, фруктов, ягод и цветов</div>
                <div className="posts__button_green">
              <a className="posts__button_text" href="https://forms.gle/mp2vW7qYRGgH3ZXt7" >Оставить заявку</a>        
            </div>
          </div>
            <div className="about__image"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
