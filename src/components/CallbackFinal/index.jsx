import style from './CallbackFinal.module.sass';

export const CallbackFinal = ({setShowFinalCbk}) => {
    return (
    <div className={style.CallbackFinal}>
        <div onClick={() => setShowFinalCbk(false)} className={style.empty}></div>
        <div className={style.callbackContent}>
            <div className={style.cross} onClick={() => setShowFinalCbk(false)}>
                <svg className={style.cross} id="dropdown_icon2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L23 23M23 1L1 23" stroke="#DCAA72" stroke-width="2"/>
                </svg>  
            </div>
            <p className={style.description}>
                Ваша заявка принята. Наши специалисты свяжутся с вами в ближайшее время.
            </p>
        </div>
    </div>
  );
}