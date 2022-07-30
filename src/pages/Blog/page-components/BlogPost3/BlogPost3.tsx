import React from "react";

import {
  ArticleWrap,
  ArticleMainBlock,
  BlockContainer,
  ArticleTitle,
  ArticleDescription,
  ArticleDescriptionItem,
  ArticleImage,
  ArticleText,
  RelatedArticles,
  Text,
  RelatedButton,
  ColoredArticleText,
  Colored,
  CardsWrap,
  Schedule,
  StyledLink,
  TopLinkWrapper,
  TopLink,
  ContainerHead,
} from "./BlogPost3.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { ArticleBig2, Heart, Graf, Blog3, SGM, Blog5 } from "../../imports";
import BlogCard from "../BlogCard/BlogCard";

const CardsSection: React.FC = () => {
  return (
    <>
      <BlogCard
        image={ArticleBig2}
        titleText={"UNDAS: new mechanics of NFT markets"}
        date={"25.07.2022"}
        adress={"/blog-post-2"}
      />
      <BlogCard
        image={SGM}
        titleText={"SGM and Undas Partnership"}
        date={"23.07.2022"}
        adress={"/blog-post-4"}
      />
      <BlogCard
        image={Blog5}
        titleText={"Undas.io launched on Goerli Testnet"}
        date={"21.07.2022"}
        adress={"/blog-post-5"}
      />
    </>
  );
};

const BlogPost3: React.FC = () => {
  return (
    <Background>
      <Container>
        <TopLinkWrapper>
          <ContainerHead>
            <TopLink href="/">Home</TopLink>
            <TopLink href="blog">Blog</TopLink>
          </ContainerHead>
        </TopLinkWrapper>
        <ArticleWrap>
          <ArticleMainBlock>
            <BlockContainer>
              <ArticleTitle>
                BCG: By 2030, the number of cryptocurrency users will reach 1
                billion people
              </ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>JULY 23, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>3 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={Blog3}></ArticleImage>
              <ArticleText>
                Global management consulting firm Boston Consulting Group (BCG)
                said that the adoption of cryptocurrencies is likely to
                accelerate further, driven by both retail and institutional
                investors. In a research paper published on July 22, a group of
                researchers said the rollout is likely to result in about a
                billion users in the sector by 2030.
              </ArticleText>
              <ArticleText>
                The report notes that the forecast is reflected in the spread of
                the Internet in the 1990s. “If we use the number of
                cryptocurrency holders as a proxy for Web3 users and compare it
                to the level of adoption by Internet users in the 1990s, the
                message is clear: there is still a lot of growth ahead. While it
                is difficult to predict if the trend of crypto adoption will
                continue, the total number of crypto users is likely to reach 1
                billion by 2030,” the report says.
              </ArticleText>
              <Schedule src={Graf}></Schedule>
              <ArticleText>
                {" "}
                We at <Colored>UNDAS</Colored> consider this estimate to be even
                conservative despite the impressive forecasts. According to the
                studies that we got acquainted with when preparing the analysis
                of the crypto market for our{" "}
                <StyledLink to="/WhitePaper.pdf" target="_blank" download>
                  White Paper
                </StyledLink>
                , we see that the number of users of crypto exchanges has
                already exceeded 200 million users and it doubles almost 2 times
                every year, so some studies predict an increase to 800 million
                users already in 2025.
              </ArticleText>
              <ColoredArticleText>
                Whatever it was, we are only at the very beginning of the
                journey!
              </ColoredArticleText>
              <ColoredArticleText textAlign="right">
                The founders and the UNDAS team{" "}
                <span>
                  <img src={Heart} />
                </span>
              </ColoredArticleText>
            </BlockContainer>
          </ArticleMainBlock>
          <RelatedArticles>
            <Text>RELATED POSTS:</Text>
            <CardsWrap>
              <CardsSection />
            </CardsWrap>
          </RelatedArticles>
          <RelatedButton to="/blog">go to blog</RelatedButton>
        </ArticleWrap>
      </Container>
      <Partners />
    </Background>
  );
};

export default BlogPost3;
