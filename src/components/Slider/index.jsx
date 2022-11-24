import { useState, useEffect } from "react";
import style from './Slider.module.sass';

const Button = ({ isActive, onClick, index, text}) => (
    <button className={isActive ? style.active : null } onClick={() => onClick(index)}>
        {text}
    </button>
);

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scale, setScale] = useState(style.scale);
    const data = [
        { text: "Главная" }, 
        { text: "Рестораны" }, 
        { text: "Горные шале" }, 
        { text: "Таунхаусы" }, 
        { text: "Средиземноморские виллы" }, 
        { text: "Загородные дома" }, 
        { text: "Отели" }, 
        { text: "Квартиры" }];
    const change = (a = 1) => {
        if (activeIndex === 7 && a === 1) {
            setActiveIndex(0)
            return
        }
        if (activeIndex === 0 && a === -1) {
            setActiveIndex(7)
            return
        }
        setActiveIndex( activeIndex + a );
    }
    return ( 
        <div className={style.Slider}>
            <div className={style.slide}>
                <img className={scale} src={`./slider/slider${activeIndex+1}.jpg`} alt="" />
            </div>
            <div className={style.bgBlack}></div>
            <div className={activeIndex === 0 ? style.textWrapperFirst + ' ' + style.textWrapper : style.textWrapper}>
                <span className={style.text}>{activeIndex === 0 ? "Интерьеры для жизни придуманные вручную" : data[activeIndex].text}</span>
            </div>
            <div className={style.callbackWrapper}>
                <button className={style.callback}>
                    Оставить заявку
                </button>
            </div>
            <div className={style.btns}>
                <svg
                    onClick={() => change(-1)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="32"
                    fill="none"
                    className="leftArrow"
                    viewBox="0 0 18 32"
                    >
                    <path
                        stroke="#fff"
                        strokeOpacity="1"
                        strokeWidth="2"
                        d="M17 31L2 16 17 1"
                    ></path>
                </svg>
                <svg
                    onClick={() => change()}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="32"
                    fill="none"
                    className="rightArrow"
                    viewBox="0 0 18 32"
                    >
                    <path
                        stroke="#fff"
                        strokeOpacity="1"
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
