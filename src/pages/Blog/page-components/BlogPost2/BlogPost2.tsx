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
  List,
  StyledLink,
} from "./BlogPost2.styles";

import Partners from "../../../../components/Partners/Partners";
import { Background, Container } from "../../../../globalStyles";
import { News2, News3, ArticleBig2, Heart } from "../../imports";
import BlogCard from "../BlogCard/BlogCard";

const CardsSection: React.FC = () => {
  return (
    <>
      <BlogCard
        image={News2}
        titleText={
          "BCG: By 2030, the number of cryptocurrency users will reach 1 billion people"
        }
        date={"23.07.2022"}
        adress={"/blog-post-3"}
      />
      <BlogCard
        image={News3}
        titleText={"SGM and Undas Partnership"}
        date={"22.07.2022"}
        adress={"/blog-post-4"}
      />
      <BlogCard
        image={ArticleBig2}
        titleText={"Undas.io launched on Goerli Testnet"}
        date={"21.07.2022"}
        adress={"/blog-post-5"}
      />
    </>
  );
};

const BlogPost2: React.FC = () => {
  return (
    <Background>
      <Container>
        <ArticleWrap>
          <ArticleMainBlock>
            <BlockContainer>
              <ArticleTitle>UNDAS: new mechanics of NFT markets</ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>JULY 25, 2022</ArticleDescriptionItem>
                <ArticleDescriptionItem>2 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={ArticleBig2}></ArticleImage>
              <ArticleText>
                In previous article, we told how the idea of the project was
                born and how <Colored>UNDAS</Colored> was created. Now, we would
                like to focus on new mechanics and a new perspective on the NFT
                market that we want to offer. During the creation of{" "}
                <Colored>UNDAS</Colored>, we primarily focused on the interests
                and needs of the crypto and NFT community. The main problem we
                wanted to solve was to provide liquidity for traders and NFT
                passive income holders. To solve these problems, we offer
                mechanics:
              </ArticleText>
              <ArticleText>
                <List>
                  <li>
                    Rent – you can take and rent NFT, while you agree with the
                    NFT owner on the terms of transaction. Rental probability
                    can be changed by either native currency, stablecoin or
                    other NFTs. Now it is not necessary to purchase NFT to play
                    – it can be rented.
                  </li>
                  <li>
                    Stake – holders of top and traded NFT collections get the
                    opportunity to receive passive income from placing their
                    naphthas on the <Colored>UNDAS</Colored> platform.
                  </li>
                  <li>
                    Return order – you get the opportunity to exchange orders to
                    negotiate until the final terms are agreed. You may run into
                    serious problems with the surcharge in both directions. For
                    example, select nft from the user&apos;s wallet and offer
                    him to exchange for 2 nft or for 1 but with an additional
                    payment. This mechanic opens up a new level in NFT trading.
                    Which is very important the method is based on gas-free, so
                    you will pay commissions and gas only if you have agreed on
                    a deal.
                  </li>
                  <li>
                    DeFi orders – you can attract and repay loans and liquidate
                    other users secured by NFT.
                  </li>
                  <li>
                    NFT splitting – sell our NFTs in parts and buy parts of the
                    most expensive and top collections to hedge your risks on
                    NFT portfolios
                  </li>
                  <li>
                    RWA NFT s are NFTs tied to real items, now you can buy
                    sneakers in the real world and get a copy of that item in
                    the metaverse.
                  </li>
                </List>
              </ArticleText>
              <ArticleText>
                {" "}
                And we also have a special interface that will be convenient for
                traders and those who want to make quick NFT bets - open the
                “list” display in any NFT filter and test it!
              </ArticleText>
              <ArticleText>
                {" "}
                We return 90 percent of the commission that users pay back to
                the project community:<br></br>
                30% – NFT staking<br></br>
                30% – UND token hold<br></br>
                30% – payment for trading transactions, cashback option for
                traders.
              </ArticleText>
              <ArticleText>
                {" "}
                One more thing :-) we have rewards for our users that will help
                them receive additional bonuses from trading, but this is a
                topic for another articleJ If you are interested in all the new
                mechanics of <Colored>UNDAS</Colored>, you can check out the
                white paper project at the link:{" "}
                <StyledLink to="/WhitePaper.pdf" target="_blank" download>
                  White Paper{" "}
                </StyledLink>
                It&apos;s big but it&apos;s worth it!
              </ArticleText>
              <ColoredArticleText>Join the Undas community!</ColoredArticleText>
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

export default BlogPost2;
