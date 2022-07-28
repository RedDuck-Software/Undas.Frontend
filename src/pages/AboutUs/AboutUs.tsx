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
  StyledLink,
  RoadMapContent,
  AchievementСontainer,
  ContainerHead,
  ContainerContent,
  AchievementСontainerWrap,
  PageTitleAbout,
  SubTitleArticle,
  AboutGalleryCenter,
  SubTitleRoadmap,
  /*SubTitleBuilding,*/
  SubTitleOurTeam,
  SubTitleOurTeamSmallSize,
  TextQuarter,
  TextDate,
  TextDateSmallSize,
  WhitePaper,
  Presentation,
  GitHabContainer,
  GitHubImage,
  ImageBox,
  LinkBox,
  LinkGitHub,
} from "./AboutUs.styles";
import { ArticleImg, GitHub } from "./imports";
import Road from "./Roadmap/Road";
import AboutSlider from "./Slider/Slider";
import TeammateCards from "./TeammateCard/TeammateCard";

import Partners from "../../components/Partners/Partners";
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
                    The history of <span>UNDAS</span> began in 2021. We have
                    witnessed the boom of the technology of non-fungible tokens
                    and the waves that have spread across all technology markets
                    from this boom. This gave us an idea to the name of the
                    future project, <span>UNDAS</span> (from the lat.) – waves.
                  </p>
                  <p>
                    We ourselves have become active participants in this
                    community. Exploring the market, we were surprised that the
                    entire history of the development of NFT technology is
                    largely limited to the sale of collections, most of which
                    may lose their value over time. At <span>UNDAS</span>, we
                    believe in the development of NFT technology and mechanics
                    beyond the current market and offer a new look at the use of
                    non – fungible tokens - rental of virtual and physical
                    items, transfer of ownership rights in the physical and
                    meta-worlds, passive income from owning liquid NFTs, joint
                    ownership and exchange of asset groups through NFT,
                    collateral for deposits using NFT, lending and much more.
                  </p>
                  <p>
                    The project team worked on the creation of various projects
                    in the Defi and Metaverses sectors of the crypto market, as
                    well as on traditional fintech solutions for banks.
                    Nevertheless, in our opinion, it is the NFT technology that
                    will truly open the door to the world of WEB 3.0, and we at{" "}
                    <span>UNDAS</span> are happy to become one of the pioneers!
                  </p>
                </ArticleText>
              </AboutContentText>
              <AboutGalleryCenter>
                <AboutSlider />
              </AboutGalleryCenter>
            </AboutTopContent>
            <AboutBottomContent>
              <AboutContentText>
                <ArticleText className="bottom-text">
                  <p>
                    <span>UNDAS</span> is a project, first of all, for the
                    crypto and NFT community. We have reduced the effective
                    commission of the platform by 10 times compared to other
                    marketplaces using a new approach to tokenomics of
                    marketplaces. We have also introduced gamification of the
                    entire trading process with a progressive discount on
                    commission. As well the team has developed a special
                    interface for traders, from which you can make quick bids on
                    auctions, rent and purchase transactions of NFT.
                  </p>

                  <p>
                    We want to enable all market participants to interact
                    effectively. We will use a system of return orders developed
                    in-house for the first time on the market. Our system allows
                    users to return offers to each other until all the
                    conditions of the transaction are agreed. We have made a
                    system of a chain of orders of gas-free. Gas users pay only
                    once – when recording transaction terms in the blockchain.
                  </p>

                  <p>
                    <span>UNDAS</span> tokenomics is unique – it allows you to
                    pay a trading bonus to UND token holders, NFT staking
                    participants, buyers and sellers of all NFTs without
                    exception. At the same time, the payout pools are fully
                    renewable and will only increase with the growth of users on
                    the site due to an increase in the volume of transactions.
                  </p>
                </ArticleText>
              </AboutContentText>
              <AboutContentImage src={ArticleImg} alt="article-illustration" />
            </AboutBottomContent>
          </AboutContent>
          <OurTeamWrap>
            <OurTeamTitle>
              <SubTitleOurTeam>Our Team</SubTitleOurTeam>
              <WhitePaper>
                <StyledLink to="/WhitePaper.pdf" target="_blank" download>
                  White Paper
                </StyledLink>
              </WhitePaper>
              <Presentation>
                <StyledLink to="/Undas.pdf" target="_blank" download>
                  Presentation
                </StyledLink>
              </Presentation>
            </OurTeamTitle>
            <SubTitleOurTeamSmallSize>Our Team</SubTitleOurTeamSmallSize>
            <OurTeamContent>
              <TeammateCards />
            </OurTeamContent>
          </OurTeamWrap>
        </Container>

        <GitHabContainer>
          <Container>
            <ImageBox>
              <GitHubImage src={GitHub} alt="GitHub-logo" />
              <LinkBox>
                <LinkGitHub href="https://github.com/RedDuck-Software/Undas.SubGraph">
                  https://github.com/RedDuck-Software/Undas.SubGraph
                </LinkGitHub>
                <LinkGitHub href="https://github.com/RedDuck-Software/Undas.Contracts">
                  https://github.com/RedDuck-Software/Undas.Contracts
                </LinkGitHub>
                <LinkGitHub href="https://github.com/RedDuck-Software/Undas.Frontend">
                  https://github.com/RedDuck-Software/Undas.Frontend
                </LinkGitHub>
              </LinkBox>
            </ImageBox>
          </Container>
        </GitHabContainer>
        <Container>
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
        <Partners />
      </Background>
    </AboutWrap>
  );
};

export default AboutUs;
