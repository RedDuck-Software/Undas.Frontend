import React from "react";

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
const NFTCardForCarousel: React.FC<{ uri: string; name: string;}> = ({ uri, name}) => {
  return (
    <NFTWrap>
      <NFTAbout>
        <AboutWrapper
          disp="flex"
          justifyContent="center"
          alignItems="center"
          marg="0 0 10px"
        >
          <CollectionWrapper disp="flex" alignItems="center" gap="10px">
           
          </CollectionWrapper>
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
