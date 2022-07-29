import React from "react";
import { Autoplay, Navigation, Scrollbar } from "swiper";
// eslint-disable-next-line import/order
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./AdvertisingSlider.css";

import {
  Wrap,
  SliderTitle,
  SliderButton,
  SliderInner,
} from "./AdvertisingSlider.styles";

// import NFTCard from "../NFTCardOffers/NFTCard";
import NFTCardForCarousel from "../NFTCardForCarousel/NFTCardForCarousel";

interface CollectionGridWrapperProps {
  collectionItems: any;
  collectionId: number;
}

const AdvertisingSlider: React.FC<CollectionGridWrapperProps> = ({
  collectionItems,
  collectionId,
}) => {
  const href = `/collection/${collectionId}`;
  return (
    <Wrap>
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
            },
            1700: {
              slidesPerView: 4,
            },
          }}
        >
          {collectionItems.tokens.map((i: any) => {
            return (
              <SwiperSlide key={i.name}>
                <NFTCardForCarousel
                  uri={i.uri}
                  name={i.name}
                  tokenAddress={i.tokenAdress}
                  tokenId={i.id}
                  owner={i.creator}
                  collectionId={i.collectionId}
                  collectionName={i.collectionName}
                ></NFTCardForCarousel>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <SliderButton to={href}>View Collection</SliderButton>
      </SliderInner>
    </Wrap>
  );
};

export default AdvertisingSlider;
