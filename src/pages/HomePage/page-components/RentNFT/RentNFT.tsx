import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Mousewheel, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "./NFTHeroSlider.css";
import { createClient } from "urql";

import { TitleInner, TitleLink } from "./RentNFT.styles";

import Context from "../../../../utils/Context";
import NFTCardHome from "../NFTCardHome/NFTCardHome";
import { Title, TitleWrap, ViewAllBtn } from "../Recomended/Recommended.styles";

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
        //const price = nft.premiumWei;
        const id = nft.id;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        //const premiumInNum = Number(ethers.utils.formatUnits(price, 18));
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
        <ViewAllBtn to={"/all"} state={{ buy: false, rent: true }}>
          View all
        </ViewAllBtn>
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="rent-slider"
        modules={[Mousewheel, Navigation, EffectCoverflow]}
        loop={false}
        navigation={true}
        mousewheel={true}
        effect={"coverflow"}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {list?.map((item) => {
          return (
            <>
              <SwiperSlide key={item.id}>
                <NFTCardHome uri={item.URI} name={item.name} />
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
