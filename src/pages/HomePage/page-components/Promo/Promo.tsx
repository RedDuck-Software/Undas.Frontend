import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PromoSlide, SlideText } from "./Promo.styles";

import "./PromoSlider.css";

const Promo: React.FC = () => {
  return (
    <Swiper
      className="promo-slider"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation]}
      loop={true}
      navigation={true}
    >
      <SwiperSlide>
        <PromoSlide>
          <SlideText>
            Hot Offer! Add your NTF and save 50% on commission!
          </SlideText>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide>
          <SlideText>
            Hot Offer! Add your NTF and save 50% on commission!
          </SlideText>
        </PromoSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Promo;
