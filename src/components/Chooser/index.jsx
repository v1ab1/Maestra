import style from './Chooser.module.sass';

export const Chooser = () => {
  return (
    <div className={style.Chooser} style={{width: "unset", gap: "unset", display: "block", height: "unset"}}>
      <div className={style.chooserContent} style={{width: "unset", gap: "unset", display: "block"}}>
        <a href="#">
          <div className={style.flag}>
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_30_87)">
                  <path d="M42 0H0V28.0003H42V0Z" fill="#F0F0F0"/>
                  <path d="M23.625 -0.000610352H18.375V11.3743H0V16.6243H18.375V27.9993H23.625V16.6243H42V11.3743H23.625V-0.000610352Z" fill="#FF3F61"/>
                  <path d="M32.3026 18.8693L41.9999 24.2568V18.8693H32.3026Z" fill="#0052B4"/>
                  <path d="M25.5652 18.8693L42 27.9997V25.4178L30.2127 18.8693H25.5652Z" fill="#0052B4"/>
                  <path d="M37.6223 27.9997L25.5652 21.3007V27.9997H37.6223Z" fill="#0052B4"/>
                  <path d="M25.5652 18.8693L42 27.9997V25.4178L30.2127 18.8693H25.5652Z" fill="#F0F0F0"/>
                  <path d="M25.5652 18.8693L42 27.9997V25.4178L30.2127 18.8693H25.5652Z" fill="#FF3F61"/>
                  <path d="M7.41079 18.869L0 22.9862V18.869H7.41079Z" fill="#0052B4"/>
                  <path d="M16.4348 20.0302V27.9996H2.09106L16.4348 20.0302Z" fill="#0052B4"/>
                  <path d="M11.7873 18.8693L0 25.4178V27.9997L16.4348 18.8693H11.7873Z" fill="#FF3F61"/>
                  <path d="M9.69732 9.13016L0 3.74268V9.13016H9.69732Z" fill="#0052B4"/>
                  <path d="M16.4348 9.1298L0 -0.000610352V2.58124L11.7873 9.1298H16.4348Z" fill="#0052B4"/>
                  <path d="M4.37769 -0.000244141L16.4348 6.69876V-0.000244141H4.37769Z" fill="#0052B4"/>
                  <path d="M16.4348 9.1298L0 -0.000610352V2.58124L11.7873 9.1298H16.4348Z" fill="#F0F0F0"/>
                  <path d="M16.4348 9.1298L0 -0.000610352V2.58124L11.7873 9.1298H16.4348Z" fill="#FF3F61"/>
                  <path d="M34.5892 9.13033L42 5.01318V9.13033H34.5892Z" fill="#0052B4"/>
                  <path d="M25.5652 7.9693V-0.00012207H39.9089L25.5652 7.9693Z" fill="#0052B4"/>
                  <path d="M30.2127 9.13016L42 2.58161V-0.000244141L25.5652 9.13016H30.2127Z" fill="#FF3F61"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_30_87">
                  <rect width="42" height="28" rx="4" fill="white"/>
                  </clipPath>
                  </defs>
              </svg>
          </div>
          <div>
              ENG
          </div>
        </a>
        <a href="#">
          <div className={style.flag}>
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_30_111)">
                  <path d="M42 27.9719H0V0.0261993H42V27.9719Z" fill="#F0F0F0"/>
                  <path d="M13.9997 27.9719H0V0.0261993H13.9997V27.9719Z" fill="#0052B4"/>
                  <path d="M42.0001 27.9719H28.0004V0.0261993H42.0001V27.9719Z" fill="#FF3F61"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_30_111">
                  <rect width="42" height="28" rx="4" transform="matrix(1 0 0 -1 0 28)" fill="white"/>
                  </clipPath>
                  </defs>
              </svg>                                
          </div>
          <div>
              FR
          </div>
        </a>
        <a href="#">
          <div className={style.flag}>
              <svg width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_30_115)">
                  <path d="M42 0.0280762H0V27.9738H42V0.0280762Z" fill="#F0F0F0"/>
                  <path d="M42 0.0280762H0V9.34299H42V0.0280762Z" fill="#6DA544"/>
                  <path d="M42 18.657H0V27.9719H42V18.657Z" fill="black"/>
                  <path d="M13.9997 0.0280762H0V27.9738H13.9997V0.0280762Z" fill="#A2001D"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_30_115">
                  <rect width="42" height="28" rx="4" fill="white"/>
                  </clipPath>
                  </defs>
              </svg>                                
          </div>
          <div>
              UAE
          </div>
        </a>
      </div>
    </div>
  );
  }