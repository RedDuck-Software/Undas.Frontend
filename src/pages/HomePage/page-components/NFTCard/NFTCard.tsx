import React from "react";

import {
  NFTWrap,
  Image,
  NFTAbout,
  Name,
  CollectionText,
  CreatorText,
  CreatorLink,
  ImageWrapper
} from "./NFTCard.styles";

import {
  Platform,
  Wrapper,
} from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";

const NFTCard: React.FC<{ uri: string; name: string }> = ({ uri, name }) => {
  return (
    <NFTWrap>
      <NFTAbout>
        <Wrapper disp="flex" justifyContent="space-between" alignItems="center" marg="0 0 10px">
          <Wrapper disp="flex" alignItems="center" gap="10px">
            <CollectionText>Collection Name</CollectionText>
            <img src={Verified} alt="verified-ico" />
            <Platform col="#873DC1" fs="16px">UND</Platform>
          </Wrapper>
          <Name>{name}</Name>
        </Wrapper>
        <CreatorText>Created by
          <CreatorLink href="#">Borya Borya</CreatorLink>
        </CreatorText>
      </NFTAbout>
      <ImageWrapper>
        <Image src={uri} alt="nft-image" />
      </ImageWrapper>
    </NFTWrap>
  );
};

export default NFTCard;
