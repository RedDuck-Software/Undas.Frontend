import React, {FC} from 'react'
/*import {
  PromoSlide,
  SlideText
} from './Promo.styles'*/

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {Title, TitleWrap, ViewAllBtn} from "../Recomended/Recommended.styles";
import NFTCard from "../NFTCard/NFTCard";


const RentNFT:FC = () => {
  return (
      <>
        <TitleWrap>
          <Title>
            Manage Your NFTs
          </Title>
            <ViewAllBtn>View all</ViewAllBtn>
        </TitleWrap>
        <Swiper
            className="promo-slider"
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            loop={true}
            navigation={true}
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
      </>
  )
}

export default RentNFT