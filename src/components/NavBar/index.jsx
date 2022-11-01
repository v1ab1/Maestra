import style from './NavBar.module.sass';

function NavBar() {
    return (
      <div className={style.NavBar}>
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
              <span>
                Callback
              </span>
            </button>
        </div>
      </div>
    );
  }
  
export default NavBar;