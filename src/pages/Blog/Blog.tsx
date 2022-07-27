import React from "react";

import { BlogWrap } from "./Blog.styles";
import {
  WebsiteTips2,
  WebsiteTips3,
  Inspiration1,
  ArticleBig2,
} from "./imports";
import BlogMainGrid from "./page-components/BlogMainGrid/BlogMainGrid";
import BlogPageGrid from "./page-components/BlogPageGrid/BlogPageGrid";
import { BlogPost } from "./types";

import Partners from "../../components/Partners/Partners";
import {
  Container,
  Background,
  PageTitle,
  ColoredText,
} from "../../globalStyles";

const Posts: BlogPost[] = [
  {
    image: ArticleBig2,
    titleText: "UNDAS: new mechanics of NFT markets",
    date: "20.07.2022",
    adress: "/blog-post-2",
  },
  {
    image: WebsiteTips2,
    titleText:
      "BCG: By 2030, the number of cryptocurrency users will reach 1 billion people",
    date: "22.07.2022",
    adress: "/blog-post-3",
  },
  {
    image: Inspiration1,
    titleText: "SGM and Undas Partnership",
    date: "25.07.2022",
    adress: "/blog-post-4",
  },
  {
    image: WebsiteTips3,
    titleText: "Undas.io launched on Goerli Testne",
    date: "27.07.2022",
    adress: "/blog-post-5",
  },
];
const Blog: React.FC = () => {
  return (
    <Background>
      <BlogWrap>
        <Container>
          <PageTitle>
            The <ColoredText>UNDAS</ColoredText> Blog
          </PageTitle>
          <BlogMainGrid />
          <BlogPageGrid posts={Posts} />
        </Container>
      </BlogWrap>
      <Partners />
    </Background>
  );
};

export default Blog;
