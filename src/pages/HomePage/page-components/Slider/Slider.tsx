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
import collectionImg from '../../images/image-home/collectionImg.svg'

import {SliderBG} from "./imports";
import {
    SliderImage,
    UndasDiv,
    TextGet,
    TextUndas,
    TextStacking,
    UndasDivForBotton,
    ExploreButton,
    CreateButton,
    CollectionDiv,
    ImgNFTSmall,
    IMGdiv,
    CollectionTitle,
    SeeCollection,
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
            <UndasDiv>
                <TextGet>Get passive income from your NFT with </TextGet> <TextUndas>UNDAS</TextUndas><br></br>
                <TextStacking>Stacking, Renting, Creating, Trading and Exchanging NFT</TextStacking>
            </UndasDiv>
            <UndasDivForBotton>
                <ExploreButton>Explore</ExploreButton> 
                <CreateButton>Create</CreateButton> 
            </UndasDivForBotton>
            <CollectionDiv>
            <IMGdiv></IMGdiv>
            <CollectionTitle>Collection Title</CollectionTitle>
            <SeeCollection>See collection...</SeeCollection>
            </CollectionDiv>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
            <SwiperSlide>
            <UndasDiv>
                <TextGet>Get passive income from your NFT with </TextGet> <TextUndas>UNDAS</TextUndas><br></br>
                <TextStacking>Stacking, Renting, Creating, Trading and Exchanging NFT</TextStacking>
            </UndasDiv>
            <UndasDivForBotton>
                <ExploreButton>Explore</ExploreButton> 
                <CreateButton>Create</CreateButton> 
            </UndasDivForBotton>
            <CollectionDiv>
            <IMGdiv></IMGdiv>
            <CollectionTitle>Collection Title</CollectionTitle>
            <SeeCollection>See collection...</SeeCollection>
            </CollectionDiv>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
            <SwiperSlide>
            <UndasDiv>
                <TextGet>Get passive income from your NFT with </TextGet> <TextUndas>UNDAS</TextUndas><br></br>
                <TextStacking>Stacking, Renting, Creating, Trading and Exchanging NFT</TextStacking>
            </UndasDiv>
            <UndasDivForBotton>
                <ExploreButton>Explore</ExploreButton> 
                <CreateButton>Create</CreateButton> 
            </UndasDivForBotton>
            <CollectionDiv>
            <IMGdiv></IMGdiv>
            <CollectionTitle>Collection Title</CollectionTitle>
            <SeeCollection>See collection...</SeeCollection>
            </CollectionDiv>
                <SliderImage src={SliderBG} alt="slider-image"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider