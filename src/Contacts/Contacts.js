import React from "react";

import "../Contacts/Contacts.css";

function Contacts() {
  return (
    <section className="contacts">
    <div className="page__container ">
        <div className="contacts__content">
          <div className="contacts__desctiprion">
          <div className="contacts__image"></div>
            <div className="contacts__text">
                <div className="contacts__text1">Готовы ответить на ваши вопросы.</div>
                <div className="contacts__phone">
                <div className="contacts__phone-icons"></div>
                <div className="contacts__phone-nunber">+7995-912-47-57</div>
                </div>

                <div className="contacts__phone">
                <div className="contacts__phone-icons"></div>
                <div className="contacts__phone-nunber">green_sever@mail.ru</div>
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

export default Contacts;
