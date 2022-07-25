import React from "react";
import { useNavigate } from "react-router-dom";

import {
  NFTWrap,
  Image,
  NFTAbout,
  Name,
  ImageWrapper,
  AboutWrapper,
  CollectionWrapper,
} from "./NFTCardForCarousel.styles";

//todo all collection names
const NFTCardForCarousel: React.FC<{
  uri: string;
  name: string;
  tokenAddress: string;
  tokenId: string;
  owner: string;
  collectionId?: string;
  collectionName?: string;
}> = ({
  uri,
  name,
  tokenAddress,
  tokenId,
  owner,
  collectionId,
  collectionName,
}) => {
  const navigate = useNavigate();
  return (
    <NFTWrap
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/nft/buy/tokenAddress=${tokenAddress}?id=${tokenId}`, {
          state: {
            tokenId: tokenId,
            tokenAddress: tokenAddress,
            URI: uri,
            name: name,
            tokenOwner: owner,
            collectionId: collectionId,
            collectionName: collectionName,
          },
        });
      }}
    >
      <NFTAbout>
        <AboutWrapper
          disp="flex"
          justifyContent="center"
          alignItems="center"
          marg="0 0 10px"
        >
          <CollectionWrapper
            disp="flex"
            alignItems="center"
            gap="10px"
          ></CollectionWrapper>
          <Name>{name}</Name>
        </AboutWrapper>
      </NFTAbout>
      <ImageWrapper>
        <Image src={uri} alt="nft-image" />
      </ImageWrapper>
    </NFTWrap>
  );
};

export default NFTCardForCarousel;
