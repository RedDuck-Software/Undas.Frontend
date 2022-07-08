import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Mousewheel, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { createClient } from "urql";

import Context from "../../../../utils/Context";
import NFTCardHome from "../NFTCardHome/NFTCardHome";
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
  const navigate = useNavigate();

  const items: {
    priceInNum: number;
    id: number;
    name: string;
    URI: string;
    tokenAddress: string;
  }[] = [];
  const [list, setList] =
    useState<
      { id: number; name: string; URI: string; tokenAddress: string }[]
    >();

  const getListings = async () => {
    const tokens = await fetchData();

    tokens.map((nft: any) => {
      if (nft.listingStatus == "ACTIVE") {
        const price = nft.price;
        const id = nft.tokenId;
        const name = nft.tokenName;
        const URI = nft.tokenURI;
        const tokenAddress = nft.token;
        const priceInNum = Number(ethers.utils.formatUnits(price, 18));

        items.push({ priceInNum, id, name, URI, tokenAddress });
      }
    });
    return items;
  };

  async function getItemsData() {
    const response = await getListings();
    setList(response);
  }

  useEffect(() => {
    // if (!connector) {
    //   return;
    // }
    getItemsData();
  }, [connector]);

  return (
    <NewNFTContainer>
      <TitleWrap>
        <Title>New NFTs</Title>
        <ViewAllBtn to="/all" state={{ buy: true, rent: false }}>
          View all
        </ViewAllBtn>
      </TitleWrap>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
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
              <SwiperSlide
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(
                    `nft/buy/tokenAddress=${item.tokenAddress}?id=${item.id}`,
                    {
                      state: {
                        tokenId: item.id,
                        tokenAddress: item.tokenAddress,
                      },
                    },
                  );
                }}
              >
                <NFTCardHome uri={item.URI} name={item.name} />
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
