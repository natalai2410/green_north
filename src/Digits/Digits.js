import React from "react";

import "../Digits/Digits.css";

function Digits() {
  return (
    <section className="digits">
      <div className="page__container">
        <div className="digits__content">
          <ul className="digits__list">
            <il className="digits__list-item">
              <div className="digits__list-item_text1">1</div>
              <div className="digits__list-item_text2">ГА земли</div>
            </il>

            <il className="digits__list-item">
              <div className="digits__list-item_text1">5</div>
              <div className="digits__list-item_text2">теплиц</div>
            </il>

            <il className="digits__list-item">
              <div className="digits__list-item_text1">20</div>
              <div className="digits__list-item_text2">грядок</div>
            </il>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Digits;
