import { useState } from "react";
import style from './Slider.module.sass';

const Button = ({ isActive, onClick, index, text}) => (
    <button className={isActive ? style.active : null } onClick={() => onClick(index)}>
        {text}
    </button>
);

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        { text: "Главная" }, 
        { text: "Рестораны" }, 
        { text: "Горные шале" }, 
        { text: "Таунхаусы" }, 
        { text: "Средиземноморские виллы" }, 
        { text: "Загородные дома" }, 
        { text: "Отели" }, 
        { text: "Квартиры" }];

    if (activeIndex < 0) {
        setActiveIndex(7)
    };
    if (activeIndex > 7) {
        setActiveIndex(0)
    };
    
    return (
        <div className={style.Slider}>
            <div className="slide">
                <img src={`./slider/slider${activeIndex+1}.jpg`} alt="" />
            </div>
            <div className={style.bgBlack}></div>
            <span className={style.text}>{activeIndex === 0 ? "Интерьеры для жизни придуманные вручную" : data[activeIndex].text}</span>
            <div className={style.callbackWrapper}>
                <button className={style.callback}>
                    Оставить заявку
                </button>
            </div>
            <div className={style.btns}>
                <svg
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="32"
                    fill="none"
                    className="leftArrow"
                    viewBox="0 0 18 32"
                    >
                    <path
                        stroke="#fff"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                        d="M17 31L2 16 17 1"
                    ></path>
                </svg>
                <svg
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="32"
                    fill="none"
                    className="rightArrow"
                    viewBox="0 0 18 32"
                    >
                    <path
                        stroke="#fff"
                        strokeOpacity="0.5"
                        strokeWidth="2"
                        d="M1 1l15 15L1 31"
                    ></path>
                </svg>
            </div>
            <div className={style.navBar}>
                {data.map((slide, index) => (
                <Button
                    key={index}
                    index={index}
                    text={slide.text}
                    isActive={index === activeIndex}
                    onClick={setActiveIndex}
                />
                ))}
            </div>
        </div>
    );
}

export default Slider;
