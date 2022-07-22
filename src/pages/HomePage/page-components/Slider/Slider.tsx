import React from "react";
import { Autoplay,Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlides.css";

import {
  SliderBG,
  CollectionPrev,
  CollectionPrev2,
  CollectionPrev3,
  CollectionPrev4,
  SliderBG2,
  SliderBG3,
  SliderBG4,
} from "./imports";
import {
  SliderImage,
  UndasDiv,
  TextGet,
  TextUndas,
  TextStacking,
  SliderButtonsBlock,
  ExploreButton,
  CreateButton,
  CollectionDiv,
  IMGdiv,
  CollectionTitle,
  SeeCollection,
} from "./Slider.styles";

const Slider: React.FC = () => {
  return (
    <Swiper
      className="home-slider"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay,Navigation, Pagination]}
      loop={true}
      navigation={true}
      pagination={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      
    >
      <UndasDiv>
        <TextGet>
          Get passive income from your NFT with <TextUndas>UNDAS</TextUndas>
        </TextGet>{" "}
        <TextStacking>
          Staking, Renting, Creating, Trading and Exchanging NFT
        </TextStacking>
      </UndasDiv>
      <SliderButtonsBlock>
        <ExploreButton to="/all">Explore</ExploreButton>
        <CreateButton to="/create-nft">Create</CreateButton>
      </SliderButtonsBlock>
      <SwiperSlide>
        <CollectionDiv to="/collection/10">
          <IMGdiv>
            <img src={CollectionPrev} />
          </IMGdiv>
          <CollectionTitle>Cosplay</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG} alt="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <CollectionDiv to="/collection/11">
          <IMGdiv>
            <img src={CollectionPrev2} />
          </IMGdiv>
          <CollectionTitle>Street Arts</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG2} alt="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <CollectionDiv to="/collection/12">
          <IMGdiv>
            <img src={CollectionPrev3} />
          </IMGdiv>
          <CollectionTitle>Aqaurel arts</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG3} alt="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <CollectionDiv to="/collection/13">
          <IMGdiv>
            <img src={CollectionPrev4} />
          </IMGdiv>
          <CollectionTitle>Photo gallery</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG4} alt="slider-image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
