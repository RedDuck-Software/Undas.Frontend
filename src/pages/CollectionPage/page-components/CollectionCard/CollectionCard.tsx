import React from "react";

import {
  CardWrap,
  ImageWrap,
  SocialWrap,
  CollectionName,
  Description,
  Creator,
  PurpleText,
} from "./CollectionCard.styles";

import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";
import {
  CollectionPic,
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
  SiteIco,
} from "../../imports";

const CollectionCard: React.FC = () => {
  return (
    <CardWrap>
      <Wrapper disp="flex" gap="20px">
        <ImageWrap>
          <img src={CollectionPic} alt="collection-pic" />
        </ImageWrap>
        <Wrapper
          disp="flex"
          flexDirection="column"
          justifyContent="space-between"
          w="100%"
        >
          <SocialWrap>
            <SiteIco />
            <TwitterIco />
            <TelegramIco />
            <DiscordIco />
            <InstagramIco />
          </SocialWrap>
          <Description>
            If you believe in the future of DeFi, then you believein the future
            of ...
          </Description>
        </Wrapper>
      </Wrapper>
      <Wrapper disp="flex" alignItems="center" gap="10px" marg="20px 0 5px 0">
        <CollectionName>Borya Borya</CollectionName>
        <img src={Verified} alt="verified-ico" />
        <Platform>UND</Platform>
      </Wrapper>
      <Creator>
        Creator <PurpleText>Borya Borya</PurpleText>
      </Creator>
    </CardWrap>
  );
};

export default CollectionCard;
