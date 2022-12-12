import style from './Label.module.sass';

export const Label = () => {
  return (
    <div className={style.Label}>
        <div className={style.content}>
            <p>
                Нас считает экспертами тот, кто сам считается экспертом.
            </p>
            <button>
                Действие
            </button>
        </div>
    </div>
  );
}