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
} from "./ArticlePage.styles";

import { Background, Container } from "../../../../globalStyles";
import { Inspiration1, News2, News3, ArticleBig } from "../../imports";
import BlogCard from "../BlogCard/BlogCard";
import { CardsWrap } from "../MainPageSection/MainPageSection.styles";

const CardsSection: React.FC = () => {
  return (
    <>
      <BlogCard
        image={Inspiration1}
        titleText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={News2}
        titleText={"Lorem ipsum adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={News3}
        titleText={"Lorem ipsum dolor sit, amet elit adipisicing elit."}
        date={"06.06.2022"}
      />
    </>
  );
};

const ArticlePage: React.FC = () => {
  return (
    <Background>
      <Container>
        <ArticleWrap>
          <ArticleMainBlock>
            <BlockContainer>
              <ArticleTitle>
                Lorem ipsum dolor sit eligendi tempora, amet consectetur
              </ArticleTitle>
              <ArticleDescription>
                <ArticleDescriptionItem>NEWS</ArticleDescriptionItem>
                <ArticleDescriptionItem>
                  FEBRUARY 7, 2022
                </ArticleDescriptionItem>
                <ArticleDescriptionItem>2 MIN READ</ArticleDescriptionItem>
              </ArticleDescription>
              <ArticleImage src={ArticleBig}></ArticleImage>
              <ArticleText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
                ex, blanditiis eligendi tempora, pariatur earum velit totam
                harum corporis est accusamus modi maiores molestiae ullam,
                architecto sint hic dignissimos unde perferendis ratione placeat
                sed recusandae? Perferendis nesciunt consequuntur, vitae,
                explicabo sunt odit aperiam exercitationem aliquid laboriosam,
                dolorum sequi quisquam recusandae cumque. Aspernatur eum quos,
                doloremque necessitatibus nisi nobis nostrum fugit unde labore
                porro pariatur libero perferendis? Voluptate odio sint tempora
                animi quos pariatur commodi ex quaerat itaque dolorum, ducimus
                voluptas aliquam hic soluta fugiat maxime error at sed, optio,
                est officia molestias veniam voluptates. Placeat, quasi magni
                dolorem nam minima ad eos officia? Ut magni, explicabo quibusdam
                debitis libero sapiente ea architecto, doloremque exercitationem
                inventore, accusamus officia. Ea neque dicta perferendis fuga
                sunt saepe quia, labore minima voluptates repudiandae sapiente
                incidunt deserunt ipsam molestias! Totam sed asperiores ab.
                Consequuntur nostrum sed maxime illo aliquid nulla omnis culpa,
                animi quibusdam recusandae. Fugit at nobis nihil voluptate
                laudantium deserunt impedit dignissimos, unde ducimus, sit qui
                quidem reprehenderit. Quaerat dolor, accusamus at delectus optio
                laborum quas recusandae illo rem debitis mollitia! Maiores iure
                dicta dolore eum laborum temporibus maxime adipisci aliquid,
                iste eaque enim architecto rem officiis voluptates porro
                voluptate sequi molestias? Ipsam asperiores dolorem suscipit
                quo, autem accusamus architecto sapiente. Non, vero, ipsam illo
                recusandae quaerat unde aliquam amet consectetur dolores quasi
                accusantium veritatis.
              </ArticleText>
              <ArticleText>
                Voluptate totam ab nostrum quaerat minima. Quaerat, accusantium
                nam. Cum excepturi, eum fugit vero iusto similique dolorem
                impedit totam, incidunt nisi dolores mollitia facere, sequi
                fugiat provident asperiores?
              </ArticleText>
            </BlockContainer>
          </ArticleMainBlock>
          <RelatedArticles>
            <Text>RELATED POSTS:</Text>
            <CardsWrap>
              <CardsSection />
            </CardsWrap>
          </RelatedArticles>
        </ArticleWrap>
      </Container>
    </Background>
  );
};

export default ArticlePage;
