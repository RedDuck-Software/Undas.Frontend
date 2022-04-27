import React from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';

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
  Instagram,
  AppStore,
  Phone,
} from "./imports";

const Footer = () => {
  return (
    <FooterSec>
      <FooterContainer>
        <LeftSideWrapper>
          <TopicColumn>
            <TopicTitle>Explore</TopicTitle>
            <TopicText href="all">All NFTs</TopicText>
            <TopicText href="assets/new">New</TopicText>
            <TopicText href="explore/art">Artwork</TopicText>
            <TopicText href="explore/sport">Sport</TopicText>
            <TopicText href="#">Photography</TopicText>
            <TopicText href="#">Metaverses</TopicText>
            <TopicText href="#">Celebrity</TopicText>
            <TopicText href="#">rwaNFT</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Activity</TopicTitle>
            <TopicText href="collection">Top collection</TopicText>
            <TopicText href="#">Last Sales</TopicText>
            <TopicText href="#">Listings</TopicText>
            <TopicText href="#">Offers</TopicText>
          </TopicColumn>
          <TopicColumn>
            <TopicTitle>Comunity</TopicTitle>
            <TopicText href="#">About</TopicText>
            <TopicText href="#">Blog</TopicText>
            <TopicText href="#">Social media</TopicText>
            <TopicText href="faq">FAQ</TopicText>
          </TopicColumn> 
        </LeftSideWrapper>
          <MobileMenuInner>         
            <DropdownButton id="dropdown-button" title="Explore">
              <Dropdown.Item href="all" className="dropdown-item">All NFTs</Dropdown.Item>
              <Dropdown.Item href="assets/new">New</Dropdown.Item>
              <Dropdown.Item href="explore/art">Artwork</Dropdown.Item>
              <Dropdown.Item href="#">Sport</Dropdown.Item>
              <Dropdown.Item href="#">Photography</Dropdown.Item>
              <Dropdown.Item href="#">Metaverses</Dropdown.Item>
              <Dropdown.Item href="#">Celebrity</Dropdown.Item>
              <Dropdown.Item href="#">rwaNFT</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-button" title="Activity">
              <Dropdown.Item href="collection">Top collection</Dropdown.Item>
              <Dropdown.Item href="#">Last Sales</Dropdown.Item>
              <Dropdown.Item href="explore/art">Artwork</Dropdown.Item>
              <Dropdown.Item href="#">Listings</Dropdown.Item>
              <Dropdown.Item href="#">Offers</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-button" title="Comunity">
              <Dropdown.Item href="#">About</Dropdown.Item>
              <Dropdown.Item href="#">Blog</Dropdown.Item>
              <Dropdown.Item href="#">Social media</Dropdown.Item>
              <Dropdown.Item href="#">FAQ</Dropdown.Item>
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
              <FooterIcon src={Instagram} />
            </FooterIconLink>
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
