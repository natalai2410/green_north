import React from "react";

import "../Book/Book.css";

function Book() {
  return (
<section className="contacts">
    <div className="page__container ">
        <div className="contacts__content">
          <div className="contacts__desctiprion">
          <div className="book__image"></div>
            <div className="contacts__text">
                <div className="contacts__text1">Забронировать</div>
                <div className="contacts__phone">
                <div className="contacts__phone-icons"></div>
                <div className="contacts__phone-nunber"></div>
                </div>

                <div className="contacts__phone">
                <div className="contacts__phone-icons"></div>
                <div className="contacts__phone-nunber"></div>
                </div>

            <div className="contacts__social">
            <div className="contacts__phone-icons"></div>
            <div className="contacts__phone-icons"></div>
            <div className="contacts__phone-icons"></div>

            </div>


                {/* <div className="contacts__email"></div>
                <div className="contacts__social"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
