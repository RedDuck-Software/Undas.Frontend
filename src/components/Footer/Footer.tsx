import React from 'react';

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
} from './Footer.styles';

import {
  Twitter,
  LinkedIn,
  YouTube,
  Telegram,
  Instagram,
  AppStore,
  Phone,
} from './imports';

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
        <TopRightWrapper>
          <LeftSide>
            <PhoneImage src={Phone}></PhoneImage>
          </LeftSide>
          <RightSide>
            <FooterText>
              Download the Only1.art app to explore any NFTs
            </FooterText>
            <FooterIcon src={AppStore} />
          </RightSide>
        </TopRightWrapper>
        <BottomLeftWrapper>
          <FooterText>Get the latest Only1.art updates</FooterText>
          <CustomSearch>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="You're e-mail"
            />
            <ButtonSubmit>I’m in</ButtonSubmit>
          </CustomSearch>
        </BottomLeftWrapper>
        <BottomRightWrapper>
          <TopicColumn>
            <TopicTitle>Explore</TopicTitle>
            <TopicText>All NFTs</TopicText>
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
