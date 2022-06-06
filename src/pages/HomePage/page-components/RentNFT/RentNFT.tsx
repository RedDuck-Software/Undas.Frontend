import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./NFTHeroSlider.css";
import { canRentNFTFunction } from "../../../../utils/canRentNFT";
import Context from "../../../../utils/Context";
import { getStaking } from "../../../../utils/getStaking";
import { getStakingsLastIndex } from "../../../../utils/getStakingsLastIndex";
import getTokenURI from "../../../../utils/getTokenURI";
import NFTCard from "../NFTCard/NFTCard";
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
    if (!connector) {
      return;
    }

    const tokens = await fetchStakingData();
    console.log("tokensStaking", tokens.stakingListings);
    tokens.stakingListings.map((nft: any) => {
      if (nft.stakingStatus == "ACTIVE") {
        console.log("DASDSAD");
        const price = nft.premiumWei;
        const id = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
        console.log("111111");

        items.push({ URI, name, id });
      }
    });
    return items;
  };

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
      if (stakingdata.tx.tokenId._hex !== "0x00") {
        canRentNFT = await canRentNFTFunction(i, connector);
      }
      if (canRentNFT) {
        items.push({ URI, name, id: +tokenId });
      }
    }
    return items;
  };
  async function getItemsData() {
    const response = await getStakings();
    console.log("list", list);
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
        <TitleInner>
          <Title>Rent NFT</Title>
          <TitleLink href="faq">Learn more...</TitleLink>
        </TitleInner>
        <ViewAllBtn>View all</ViewAllBtn>
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
        }}
        className="rent-slider"
        modules={[Navigation]}
        loop={false}
        navigation={true}
      >
        {list?.map((item) => {
          console.log("LIST", list);
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
  console.log("staking1", data.data.stakingListings);
  return data.data;
}

export default RentNFT;
