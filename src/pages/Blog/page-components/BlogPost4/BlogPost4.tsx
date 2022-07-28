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
} from "./BlogPost4.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { News2, News3, ArticleBig2, Heart } from "../../imports";
import BlogCard from "../BlogCard/BlogCard";

const CardsSection: React.FC = () => {
  return (
    <>
      <BlogCard
        image={ArticleBig2}
        titleText={"UNDAS: new mechanics of NFT markets"}
        date={"27.07.2022"}
        adress={"/blog-post-2"}
      />
      <BlogCard
        image={News2}
        titleText={
          "BCG: By 2030, the number of cryptocurrency users will reach 1 billion people"
        }
        date={"22.07.2022"}
        adress={"/blog-post-3"}
      />
      <BlogCard
        image={News3}
        titleText={"SGM and Undas Partnership"}
        date={"22.07.2022"}
        adress={"/blog-post-4"}
      />
    </>
  );
};

const BlogPost4: React.FC = () => {
  return (
    <Background>
      <Container>
        <ArticleWrap>
          <ArticleMainBlock>
            <BlockContainer>
              <ArticleTitle>SGM and Undas Partnership</ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>NEWS</ArticleDescriptionItem>
                <ArticleDescriptionItem>JULY 22, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>1 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={ArticleBig2}></ArticleImage>
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
