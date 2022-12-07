import style from './About.module.sass';

export const About = () => {
    return (
    <div className={style.About}>
        <div>
            <h2 className={style.header}>О Maestra</h2>
        </div>
        <div className={style.content}>
            <div>
                <div className={style.text}>
                    MAESTRA INTERIORS - архитектурное бюро, посвященное проектированию и созданию уникальных объектов недвижимости от эксклюзивных пентхаусов и элитных квартир, до горных шале и средиземноморских вилл.
                </div>
                <div className={style.art}>
                    <div className={style.left}>
                    </div>
                    <div className={style.center}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.41421" width="9.31371" height="9.31371" transform="matrix(0.707107 -0.707106 0.707107 0.707106 0.414213 9)" stroke="#BFBFBF" stroke-width="2"/>
                            <rect x="5.73481" y="7.99994" width="3.2231" height="3.22309" transform="rotate(-45 5.73481 7.99994)" stroke="#BFBFBF"/>
                        </svg>                                    
                    </div>
                    <div className={style.right}>
                    </div>
                </div>
                <div className={style.text}>
                    Мы создаем объекты с чистого листа. Наши клиенты доверяют нам самое главное - свой будущий дом. Мы единственное бюро, которое не только <span>проектирует и реализует</span> объекты, но и профессионально <span>выбирает лучшие участки земли или планировки квартир</span> для наилучшего результата.                        
                </div>
                <div className={style.art}>
                    <div className={style.left}>
                    </div>
                    <div className={style.center}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.41421" width="9.31371" height="9.31371" transform="matrix(0.707107 -0.707106 0.707107 0.707106 0.414213 9)" stroke="#BFBFBF" stroke-width="2"/>
                            <rect x="5.73481" y="7.99994" width="3.2231" height="3.22309" transform="rotate(-45 5.73481 7.99994)" stroke="#BFBFBF"/>
                        </svg>                                    
                    </div>
                    <div className={style.right}>
                    </div>
                </div>
                <div className={style.text}>
                    Maestra является партнером мировых брендов, таких как Brabbu, Fendi, Jacuzzi и пр, известными своими неповторимыми интерьерными решениями. Высокий уровень экспертного управления проектами - <span>Мы снабжаем и строим объекты самостоятельно</span>.
                </div>
            </div>
            <div className={style.query}>
                “Нас считает экспертами тот, кто сам считается экспертом.”
            </div>
        </div>
    </div>
  );
}