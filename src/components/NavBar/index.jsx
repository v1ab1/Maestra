import style from './NavBar.module.sass';

function NavBar() {
    return (
      <div className={style.NavBar}>
        <div className={style.navbarContent}>
          <div>
              <a href="">
                О студии
              </a>
              <a href="">
                Команда
              </a>
              <a href="">
                Продукты
              </a>
              <a href="">
                Условия
              </a>
              <a href="">
                Контакты и локации
              </a>
          </div>
          <div>
              <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <g fill="#fff" clipPath="url(#clip0_133_182)">
                  <path d="M15.588 11.806l-1.989-1.99c-.53-.53-1.457-.53-1.989 0l-.331.332 3.977 3.978.332-.332c.55-.55.548-1.44 0-1.988zM10.597 10.793A1.055 1.055 0 019.2 10.72L5.268 6.786a1.055 1.055 0 01-.072-1.398L1.227 1.42C-.48 3.41-.413 6.41 1.471 8.293l6.222 6.225a5.032 5.032 0 006.873.243l-3.969-3.968zM6.172 2.387L4.183.398c-.53-.53-1.457-.531-1.989 0L1.863.73 5.84 4.707l.332-.331c.55-.55.549-1.441 0-1.989z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_133_182">
                    <path fill="#fff" d="M0 0H16V16H0z"></path>
                  </clipPath>
                </defs>
              </svg>
                <span>
                  Обратный звонок
                </span>
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="28"
                fill="none"
                className="country-flag"
                opacity="100%"
                viewBox="0 0 42 28"
              >
                <g clipPath="url(#clip0_162_230)">
                  <path fill="#F0F0F0" d="M0 .027v27.945h42V.027H0z"></path>
                  <path fill="#0052B4" d="M42 .027H0v27.946h42V.027z"></path>
                  <path fill="#F0F0F0" d="M42 .027H0v9.315h42V.027z"></path>
                  <path fill="#FF3F61" d="M42 18.657H0v9.315h42v-9.315z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_162_230">
                    <rect width="42" height="28" fill="#fff" rx="4"></rect>
                  </clipPath>
                </defs>
              </svg>
          </div>
        </div>
      </div>
    );
  }
  
export default NavBar;