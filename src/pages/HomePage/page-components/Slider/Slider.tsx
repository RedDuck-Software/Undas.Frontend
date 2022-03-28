import React, {FC} from 'react'
//Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSlides.css'
import {SliderBG} from "./imports";
import {
    SliderImage
} from "./Slider.styles";

const Slider = () => {
    return (
        <Swiper
            className = "home-slider"
            //spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={true}
            pagination={true}
        >
            <SwiperSlide>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider