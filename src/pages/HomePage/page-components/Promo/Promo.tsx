import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { PromoSlide, SlideText } from "./Promo.styles";

import { Container } from "../../../../globalStyles";

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
          <Container>
            <SlideText>
              Hot Offer! Add your NTF and save 50% on commission!
            </SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog/website-tips">
          <Container>
            <SlideText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              quisquam.
            </SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/article">
          <Container>
            <SlideText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
              voluptatibus rem saepe incidunt sunt?
            </SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog">
          <Container>
            <SlideText>Lorem ipsum dolor sit amet.</SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Promo;
