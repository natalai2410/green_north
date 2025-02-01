import React from "react";

import "../Posts/Posts.css";

function Posts() {
  return (
    <section className="posts">
      <div className="page__container">
        <div className="posts__content">
          <p className="posts__title">Последнии публикации</p>
          <ul className="posts__list">
            <il className="posts__list-item">
              <div className="posts__list-item1 posts__list-item1-img1"></div>
              <div className="posts__list-item2">
                <div className="posts__list-item2-tiile">Посев петунии</div>
                <div className="posts__list-item2-despription">
                  Посев петунии крайне прост и не важно, сеете Вы ее на торфяные
                  таблетки или на грунт. Не принципиально какие сорта...
                </div>
                <div className="posts__button_green">
                  <div className="posts__button_text">К посту</div>
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
            <il className="posts__list-item">
              <div className="posts__list-item1 posts__list-item1-img2"></div>

              <div className="posts__list-item2">
                <div className="posts__list-item2-tiile">
                  Вася, полей цветы!
                </div>
                <div className="posts__list-item2-despription">
                  Мы предлагаем профессиональную передержку растений. Ваши
                  комнатные цветы будут окружены вниманием и заботой.
                </div>
                <div className="posts__button_green">
                  <div className="posts__button_text">К посту</div>
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
            <il className="posts__list-item">
              <div className="posts__list-item1 posts__list-item1-img3"></div>

              <div className="posts__list-item2">
                <div className="posts__list-item2-tiile">
                  Кабочок  надо?
                </div>
                <div className="posts__list-item2-despription">
                Есть какая-то загадка в этом овоще – сколько его ни посади, его всегда много, и садоводы-дачники пытаются «пристраивать» кабачки по родне...
                </div>
                <div className="posts__button_green">
                  <div className="posts__button_text">К посту</div>
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
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Posts;
