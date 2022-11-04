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
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_162_1211)">
                    <path d="M11.6908 8.85429L10.1994 7.36257C9.80148 6.96465 9.10626 6.96397 8.70768 7.36257L8.45898 7.61126L11.4422 10.5943L11.6908 10.3457C12.1037 9.93274 12.1024 9.26515 11.6908 8.85429Z" fill="#DCAA72"/>
                    <path d="M7.94801 8.09459C7.63418 8.33771 7.18648 8.328 6.89972 8.04061L3.95089 5.08974C3.66348 4.80233 3.6538 4.3543 3.89692 4.04125L0.920572 1.06506C-0.35984 2.55756 -0.309778 4.80646 1.10338 6.21962L5.76985 10.8881C7.12594 12.2442 9.34723 12.424 10.9245 11.0709L7.94801 8.09459Z" fill="#DCAA72"/>
                    <path d="M4.62896 1.7904L3.13757 0.29868C2.73965 -0.0992406 2.04442 -0.0999203 1.64584 0.29868L1.39715 0.547375L4.38036 3.53042L4.62896 3.2818C5.04188 2.86888 5.04052 2.20129 4.62896 1.7904Z" fill="#DCAA72"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_162_1211">
                    <rect width="12" height="12" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <span>
                  Callback
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