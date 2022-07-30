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
  TopLinkWrapper,
  TopLink,
  ContainerHead,
} from "./BlogPost1.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { ArticleBig2, ArticleBig, Heart, Blog3, SGM } from "../../imports";
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

const ArticlePage: React.FC = () => {
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
              <ArticleTitle>Welcome to UNDAS: Project History</ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>JULY 27, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>3 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={ArticleBig}></ArticleImage>
              <ArticleText>
                Hello to all readers of the <Colored>UNDAS</Colored> blog! We
                would like to open this blog with a story about the project
                itself, how it was invented and how it was brought to life.
              </ArticleText>
              <ArticleText>
                The project began with the idea of an NFT publishing house,
                namely a men&apos;s magazine on the blockchain, as well as
                collections of modern artists who were just starting their
                journey in the NFT or were interested in the market.
              </ArticleText>
              <ArticleText>
                {" "}
                We wanted to reward ownership of paintings and enable customers
                to rent artists&apos; works. We were passionate about the
                opportunities that NFT offers to content authors and publishers.
              </ArticleText>
              <ArticleText>
                {" "}
                We realized very quickly, starting development in the summer of
                2021, that the technology is at the start of its development. In
                this regard, no NFT marketplace can support the mechanics and
                capabilities that we would like our NFT owners to have. The
                future of the <Colored>UNDAS</Colored> company was decided by
                one call in October 2021. We told our old friends from RedDuck
                (we developed fintech solutions for banks with them) about our
                realization issues and mechanics that we would like to see in
                collections. During the meet, we also mentioned that we are
                negotiating with one hockey club to issue player cards in the
                NFT format.
              </ArticleText>
              <ArticleText>
                {" "}
                The conference lasted about 2 hours instead of the planned 20
                minutes. As a result, it was decided to create a working group
                and a decision on the development of the platform. A week later,
                8 people were already working on the project, all of whom
                remained on the project until today.
              </ArticleText>
              <ArticleText>
                {" "}
                In six months, the project has grown from an NFT publishing
                house to an NFT exchange. Moreover, it seems to us that it can
                potentially claim to be of fundamental importance for the NFT
                industry.{" "}
              </ArticleText>
              <ArticleText>
                During the realization of the project, we had to solve not only
                the tasks of developing the platform, but also, unfortunately,
                the tasks of team survival in the literal sense of the word.
                Most of the team lived in Kharkov, Ukraine.
              </ArticleText>
              <ArticleText>
                {" "}
                During the year of the project, the ideas of return offers were
                born. The functionality of quick transactions, rent, joint
                ownership, NFT stacking and much more have also been developed,
                which we will discuss in a separate article.
              </ArticleText>
              <ArticleText>
                {" "}
                Today, receiving feedback from participants of the crypto
                market, we understand that the beginning of the way was not in
                vain and was passed quickly and well enough.
              </ArticleText>
              <ArticleText>
                {" "}
                Every working meeting we reminded ourselves and the team that we
                were doing a project for the crypto and NFT community. In each
                of our decisions, we were guided by the fundamental values of
                decentralization, security and fairness of distribution, which
                the blockchain technology carries.
              </ArticleText>
              <ColoredArticleText>
                Join UNDAS, this project was made for you
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

export default ArticlePage;
