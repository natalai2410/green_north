import React from "react";
import headerLogo from "../images/logo_2.png";

import "../Header/Header.css";
// import { Link } from "react-router";

function Header() {
  return (
    <section className="page__container ">
      <div className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={headerLogo} alt="логотип" />
          </div>
          <nav className="header__navigation">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a to="/" className="navigation__link">
                  О нас
                </a>
              </li>

              <li className="navigation__item">
                <div to="/" className="navigation__link">
                  Услуги
                </div>
              </li>

              <li className="navigation__item">
                <a to="/" className="navigation__link" href="https://forms.gle/mp2vW7qYRGgH3ZXt7">
                  Забронировать
                </a>
              </li>

              {/* <li className="navigation__item">
                <div to="/" className="navigation__link">
                  Территория
                </div>
              </li> */}

              <li className="navigation__item">
                <div to="/" className="navigation__link">
                  Контакты
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
