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
  LinkMail,
  TopLinkWrapper,
  TopLink,
  ContainerHead,
} from "./BlogPost5.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { ArticleBig2, Heart, Blog5, Blog3, SGM } from "../../imports";
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
        image={SGM}
        titleText={"SGM and Undas Partnership"}
        date={"22.07.2022"}
        adress={"/blog-post-4"}
      />
    </>
  );
};

const BlogPost5: React.FC = () => {
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
              <ArticleTitle>Undas.io launched on Goerli Testnet</ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>NEWS</ArticleDescriptionItem>
                <ArticleDescriptionItem>JULY 21, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>1 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={Blog5}></ArticleImage>
              <ArticleText>
                We are pleased to announce the launch of the MVP of the{" "}
                <Colored>UNDAS</Colored> project! The platform is in test mode,
                for testing it is necessary to connect the Metamask wallet to
                the platform and select the Goerli test network. At the moment,
                the following functions are available for the test:<br></br>-
                Creation of the NFT<br></br>- Sale and purchase of NFT<br></br>-
                NFT rent<br></br>- Placing offers according to the traditional
                system<br></br>- Personal account
              </ArticleText>
              <ArticleText>
                Please note that when creating an NFT, you must insert a link to
                a publicly available image, since the platform works exclusively
                on smart contracts without off-chain server solutions. For the
                same reason, all actions go through transaction confirmation in
                Metamask. If you would like to take part in testing, as well as
                suggest ideas and partnerships, write to:{" "}
                <LinkMail>ceo@undas.io</LinkMail>.
              </ArticleText>
              <ColoredArticleText>Join the Undas!</ColoredArticleText>
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

export default BlogPost5;
