import React from "react";

import {
  FooterSec,
  FooterContainer,
  FooterText,
  TopLeftWrapper,
  BottomLeftWrapper,
  TopRightWrapper,
  BottomRightWrapper,
  FooterIconsWrapper,
  FooterIcon,
  CustomSearch,
  Input,
  ButtonSubmit,
  PhoneImage,
  LeftSide,
  RightSide,
  TopicColumn,
  TopicTitle,
  TopicText,
  Year,
  TopicFirst,
} from "./Footer.styles";

import {
  Twitter,
  LinkedIn,
  YouTube,
  Telegram,
  Instagram,
  Phone,
} from "./imports";

const Footer = () => {
  return (
    <FooterSec>
      <FooterContainer>
        <TopLeftWrapper>
          <FooterText>Join Only1.art community</FooterText>
          <FooterIconsWrapper>
            <FooterIcon src={Twitter} />
            <FooterIcon src={LinkedIn} />
            <FooterIcon src={YouTube} />
            <FooterIcon src={Telegram} />
            <FooterIcon src={Instagram} />
          </FooterIconsWrapper>
        </TopLeftWrapper>
        <BottomRightWrapper>
          <TopicColumn>
            <TopicTitle>Explore</TopicTitle>
            <TopicFirst>All NFTs</TopicFirst>
            <TopicText>New</TopicText>
            <TopicText>Art</TopicText>
            <TopicText>Sport</TopicText>
            <TopicText>Girls</TopicText>
            <TopicText>Furniture</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Activity</TopicTitle>
            <TopicText>Top collection</TopicText>
            <TopicText>Top buyers</TopicText>
            <TopicText>Top artists</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Comunity</TopicTitle>
            <TopicText>About</TopicText>
            <TopicText>Blog</TopicText>
            <TopicText>Social media</TopicText>
          </TopicColumn>
        </BottomRightWrapper>
      </FooterContainer>
      <Year>2022</Year>
    </FooterSec>
  );
};

export default Footer;
