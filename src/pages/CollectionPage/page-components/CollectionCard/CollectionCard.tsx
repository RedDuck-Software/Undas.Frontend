import React from "react";

import {
  CardWrap,
  ImageWrap,
  SocialWrap,
  CollectionName,
  Description,
  Creator,
  PurpleText,
  MoreInfo,
  ImgCollection,
  DescriptionS,
  CreatorWrapper,
} from "./CollectionCard.styles";

import { Platform, Wrapper } from "../../../CategoriesPage/Categories.styles";
import { Verified } from "../../../CategoriesPage/imports";
import {
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
  SiteIco,
  More,
} from "../../imports";

interface CollectionCardProps {
  name: string;
  creator: string;
  description: string;
  logo: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  name,
  creator,
  description,
  logo,
}) => {
  return (
    <CardWrap>
      <Wrapper disp="flex" gap="20px">
        <ImageWrap>
          <ImgCollection src={logo} alt="collection-pic" />
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
          <Description>{description}</Description>
        </Wrapper>
      </Wrapper>
      <DescriptionS>{description}</DescriptionS>
      <CreatorWrapper>
        <CollectionName>{name}</CollectionName>
        <img src={Verified} alt="verified-ico" />
        <Platform>UND</Platform>
      </CreatorWrapper>
      <Creator>
        Creator <PurpleText>{creator}</PurpleText>
      </Creator>
    </CardWrap>
  );
};

export default CollectionCard;
