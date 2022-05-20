import React from "react";

import {
  NFTWrap,
  Image,
  NFTAbout,
  Name,
  BtnNone,
  CollectionImageWrap,
} from "./NFTCard.styles";

import { ReactComponent as FavoriteIco } from "../../../../icons/NFT-favorite.svg";
import CollectionPrev from "../../../../images/image-home/colleciton-small.png";
import {
  CollectionText,
  Platform,
  Wrapper,
} from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";

const NFTCard: React.FC<{ uri: string; name: string }> = ({ uri, name }) => {
  return (
    <NFTWrap>
      <Image src={uri} alt="nft-image" />
      <NFTAbout>
        <Wrapper disp="flex" justifyContent="space-between">
          <Wrapper disp="flex" alignItems="center" gap="10px" marg="0 20px 0 0">
            <Name>{name}</Name>
            <img src={Verified} alt="verified-ico" />
            <Platform>UND</Platform>
          </Wrapper>
          <BtnNone>
            <FavoriteIco />
          </BtnNone>
        </Wrapper>
        <Wrapper disp="flex" gap="10px" alignItems="center">
          <CollectionImageWrap>
            <img src={CollectionPrev} alt="collection-prev" />
          </CollectionImageWrap>
          <CollectionText fs="18px">Collection</CollectionText>
          <img src={Verified} alt="verified-ico" />
          <Platform>UND</Platform>
        </Wrapper>
      </NFTAbout>
    </NFTWrap>
  );
};

export default NFTCard;
