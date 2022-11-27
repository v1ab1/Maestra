import style from './Callback.module.sass';

export const Callback = () => {
  return (
    <div className={style.Callback}>
        <div className={style.callbackContent}>
            <div className={style.cross}>
                <svg className={style.cross} id="dropdown_icon2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L23 23M23 1L1 23" stroke="#DCAA72" stroke-width="2"/>
                </svg>  
            </div>
            <p className={style.description}>
                Пожалуйста оставьте свои контакты, чтобы наши специалисты связались с вами.
            </p>
            <div style={{padding: "0 15px"}}>
                <div className={style.formName}>
                    <label className={style.cbkLabel} for="cbk-name">Имя</label>
                    <input class="cbkName" type="text" value="" />
                </div>
            </div>
        </div>
    </div>
  );
}