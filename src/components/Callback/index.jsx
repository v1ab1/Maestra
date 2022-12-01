import style from './Callback.module.sass';

export const Callback = ({setShowCbk}) => {
    return (
    <div className={style.Callback}>
        <div onClick={() => setShowCbk(false)} className={style.empty}></div>
        <div className={style.callbackContent}>
            <div className={style.cross} onClick={() => setShowCbk(false)}>
                <svg className={style.cross} id="dropdown_icon2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L23 23M23 1L1 23" stroke="#DCAA72" stroke-width="2"/>
                </svg>  
            </div>
            <p className={style.description}>
                Пожалуйста оставьте свои контакты, чтобы наши специалисты связались с вами.
            </p>
            <div style={{padding: "0 15px"}}>
                <div className={style.formName}>
                    <label className={style.cbkLabel} id="nameLabel" htmlFor="name">Имя</label>
                    <input className={style.cbkName} id="name" htmlFor="nameLabel" type="text" value="" />
                </div>
                <div className={style.formName}>
                    <label className={style.cbkLabel} htmlFor="phone">Телефон</label>
                    <input className={style.cbkName} id="phone" type="number" value="" />
                </div>
            </div>
            <input className={style.cbkButton} type="submit" value="Отправить" />
        </div>
    </div>
  );
}