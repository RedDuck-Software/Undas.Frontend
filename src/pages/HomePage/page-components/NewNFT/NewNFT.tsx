import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Context from "../../../../utils/Context";
// import { getListing } from "../../../../utils/getListing";
// import { getListingsLastIndex } from "../../../../utils/getListingsLastIndex";
// import { isBuyableFunction } from "../../../../utils/isBuyable";
import NFTCard from "../../../../components/NFTCardOffers/NFTCard";
import { Title, TitleWrap, ViewAllBtn } from "../Recomended/Recommended.styles";
import { createClient } from "urql";
import { ethers } from "ethers";

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
  const items: { priceInNum: number; id: number; name: string; URI: string }[] =
    [];
  const [list, setList] =
    useState<{ id: number; name: string; URI: string }[]>();

  const getListings = async () => {
    const tokens = await fetchData();

    tokens.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.tokenId;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const priceInNum = Number(ethers.utils.formatUnits(price, 18));

        items.push({ priceInNum, id, name, URI });
      }
    });
    return items;
  };

  async function getItemsData() {
    const response = await getListings();
    console.log("response", response);
    setList(response);
  }

  useEffect(() => {
    // if (!connector) {
    //   return;
    // }
    console.log("dsads");
    getItemsData();
  }, [connector]);

  return (
    <NewNFTContainer>
      <TitleWrap>
        <Title>New NFTs</Title>
        <ViewAllBtn to="/categories">View all</ViewAllBtn>
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
    </NewNFTContainer>
  );
};

const APIURL =
  "https://api.thegraph.com/subgraphs/name/qweblessed/only-one-nft-marketplace";

const tokensQuery = `
    query   {
      listings{
        id
        token
        seller
        tokenId
        tokenURI
        listingStatus
        price
        tokenDescription
        tokenName    
      }
    }  
`;
const client = createClient({
  url: APIURL,
});

async function fetchData() {
  const data = await client.query(tokensQuery).toPromise();

  return data.data.listings;
}

export default NewNFT;
