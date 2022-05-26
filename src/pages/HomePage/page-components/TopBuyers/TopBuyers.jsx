/* tslint:disable */
/* eslint-disable */
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import {
  BuyersSec,
  BuyersTitle,
  BuyersTitleViolet,
  BuyersWrapper,
  BuyersItem,
  Image,
  ProfileImage,
  TextWrapper,
  UserName,
  UserInformation,
  ButtonWrapper,
} from "./TopBuyers.styles";

import "../CarouselStyling.css";
import { Container, Button, ComingSoonImage } from "../../../../globalStyles";
import profile from "../../../../icons/buyers-profile.png";
import image from "../../../../images/buyers-image.png";
import comingSoon from "../../../../images/coming-soon.png";

const breakPoints = [
  { width: 460, itemsToShow: 1 },
  { width: 462, itemsToShow: 3 },
];

const CarouselSettings = {
  disableArrowsOnEnd: true,
  itemsToShow: 3,
};

const TopBuyers = () => {
  const [showBuyers] = useState(false);

  return (
    <BuyersSec>
      <Container>
        <BuyersTitle>
          Top buyers over
          <BuyersTitleViolet>last 7 days</BuyersTitleViolet>
          <ComingSoonImage src={comingSoon} />
        </BuyersTitle>
        {showBuyers ? (
          <BuyersWrapper>
            <Carousel
              {...CarouselSettings}
              breakPoints={breakPoints}
              isRTL={false}
            >
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
              <BuyersItem>
                <Image src={image} />
                <ProfileImage src={profile} />
                <TextWrapper>
                  <UserName>Users name</UserName>
                  <UserInformation>Information about user</UserInformation>
                </TextWrapper>
              </BuyersItem>
            </Carousel>
            <ButtonWrapper>
              <Link to="assets">
                <Button violet big>
                  Explore to marketplace
                </Button>
              </Link>
            </ButtonWrapper>
          </BuyersWrapper>
        ) : (
          <></>
        )}
      </Container>
    </BuyersSec>
  );
};

export default TopBuyers;