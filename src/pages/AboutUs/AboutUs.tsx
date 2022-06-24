import React from "react";

import {
  AboutWrap,
  AboutContent,
  AboutTopContent,
  AboutGallery,
  AboutContentText,
  AboutBottomContent,
  AboutContentImage,
  OurTeamWrap,
  OurTeamTitle,
  OurTeamContent,
  Roadmap,
  ArticleText,
  Link,
  RoadMapContent,
  AchievementСontainer,
  ContainerHead,
  ContainerContent,
  AchievementСontainerWrap,
  PageTitleAbout,
  SubTitleArticle,
  AboutGalleryCenter,
  SubTitleRoadmap,
  SubTitleBuilding,
  SubTitleOurTeam,
  SubTitleOurTeamSmallSize,
  Download,
  TextQuarter,
  TextDate,
  TextDateSmallSize,
} from "./AboutUs.styles";
import { ArticleImg } from "./imports";
import Road from "./Roadmap/Road";
import AboutSlider from "./Slider/Slider";
import TeammateCards from "./TeammateCard/TeammateCard";

import { Background, Container } from "../../globalStyles";

const AboutUs: React.FC = () => {
  return (
    <AboutWrap>
      <Background>
        <Container>
          <PageTitleAbout>About Us</PageTitleAbout>
          <AboutContent>
            <AboutTopContent>
              <AboutGallery>
                <AboutSlider />
              </AboutGallery>
              <AboutContentText>
                <SubTitleArticle>Our Story</SubTitleArticle>
                <ArticleText>
                  <p>
                    In 2017 the world witnessed the birth of CryptoKitties. For
                    the first time, the world experienced a decentralized
                    application built on blockchains but targetted towards a
                    mainstream audience.
                  </p>

                  <p>
                    While CryptoKitties felt like a toy to many, it represented
                    a dramatic shift in how we interact with items in the
                    digital world. While previous digital items lived on company
                    servers, blockchain-native items lived on shared, public
                    blockchains owned by no single party. They could be viewed
                    anywhere, exchanged openly, and truly owned in a way that
                    was never before possible in the digital world.
                  </p>

                  <p>
                    Today, we’re proud to remain the largest general marketplace
                    for user-owned digital items, supporting multiple
                    blockchains, with the broadest set of categories and the
                    best prices for new emerging digital item classes.and the
                    best prices for new emerging digital item{" "}
                  </p>
                </ArticleText>
              </AboutContentText>
              <AboutGalleryCenter>
                <AboutSlider />
              </AboutGalleryCenter>
            </AboutTopContent>
            <AboutBottomContent>
              <AboutContentText>
                <SubTitleBuilding>
                  Building an open digital economy
                </SubTitleBuilding>
                <ArticleText className="bottom-text">
                  <p>
                    At <span>UNDAS</span>, we&#39;re excited about a brand new
                    type of digital good called a non-fungible token, or NFT.
                    NFTs have exciting new properties: they&#39;re unique,
                    provably scarce, tradeable, and usable across multiple
                    applications. Just like physical goods, you can do whatever
                    you want with them! You could throw them in the trash, gift
                    them to a friend across the world, or go sell them on an
                    open marketplace. But unlike physical goods, they&#39;re
                    armed with all the programmability of digital goods.
                  </p>

                  <p>
                    A core part of our vision is that open protocols like
                    Ethereum and interoperable standards like{" "}
                    <span>ERC-721</span> and <span>ERC-1155</span> will enable
                    vibrant new economies. We&#39;re building tools that allow
                    consumers to trade their items freely, creators to launch
                    new digital works, and developers to build rich, integrated
                    marketplaces for their digital items.
                  </p>

                  <p>
                    We’re proud to be the first and largest marketplace for
                    NFTs. A core part of our vision is that open protocols like
                    Ethereum and interoperable standards like{" "}
                    <span>ERC-721</span> and <span>ERC-1155</span> will enable
                    vibrant new economies. We&#39;re building tools that allow
                    consumers to trade their items freely, creators to launch
                    new digital works, and developers to build rich, integrated
                    marketplaces for their digital items.
                  </p>
                </ArticleText>
              </AboutContentText>
              <AboutContentImage src={ArticleImg} alt="article-illustration" />
            </AboutBottomContent>
          </AboutContent>
          <OurTeamWrap>
            <OurTeamTitle>
              <SubTitleOurTeam>Our Team</SubTitleOurTeam>
              <Link href="#" target="_blank">
                White Paper
              </Link>
              <Download>Download</Download>
            </OurTeamTitle>
            <SubTitleOurTeamSmallSize>Our Team</SubTitleOurTeamSmallSize>
            <OurTeamContent>
              <TeammateCards />
            </OurTeamContent>
          </OurTeamWrap>
          <Roadmap>
            <SubTitleRoadmap>Roadmap</SubTitleRoadmap>
            <RoadMapContent>
              <Road />
              <AchievementСontainerWrap>
                <AchievementСontainer className="left-side first-container">
                  <ContainerHead>
                    <TextDateSmallSize>Now</TextDateSmallSize>
                    <TextQuarter>1st Quarter</TextQuarter>
                    <TextDate>Now</TextDate>
                  </ContainerHead>
                  <ContainerContent className="left-side">
                    <ul className="container-list">
                      <li className="checked">NFT rental</li>
                      <li className="checked">Staking NFT</li>
                      <li className="checked">Offer trading system</li>
                      <li className="checked">Payment in UND</li>
                      <li className="checked">Staking UND</li>
                      <li className="checked">Publishing NFT</li>
                      <li className="checked">Publishing NFT collections</li>
                      <li className="checked">Ethereum, Polygon networks</li>
                    </ul>
                  </ContainerContent>
                </AchievementСontainer>
                <AchievementСontainer className="right-side second-container">
                  <ContainerHead>
                    <TextDateSmallSize>09 2022</TextDateSmallSize>
                    <TextQuarter>2nd Quarter</TextQuarter>
                    <TextDate>09 2022</TextDate>
                  </ContainerHead>
                  <ContainerContent className="right-side">
                    <ul className="container-list">
                      <li>Return offer system</li>
                      <li>Providing rent with NFT</li>
                      <li>NFT exchange with other NFT</li>
                      <li>Direct and reverse auctions</li>
                      <li>Fast betting system from NFT list</li>
                      <li>Avalanche, Binance networks</li>
                    </ul>
                  </ContainerContent>
                </AchievementСontainer>
                <AchievementСontainer className="left-side third-container">
                  <ContainerHead>
                    <TextDateSmallSize>12 2022</TextDateSmallSize>
                    <TextQuarter>3rd Quarter</TextQuarter>
                    <TextDate>12 2022</TextDate>
                  </ContainerHead>
                  <ContainerContent className="left-side">
                    <ul className="container-list">
                      <li>Full platform gamification</li>
                      <li>Trade, exchange, rent NFT bundles</li>
                      <li>Metaverse</li>
                      <li>Solana network support</li>
                    </ul>
                  </ContainerContent>
                </AchievementСontainer>
                <AchievementСontainer className="right-side fourth-container">
                  <ContainerHead>
                    <TextDateSmallSize>03 2023</TextDateSmallSize>
                    <TextQuarter>4th Quarter</TextQuarter>
                    <TextDate>03 2023</TextDate>
                  </ContainerHead>
                  <ContainerContent className="right-side">
                    <ul className="container-list">
                      <li>Trade parts of NFTs</li>
                      <li>Mobile app with RWA NFT</li>
                      <li>Minting NFT collections</li>
                    </ul>
                  </ContainerContent>
                </AchievementСontainer>
                <AchievementСontainer className="left-side fifth-container">
                  <ContainerHead>
                    <TextDateSmallSize>04 2022</TextDateSmallSize>
                    <TextQuarter>5th Quarter</TextQuarter>
                    <TextDate>06 2023</TextDate>
                  </ContainerHead>
                  <ContainerContent className="left-side">
                    <ul className="container-list">
                      <li>Trading pairs NFT to stable coins</li>
                      <li>NFT pricing system</li>
                      <li>Lending secured by of the NFT</li>
                      <li>Launching DAO</li>
                    </ul>
                  </ContainerContent>
                </AchievementСontainer>
              </AchievementСontainerWrap>
            </RoadMapContent>
          </Roadmap>
        </Container>
      </Background>
    </AboutWrap>
  );
};

export default AboutUs;
