import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

function SwiperSlider({ children }) {
    return (
        <div style={{ width: "100%" }}>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: -90,
                    modifier: 1,
                    slideShadows: false,
                }}
                centeredSlides={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        centeredSlides: false,
                        effect: "slide",
                    },
                    600: { slidesPerView: 3, },
                    1024: { slidesPerView: 5, },
                }}
                slidesPerView={5} // Show 3 slides at a time
                loop={true} // Infinite looping
                autoplay={{
                    delay: 3000, // 2 seconds per slide
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper"
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center", }}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;
