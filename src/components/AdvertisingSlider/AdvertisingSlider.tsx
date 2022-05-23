import React from "react";
// import required modules
import {  Autoplay, Navigation, Scrollbar } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./AdvertisingSlider.css";

import { Wrap, SliderTitle, CollectionCard, SliderButton, SliderInner } from "./AdvertisingSlider.styles";

const AdvertisingSlider: React.FC = () => {
  return <Wrap>
    <SliderTitle>More from this collection</SliderTitle>
      <SliderInner>
        <Swiper
                scrollbar={{
                hide: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Scrollbar]}
                navigation
                slidesPerView={1}
                spaceBetween={20}
                grabCursor={true}
                className="advertising-slider"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
            >
                <SwiperSlide>
                  <CollectionCard>Slide 1</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                  <CollectionCard>Slide 2</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                  <CollectionCard>Slide 3</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                  <CollectionCard>Slide 4</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                <CollectionCard>Slide 5</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                <CollectionCard>Slide 6</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                <CollectionCard>Slide 7</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                  <CollectionCard>Slide 8</CollectionCard>
                </SwiperSlide>
                <SwiperSlide>
                  <CollectionCard>Slide 9</CollectionCard>
                </SwiperSlide>
            </Swiper>
            <SliderButton href="#">View Collection</SliderButton>
        </SliderInner>
  </Wrap>;
};

export default AdvertisingSlider;
