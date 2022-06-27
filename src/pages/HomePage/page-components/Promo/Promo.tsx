import React from "react";
import { Autoplay, Navigation } from "swiper";
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
      modules={[Autoplay, Navigation]}
      loop={true}
      navigation={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <PromoSlide to="/blog">
          <SlideText>
            Hot Offer! Add your NTF and save 50% on commission!
          </SlideText>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog/website-tips">
          <SlideText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            quisquam.
          </SlideText>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/article">
          <SlideText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            voluptatibus rem saepe incidunt sunt?
          </SlideText>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog">
          <SlideText>Lorem ipsum dolor sit amet.</SlideText>
        </PromoSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Promo;
