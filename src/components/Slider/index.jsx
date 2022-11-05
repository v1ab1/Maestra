import style from './Slider.module.sass';

function Slider() {
    const slider1 = './slider/slider1.png';

    return (
      <div className={style.Slider}>
        <div>
            <img src={slider1} alt="" />
        </div>
      </div>
    );
  }
  
export default Slider;