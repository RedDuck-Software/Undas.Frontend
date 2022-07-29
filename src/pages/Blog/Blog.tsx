import React from "react";

import { BlogWrap } from "./Blog.styles";
import { ArticleBig2, SGM } from "./imports";
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
    date: "25.07.2022",
    adress: "/blog-post-2",
  },
  {
    image: SGM,
    titleText:
      "BCG: By 2030, the number of cryptocurrency users will reach 1 billion people",
    date: "23.07.2022",
    adress: "/blog-post-3",
  },
  {
    image: SGM,
    titleText: "SGM and Undas Partnership",
    date: "22.07.2022",
    adress: "/blog-post-4",
  },
  {
    image: SGM,
    titleText: "Undas.io launched on Goerli Testne",
    date: "21.07.2022",
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
