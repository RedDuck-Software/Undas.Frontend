import React, {FC} from 'react'
/*import {
  PromoSlide,
  SlideText
} from './Promo.styles'*/

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import './NFTHeroSlider.css'
import {Title, TitleWrap, ViewAllBtn} from "../Recomended/Recommended.styles";
import NFTCard from "../NFTCard/NFTCard";
import styled from "styled-components";

const RentNFTContainer = styled.div `
  margin: 120px 0;
`

const RentNFT:FC = () => {
  return (
      <RentNFTContainer>
        <TitleWrap>
          <Title>
            Rent NFT
          </Title>
            <ViewAllBtn>View all</ViewAllBtn>
        </TitleWrap>
        <Swiper
            className="rent-slider"
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            loop={true}
            navigation={true}
            spaceBetween={66}
        >
          <SwiperSlide>
              <NFTCard/>
          </SwiperSlide>
            <SwiperSlide>
                <NFTCard/>
            </SwiperSlide>
            <SwiperSlide>
                <NFTCard/>
            </SwiperSlide>
        </Swiper>
      </RentNFTContainer>
  )
}

export default RentNFT