import style from './Slider.module.sass';

function Slider() {
    const slider1 = './slider/slider1.png';
    const slider2 = './slider/slider2.jpg';
    const slider3 = './slider/slider3.jpg';
    const slider4 = './slider/slider4.jpg';
    const slider5 = './slider/slider5.jpg';
    const slider6 = './slider/slider6.jpeg';

    return (
      <div className={style.Slider}>
        <div>
            <img src={slider1} alt="" />
        </div>
        <div style={{display: "none"}}>
            <img src={slider2} alt="" />
        </div>
        <div style={{display: "none"}}>
            <img src={slider3} alt="" />
        </div>
        <div style={{display: "none"}}>
            <img src={slider4} alt="" />
        </div>
        <div style={{display: "none"}}>
            <img src={slider5} alt="" />
        </div>
        <div style={{display: "none"}}>
            <img src={slider6} alt="" />
        </div>
        <div className={style.btns}>
            <svg className='leftArrow' width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 31L2 16L17 1" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
            </svg>
            <svg className="rightArrow" width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L16 16L1 31" stroke="white" stroke-opacity="0.5" stroke-width="2"/>
            </svg> 
        </div>
      </div>
    );
  }
  
export default Slider;