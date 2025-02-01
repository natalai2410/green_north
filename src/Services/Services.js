import React from "react";

import "../Services/Services.css";

function Services() {
  return (
    <section className="services">
      <div className="page__container">
        <div className="services__content">
          <p className="services__title">Услуги</p>
          <ul className="services__list">
            <il className="services__list-item">
              <div className="services__list-item1 services__list-item1-img1"></div>
              <div className="services__list-item2">
                <div className="services__list-item2-tiile">Аренда грядки</div>
                <div className="services__list-item2-despription">
                  Простой и удобный способ приобщиться к садоводству, получить
                  опыт и удовольствие от работы на земле, не обременяя себя
                  крупными расходами и обязательствами
                </div>
                <div className="services__button_green">
                  <a className="services__button_text" href="https://vk.com/market/product/arenda-gryadki-229163509-10867270">Подробнее</a>
                  <svg
                    class="arrow-3-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#FFFF"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    >
                      <path
                        class="arrow-3-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </il>
            <il className="services__list-item">
              <div className="services__list-item1 services__list-item1-img2"></div>

              <div className="services__list-item2">
                <div className="services__list-item2-tiile">Аренда теплицы</div>
                <div className="services__list-item2-despription">
                  Идеально для тех, кто хочет заняться выращиванием растений, но
                  не имеет возможности построить собственную теплицу или не
                  готов к крупным вложениям.
                </div>
                <div className="services__button_green">
                  <a className="services__button_text" href="https://vk.com/market/product/arenda-teplitsy-229163509-10867378">Подробнее</a>
                  <svg
                    class="arrow-3-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#FFFF"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    >
                      <path
                        class="arrow-3-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </il>
            <il className="services__list-item">
              <div className="services__list-item1 services__list-item1-img3"></div>

              <div className="services__list-item2">
                <div className="services__list-item2-tiile">
                  Продажа рассады и саженцев
                </div>
                <div className="services__list-item2-despription">
                  Актуально для тех, кто не желает уделять много времени
                  выращиванию растений с самого начала, а также тем, у кого
                  недостаточно места для размещения сеянцев.
                </div>
                <div className="services__button_green">
                  <div className="services__button_text">Подробнее</div>
                  <svg
                    class="arrow-3-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#FFFF"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    >
                      <path
                        class="arrow-3-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </il>
            <il className="services__list-item">
              <div className="services__list-item1 services__list-item1-img4"></div>

              <div className="services__list-item2">
                <div className="services__list-item2-tiile">
                  Аренда мебели и инвентаря
                </div>
                <div className="services__list-item2-despription">
                  Является удобным и выгодным решением для многих ситуаций,
                  позволяя наслаждаться комфортом и ухоженностью участка без
                  лишних затрат и хлопот.
                </div>
                <div className="services__button_green">
                  <a className="services__button_text" href="https://vk.com/market/product/arenda-sadovogo-inventarya-229163509-10867848">Подробнее</a>
                  <svg
                    class="arrow-3-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#FFFF"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    >
                      <path
                        class="arrow-3-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </il>
            {/* <il className="services__list-item">
              <div className="services__item-txt">Передежка комнатных растений</div>
            </il>
            <il className="services__list-item">
              <div className="services__item-txt">Аренда учатска сотками</div>
            </il> * */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
