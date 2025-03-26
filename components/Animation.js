import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Animation({children,animation,easing,delay,duration}) {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div
      data-aos={animation} data-aos-easing={easing} data-aos-delay={delay} data-aos-duration={duration} //Here you can use any of the AOS animations
    >
      {children}
    </div>
  );
}