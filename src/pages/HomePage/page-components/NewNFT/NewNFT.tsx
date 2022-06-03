import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Context from "../../../../utils/Context";
import { getListing } from "../../../../utils/getListing";
import { getListingsLastIndex } from "../../../../utils/getListingsLastIndex";
import { isBuyableFunction } from "../../../../utils/isBuyable";
import NFTCard from "../NFTCard/NFTCard";
import { Title, TitleWrap, ViewAllBtn } from "../Recomended/Recommended.styles";

const NewNFTContainer = styled.div`
  margin-top: 120px;
  @media (max-width: 992px) {
    margin-top: 70px;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
  }
  @media (max-width: 576px) {
    position: relative;
    padding-bottom: 70px;
  }
`;

const NewNFT: React.FC = () => {
  const { connector } = useContext(Context);
  const items: { id: number; name: string; URI: string }[] = [];
  const [list, setList] =
    useState<{ id: number; name: string; URI: string }[]>();

  const getListings = async () => {
    if (!connector) {
      return;
    }

    const lastIndex = await getListingsLastIndex(connector);
    if (lastIndex || lastIndex === 0) {
      for (let i = 0; i < lastIndex?.toNumber(); i++) {
        const CardProps = await getListing(i, connector);
        const isBuyable = await isBuyableFunction(i, connector);

        if (!CardProps) {
          continue;
        }
        const { name, URI } = CardProps;
        const { tokenId } = CardProps.tx;
        if (isBuyable) {
          items.push({ name, URI, id: +tokenId });
        }
      }

      return items;
    } else return;
  };

  async function getItemsData() {
    const response = await getListings();
    console.log(response);
    setList(response);
  }

  useEffect(() => {
    if (!connector) {
      return;
    }
    getItemsData();
  }, [connector]);

  return (
    <NewNFTContainer>
      <TitleWrap>
        <Title>New NFTs</Title>
        <ViewAllBtn>View all</ViewAllBtn>
      </TitleWrap>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="rent-slider"
        modules={[Navigation]}
        loop={false}
        navigation={true}
      >
        {list?.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <NFTCard uri={item.URI} name={item.name} />
              </SwiperSlide>
              <SwiperSlide key={item.id}>
                <NFTCard uri={item.URI} name={item.name} />
              </SwiperSlide>
              <SwiperSlide key={item.id}>
                <NFTCard uri={item.URI} name={item.name} />
              </SwiperSlide>
              <SwiperSlide key={item.id}>
                <NFTCard uri={item.URI} name={item.name} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </NewNFTContainer>
  );
};

export default NewNFT;
