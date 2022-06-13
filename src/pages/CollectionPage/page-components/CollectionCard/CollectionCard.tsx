import React from "react";

import {
  CardWrap,
  ImageWrap,
  SocialWrap,
  CollectionName,
  Description,
  Creator,
  PurpleText,
  MakeComplaint,
  MoreInfo,
  ImgCollection,
  DescriptionS,
  CreatorWrapper,
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
  More,
} from "../../imports";

const CollectionCard: React.FC = () => {
  return (
    <CardWrap>
      <Wrapper disp="flex" gap="20px">
        <ImageWrap>
          <ImgCollection src={CollectionPic} alt="collection-pic" />
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
          <MoreInfo>
            <img src={More} alt="more-info" />
          </MoreInfo>
          <Description>
            If you believe in the future of DeFi, then you believein the future
            of ...
          </Description>
        </Wrapper>
      </Wrapper>
      <DescriptionS>
        If you believe in the future of DeFi, then you believein the future of
        ...
      </DescriptionS>
      <CreatorWrapper>
        <CollectionName>Collection Name</CollectionName>
        <img src={Verified} alt="verified-ico" />
        <Platform>UND</Platform>
      </CreatorWrapper>
      <Creator>
        Creator <PurpleText>Borya Borya</PurpleText>
      </Creator>
      <MakeComplaint>Make a Complaint</MakeComplaint>
    </CardWrap>
  );
};

export default CollectionCard;
