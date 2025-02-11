import React from "react";
import Slider from "react-slick";

function CoverflowSlider({ children }) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 3000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };
    return (
        <div className="slider-container" style={{ width: "100%" }}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default CoverflowSlider;