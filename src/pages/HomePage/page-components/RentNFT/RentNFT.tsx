import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './NFTHeroSlider.css';
import { canRentNFTFunction } from '../../../../utils/canRentNFT';
import Context from '../../../../utils/Context';
import { getStaking } from '../../../../utils/getStaking';
import { getStakingsLastIndex } from '../../../../utils/getStakingsLastIndex';
import getTokenURI from '../../../../utils/getTokenURI';
import NFTCard from '../NFTCard/NFTCard';
import { Title, TitleWrap, ViewAllBtn } from '../Recomended/Recommended.styles';

const RentNFTContainer = styled.div`
  margin: 120px 0;
`;

const RentNFT: React.FC = () => {
  const { connector } = useContext(Context);
  const items: { URI: string; name: string; id: number }[] = [];
  const [list, setList] =
    useState<{ URI: string; name: string; id: number }[]>();

  const getItems = async () => {
    if (!connector) {
      return;
    }

    const lastIndex = await getStakingsLastIndex(connector);
    if (!lastIndex) return;

    for (let i = 0; i < +lastIndex; i++) {
      const URI = await getTokenURI(i, connector);
      const stakingdata = await getStaking(i, connector);
      if (!stakingdata || !URI) {
        continue;
      }

      const { tokenId } = stakingdata.tx;
      const { name } = stakingdata;
      let canRentNFT;
      if (stakingdata.tx.tokenId._hex !== '0x00') {
        canRentNFT = await canRentNFTFunction(i, connector);
      }
      if (canRentNFT) {
        items.push({ URI, name, id: +tokenId });
      }
    }
    return items;
  };
  async function getItemsData() {
    const response = await getItems();
    setList(response);
  }

  useEffect(() => {
    if (!connector) {
      return;
    }
    getItemsData();
  }, [connector]);

  return (
    <RentNFTContainer>
      <TitleWrap>
        <Title>Rent NFT</Title>
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
          console.log(list);
          return (
            <SwiperSlide key={item.id}>
              <NFTCard uri={item.URI} name={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </RentNFTContainer>
  );
};

export default RentNFT;
