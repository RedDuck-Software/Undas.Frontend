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
  LinkSGM,
  TopLinkWrapper,
  TopLink,
  ContainerHead,
} from "./BlogPost4.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { ArticleBig2, Heart, SGM, Blog3, Blog5 } from "../../imports";
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
        image={Blog3}
        titleText={
          "BCG: By 2030, the number of cryptocurrency users will reach 1 billion people"
        }
        date={"23.07.2022"}
        adress={"/blog-post-3"}
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

const BlogPost4: React.FC = () => {
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
              <ArticleTitle>SGM and Undas Partnership</ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>JULY 22, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>1 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={SGM}></ArticleImage>
              <ArticleText>
                SGM <LinkSGM>(https://sgm.team/)</LinkSGM> is an ecosystem of
                cross-platform applications that provide users with all the
                necessary tools to work with cryptocurrencies. You can download
                apps from the App Store and Google Play. The company implements
                the concept of a superapp application based on the Cosmos
                blockchain. As part of the partnership, <Colored>UNDAS</Colored>{" "}
                will be integrated into the ecosystem as the official NFT
                marketplace.
              </ArticleText>
              <ColoredArticleText>
                We will keep you updated on this and other Undas partnerships!
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

export default BlogPost4;
