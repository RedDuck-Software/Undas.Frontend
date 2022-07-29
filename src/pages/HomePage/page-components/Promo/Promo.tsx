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
        <PromoSlide to="/blog-post">
          <Container>
            <SlideText>Welcome to UNDAS: Project History</SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog-post-2">
          <Container>
            <SlideText>UNDAS: new mechanics of NFT markets</SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog-post-3">
          <Container>
            <SlideText>
              BCG: By 2030, the number of cryptocurrency users will reach 1
              billion people
            </SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog-post-4">
          <Container>
            <SlideText>SGM and Undas Partnership</SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
      <SwiperSlide>
        <PromoSlide to="/blog-post-5">
          <Container>
            <SlideText>Undas.io launched on Goerli Testnet</SlideText>
          </Container>
        </PromoSlide>
      </SwiperSlide>
    </Swiper>
  );
};

export default Promo;
