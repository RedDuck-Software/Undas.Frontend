import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlides.css";

import { SliderBG } from "./imports";
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
      modules={[Navigation, Pagination]}
      loop={true}
      navigation={true}
      pagination={true}
    >
      <SwiperSlide>
        <UndasDiv>
          <TextGet>
            Get passive income from your NFT with <TextUndas>UNDAS</TextUndas>
          </TextGet>{" "}
          <TextStacking>
            Stacking, Renting, Creating, Trading and Exchanging NFT
          </TextStacking>
        </UndasDiv>
        <SliderButtonsBlock>
          <ExploreButton to="/all">Explore</ExploreButton>
          <CreateButton to="/create-nft">Create</CreateButton>
        </SliderButtonsBlock>
        <CollectionDiv>
          <IMGdiv></IMGdiv>
          <CollectionTitle>Collection Title</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG} alt="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <UndasDiv>
          <TextGet>
            Get passive income from your NFT with <TextUndas>UNDAS</TextUndas>
          </TextGet>{" "}
          <TextStacking>
            Stacking, Renting, Creating, Trading and Exchanging NFT
          </TextStacking>
        </UndasDiv>
        <SliderButtonsBlock>
          <ExploreButton to="/all">Explore</ExploreButton>
          <CreateButton to="/create-nft">Create</CreateButton>
        </SliderButtonsBlock>
        <CollectionDiv>
          <IMGdiv></IMGdiv>
          <CollectionTitle>Collection Title</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG} alt="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <UndasDiv>
          <TextGet>
            Get passive income from your NFT with <TextUndas>UNDAS</TextUndas>
          </TextGet>{" "}
          <TextStacking>
            Stacking, Renting, Creating, Trading and Exchanging NFT
          </TextStacking>
        </UndasDiv>
        <SliderButtonsBlock>
          <ExploreButton to="/all">Explore</ExploreButton>
          <CreateButton to="/create-nft">Create</CreateButton>
        </SliderButtonsBlock>
        <CollectionDiv>
          <IMGdiv></IMGdiv>
          <CollectionTitle>Collection Title</CollectionTitle>
          <SeeCollection>See collection...</SeeCollection>
        </CollectionDiv>
        <SliderImage src={SliderBG} alt="slider-image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
