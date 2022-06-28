import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

import {
  FooterSec,
  FooterContainer,
  FooterText,
  LeftSideWrapper,
  RightSideWrapper,
  FooterIconsWrapper,
  FooterIcon,
  CustomSearch,
  Input,
  ButtonSubmit,
  BottomWrapper,
  RightSideTop,
  TopicColumn,
  TopicTitle,
  TopicText,
  Year,
  FooterIconLink,
  MobileMenuInner,
} from "./Footer.styles";
import {
  Twitter,
  LinkedIn,
  YouTube,
  Telegram,
  /*Instagram*/ Reddit,
} from "./imports";

const Footer = () => {
  return (
    <FooterSec>
      <FooterContainer>
        <LeftSideWrapper>
          <TopicColumn>
            <TopicTitle>Explore</TopicTitle>
            <TopicText href="all">All NFTs</TopicText>
            <TopicText href="categories-new">New</TopicText>
            <TopicText href="categories-art">Artwork</TopicText>
            <TopicText href="categories-sport">Sport</TopicText>
            <TopicText href="categories-photo">Photography</TopicText>
            <TopicText href="categories-gimefi">GameFi</TopicText>
            <TopicText href="categories-celebrity">Celebrity</TopicText>
            <TopicText href="categories-rwa">rwaNFT</TopicText>
            <TopicText href="categories-18plus">18+ NFTs</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Activity</TopicTitle>
            <TopicText href="topcollection">Top collection</TopicText>
            <TopicText href="activity">Statistics</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Comunity</TopicTitle>
            <TopicText href="about-us">About</TopicText>
            <TopicText href="blog">Blog</TopicText>
            <TopicText href="faq">FAQ</TopicText>
          </TopicColumn>
        </LeftSideWrapper>
        <MobileMenuInner>
          <DropdownButton id="dropdown-button" title="Explore">
            <Dropdown.Item href="all" className="dropdown-item">
              All NFTs
            </Dropdown.Item>
            <Dropdown.Item href="assets/new">New</Dropdown.Item>
            <Dropdown.Item href="explore/art">Artwork</Dropdown.Item>
            <Dropdown.Item href="categories">Sport</Dropdown.Item>
            <Dropdown.Item href="categories">Photography</Dropdown.Item>
            <Dropdown.Item href="categories">Celebrity</Dropdown.Item>
            <Dropdown.Item href="categories">rwaNFT</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-button" title="Activity">
            <Dropdown.Item href="topcollection">Top collection</Dropdown.Item>
            <Dropdown.Item href="activity">Statistics</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-button" title="Comunity">
            <Dropdown.Item href="about-us">About</Dropdown.Item>
            <Dropdown.Item href="blog">Blog</Dropdown.Item>
            <Dropdown.Item href="faq">FAQ</Dropdown.Item>
          </DropdownButton>
        </MobileMenuInner>

        <RightSideWrapper>
          <RightSideTop>
            <FooterText>Get the latest Undas updates</FooterText>
            <CustomSearch>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="You're e-mail"
              />
              <ButtonSubmit>I’m in</ButtonSubmit>
            </CustomSearch>
          </RightSideTop>
          <FooterIconsWrapper>
            <FooterIconLink href="#">
              <FooterIcon src={Twitter} />
            </FooterIconLink>
            <FooterIconLink href="#">
              <FooterIcon src={LinkedIn} />
            </FooterIconLink>
            <FooterIconLink href="#">
              <FooterIcon src={YouTube} />
            </FooterIconLink>
            <FooterIconLink href="#">
              <FooterIcon src={Telegram} />
            </FooterIconLink>
            <FooterIconLink href="#">
              <FooterIcon src={Reddit} />
            </FooterIconLink>
            {/*<FooterIconLink href="#">
              <FooterIcon src={Instagram} />
            </FooterIconLink>*/}
          </FooterIconsWrapper>
        </RightSideWrapper>
      </FooterContainer>
      <BottomWrapper>
        <Year>© 2022</Year>
      </BottomWrapper>
    </FooterSec>
  );
};

export default Footer;
