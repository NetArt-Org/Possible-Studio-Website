import Marquee from "react-fast-marquee";

const ScrollerComp = ({children, speed,direction, style,className}) => (
    <Marquee speed={speed} direction={direction} style={style} className={className} autoFill>
       {children}
    </Marquee>
  );
  
  export default ScrollerComp;