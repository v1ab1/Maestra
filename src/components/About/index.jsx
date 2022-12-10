import style from './About.module.sass';

export const About = () => {
    return (
    <div className={style.About}>
        <h2>О MAESTRA</h2>
        <p>
            MAESTRA INTERIORS - архитектурное бюро, посвященное проектированию и созданию уникальных объектов недвижимости от эксклюзивных пентхаусов и элитных квартир, до горных шале и средиземноморских вилл.
        </p>
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="314" height="2" fill="url(#paint0_linear_133_385)" fill-opacity="0.15"/>
                <defs>
                <linearGradient id="paint0_linear_133_385" x1="-1.24053e-06" y1="0.99048" x2="314" y2="0.990447" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0"/>
                <stop offset="0.276042"/>
                </linearGradient>
                </defs>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.41421" width="10.728" height="10.728" transform="matrix(0.707107 -0.707106 0.707107 0.707106 0.899443 10.0001)" stroke="#BFBFBF" stroke-width="2"/>
                <rect x="6.70894" y="9" width="3.94845" height="3.94845" transform="rotate(-45 6.70894 9)" stroke="#BFBFBF"/>
            </svg>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="314" y="2" width="314" height="2" transform="rotate(-180 314 2)" fill="url(#paint0_linear_133_386)" fill-opacity="0.15"/>
                <defs>
                <linearGradient id="paint0_linear_133_386" x1="314" y1="2.99048" x2="628" y2="2.99045" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0"/>
                <stop offset="0.276042"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <p>
            Мы создаем объекты с чистого листа. Наши клиенты доверяют нам самое главное - свой будущий дом. Мы единственное бюро, которое не только <span>проектирует и реализует</span> объекты, но и профессионально <span>выбирает лучшие участки земли или планировки квартир</span> для наилучшего результата.
        </p>
        <div>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="314" height="2" fill="url(#paint0_linear_133_385)" fill-opacity="0.15"/>
                <defs>
                <linearGradient id="paint0_linear_133_385" x1="-1.24053e-06" y1="0.99048" x2="314" y2="0.990447" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0"/>
                <stop offset="0.276042"/>
                </linearGradient>
                </defs>
            </svg>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.41421" width="10.728" height="10.728" transform="matrix(0.707107 -0.707106 0.707107 0.707106 0.899443 10.0001)" stroke="#BFBFBF" stroke-width="2"/>
                <rect x="6.70894" y="9" width="3.94845" height="3.94845" transform="rotate(-45 6.70894 9)" stroke="#BFBFBF"/>
            </svg>
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="314" y="2" width="314" height="2" transform="rotate(-180 314 2)" fill="url(#paint0_linear_133_386)" fill-opacity="0.15"/>
                <defs>
                <linearGradient id="paint0_linear_133_386" x1="314" y1="2.99048" x2="628" y2="2.99045" gradientUnits="userSpaceOnUse">
                <stop stop-opacity="0"/>
                <stop offset="0.276042"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <p>
            Maestra является партнером мировых брендов, таких как Brabbu, Fendi, Jacuzzi и пр, известными своими неповторимыми интерьерными решениями. Высокий уровень экспертного управления проектами - <br/><span>Мы снабжаем и строим объекты самостоятельно</span>.
        </p>
        <span className={style.query}>
            “Нас считает экспертами тот, кто сам считается экспертом.”
        </span>
    </div>
  );
}