import React, { useState } from "react";
// Swiper
import SwiperClass, { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./AboutSlides.css";

import {
  SliderImg1,
  SliderImg2,
  SliderImg3,
  SliderImg4,
  SliderImg5,
} from "./imports";
import { SliderImage } from "./Slider.styles";

export default function AboutSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  {
    return (
      <>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="AboutSwiper2"
        >
          <SwiperSlide>
            <SliderImage src={SliderImg1} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg2} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg3} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg4} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg5} alt="slider-image" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={30}
          //необходимо добавить условие, если размер страницы меньше 576px, то картинки 2
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="AboutSwiper"
        >
          <SwiperSlide>
            <SliderImage src={SliderImg1} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg2} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg3} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg4} alt="slider-image" />
          </SwiperSlide>
          <SwiperSlide>
            <SliderImage src={SliderImg5} alt="slider-image" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
