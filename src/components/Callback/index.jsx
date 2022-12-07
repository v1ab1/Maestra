import { useState, useRef } from 'react';
import style from './Callback.module.sass';

export const Callback = ({setShowCbk, setShowFinalCbk}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const nameRef = useRef(null);
    const numberRef = useRef(null);
    const check = () => {
        name === '' ? 
        nameRef.current.style.borderBottom = '2px solid red' 
        : 
        nameRef.current.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5';

        number === '' ? 
        numberRef.current.style.borderBottom = '2px solid red' 
        : 
        numberRef.current.style.borderBottom = '2px solid rgba(255, 255, 255, 0.5';

        if (name !== '' && number !== '') {
            setShowCbk(false);
            setShowFinalCbk(true);
        }
    };
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
                    <label 
                        className={style.cbkLabel} 
                        id="nameLabel" 
                        htmlFor="name"
                    >
                        Имя
                    </label>
                    <input 
                        className={style.cbkName} 
                        id="name" 
                        htmlFor="nameLabel" 
                        type="text" 
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        ref={nameRef}
                    />
                </div>
                <div className={style.formName}>
                    <label 
                        className={style.cbkLabel} 
                        htmlFor="phone"
                    >
                        Телефон
                    </label>
                    <input 
                        className={style.cbkName} 
                        id="phone" 
                        type="number" 
                        value={number}
                        onChange={(event) => setNumber(event.target.value)} 
                        ref={numberRef}
                    />
                </div>
            </div>
            <input onClick={() => check()} className={style.cbkButton} type="submit" value="Отправить" />
        </div>
    </div>
  );
}