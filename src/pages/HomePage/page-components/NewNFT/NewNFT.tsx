import React, { useContext, useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Context from "../../../../utils/Context";
import { getListing } from "../../../../utils/getListing";
import { getListingsLastIndex } from "../../../../utils/getListingsLastIndex";
import { isBuyableFunction } from "../../../../utils/isBuyable";
import NFTCard from "../NFTCard/NFTCard";
import { Title, TitleWrap, ViewAllBtn } from "../Recomended/Recommended.styles";

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
    <>
      <TitleWrap>
        <Title>New NFTs</Title>
        <ViewAllBtn>View all</ViewAllBtn>
      </TitleWrap>
      <Swiper
        className="rent-slider"
        slidesPerView={3}
        modules={[Navigation]}
        loop={false}
        navigation={true}
        spaceBetween={66}
      >
        {list?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <NFTCard uri={item.URI} name={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default NewNFT;
