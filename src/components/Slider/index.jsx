import style from './Slider.module.sass';

function Slider() {
    const slider1 = './slider/slider1.png';
    const slider2 = './slider/slider2.jpg';
    const slider3 = './slider/slider3.jpg';
    const slider4 = './slider/slider4.jpg';
    const slider5 = './slider/slider5.jpg';
    const slider6 = './slider/slider6.jpeg';

    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    showSlider();

    function nextSlide(A) {
        slideIndex += A;
        showSlider();
        console.log(slideIndex);
    }
    
    function CurrentSlide(A) {
        slideIndex = A;
        showSlider();
    }
    
    function showSlider() {
        (slideIndex >= 5) && (slideIndex = 0);
        (slideIndex < 0) && (slideIndex = 4);
        for (let i = 0; i < slides.length; i++) {
            i == slideIndex ? slides[i].style.display = "block" : slides[i].style.display = "none";
        }
    }

    return (
      <div className={style.Slider}>
        <div className="slide">
            <img src={slider1} alt="" />
        </div>
        <div className="slide" style={{display: "none"}}>
            <img src={slider2} alt="" />
        </div>
        <div className="slide" style={{display: "none"}}>
            <img src={slider3} alt="" />
        </div>
        <div className="slide" style={{display: "none"}}>
            <img src={slider4} alt="" />
        </div>
        <div className="slide" style={{display: "none"}}>
            <img src={slider5} alt="" />
        </div>
        <div className="slide" style={{display: "none"}}>
            <img src={slider6} alt="" />
        </div>
        <div className={style.bgBlack}></div>
        <div className={style.btns}>
        <svg
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
      </div>
    );
  }
  
export default Slider;