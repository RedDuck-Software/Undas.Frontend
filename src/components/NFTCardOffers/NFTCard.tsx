import React from "react";

import {
  NFTWrap,
  Image,
  NFTAbout,
  Name,
  CollectionText,
  CreatorText,
  CreatorLink,
  ImageWrapper,
  AboutWrapper,
  CollectionWrapper,
} from "./NFTCard.styles";

import { Platform } from "../../pages/CategoriesPage/Categories.styles";
import { Verified } from "../../pages/CategoriesPage/imports";
//todo all collection names
const NFTCard: React.FC<{
  uri: string;
  name: string;
  collectionName?: string;
}> = ({ uri, name, collectionName }) => {
  return (
    <NFTWrap>
      <NFTAbout>
        <AboutWrapper
          disp="flex"
          justifyContent="space-between"
          alignItems="center"
          marg="0 0 10px"
        >
          <CollectionWrapper disp="flex" alignItems="center" gap="10px">
            <CollectionText>{collectionName}</CollectionText>
            <img src={Verified} alt="verified-ico" />
            <Platform col="#873DC1" fs="16px">
              UND
            </Platform>
          </CollectionWrapper>
          <Name>{name}</Name>
        </AboutWrapper>
        <CreatorText>
          Created by
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
