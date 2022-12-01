import { useState, useEffect } from "react";
import style from './Slider.module.sass';

const Button = ({ isActive, onClick, index, text}) => (
    <button className={isActive ? style.active : null } onClick={() => onClick(index)}>
        {text}
    </button>
);

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scale, setScale] = useState(null);
    const [showBack, setShowBack] = useState(true);
    const [opacity, setOpacity] = useState(style.opacityUp);
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
        // if (a === 1 ) {
        //     setShowBack(true)
        // } else {
        //     setShowBack(false)
        // }
        setScale(null)
        setOpacity(style.opacityDown);
        setTimeout(() => setOpacity(style.opacityUp), 500)
        // clearInterval(timer)
        setTimeout(() => setScale(style.scale), 500)
        setTimeout(() => {if (activeIndex === 7 && a === 1) {
            setActiveIndex(0)
            return
        }
        if (activeIndex === 0 && a === -1) {
            setActiveIndex(7)
            return
        }
        setActiveIndex( activeIndex + a );}, 500)
    }
    useEffect(() => {
      setScale(style.scale)
    }, [])
    // let timer = setInterval(() => {activeIndex === 7 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1)}, 6500);
    return ( 
        <div className={style.Slider}>
            <div className={style.slide}>
                <img className={[scale].join(' ')} src={`./slider/slider${activeIndex+1}.jpg`} alt="" />
                {/* {showBack ? <img className={style.slideBG} style={showBack ? {opacity: 1} : {opacity: 0}} src={`./slider/slider${activeIndex+2}.jpg`} alt="" />
                : <img className={style.slideBG} style={showBack ? {opacity: 0} : {opacity: 1}} src={`./slider/slider${activeIndex}.jpg`} alt="" />} */}
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