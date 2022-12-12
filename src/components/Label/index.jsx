import style from './Label.module.sass';

export const Label = ({setShowCbk}) => {
  return (
    <div className={style.Label}>
        <div className={style.content}>
            <p>
                Нас считает экспертами тот, кто сам считается экспертом.
            </p>
            <button onClick={() => setShowCbk(true)}>
                Действие
            </button>
        </div>
    </div>
  );
}