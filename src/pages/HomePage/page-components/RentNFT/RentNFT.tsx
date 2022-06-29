import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./NFTHeroSlider.css";
import Context from "../../../../utils/Context";
import NFTCard from "../../../../components/NFTCardOffers/NFTCard";
import { Title, TitleWrap, ViewAllBtn } from "../Recomended/Recommended.styles";
import { TitleInner, TitleLink } from "./RentNFT.styles";
import { createClient } from "urql";
import { ethers } from "ethers";

const RentNFTContainer = styled.div`
  margin: 120px 0;
  @media (max-width: 992px) {
    margin: 70px 0 40px;
  }
  @media (max-width: 768px) {
    margin: 40px 0;
  }
  @media (max-width: 576px) {
    position: relative;
    padding-bottom: 70px;
  }
`;

const RentNFT: React.FC = () => {
  const { connector } = useContext(Context);
  const items: { URI: string; name: string; id: number }[] = [];
  const [list, setList] =
    useState<{ URI: string; name: string; id: number }[]>();

  const getStakings = async () => {
    const tokens = await fetchStakingData();

    tokens.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        const price = nft.premiumWei;
        const id = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
        items.push({ URI, name, id });
      }
    });
    return items;
  };

  async function getItemsData() {
    const response = await getStakings();
    setList(response);
  }

  useEffect(() => {
    getItemsData();
  }, [connector]);

  return (
    <RentNFTContainer>
      <TitleWrap>
        <TitleInner>
          <Title>Rent NFT</Title>
          <TitleLink href="faq">Learn more...</TitleLink>
        </TitleInner>
        <ViewAllBtn to="/all">View all</ViewAllBtn>
      </TitleWrap>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
          1700: {
            slidesPerView: 4,
          },
        }}
        className="rent-slider"
        modules={[Mousewheel, Navigation]}
        loop={false}
        navigation={true}
        mousewheel={true}
      >
        {list?.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <NFTCard uri={item.URI} name={item.name} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </RentNFTContainer>
  );
};

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensStakingQuery = `
 query  {
  stakingListings{
    id
    seller
    token
    tokenId
    tokenURI
    stakingStatus
    tokenName
    tokenName
    tokenDescription
    colloteralWei
    premiumWei
    deadlineUTC
  }
}
 `;

const client = createClient({
  url: APIURL,
});

async function fetchStakingData() {
  const data = await client.query(tokensStakingQuery).toPromise();
  return data.data;
}

export default RentNFT;
