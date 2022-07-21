import React from "react";

import { BlogWrap } from "./Blog.styles";
import {
  WebsiteTips1,
  WebsiteTips2,
  WebsiteTips3,
  Inspiration1,
  Inspiration2,
  Inspiration3,
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
    image: WebsiteTips1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips2,
    titleText: "Lorem ipsum dolor sit, amet consectetur",
    date: "22.05.2022",
  },
  {
    image: WebsiteTips3,
    titleText: "Lorem ipsum amet consectetur adipisicing elit.",
    date: "09.05.2022",
  },
  {
    image: Inspiration1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "10.06.2022",
  },
  {
    image: Inspiration2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: Inspiration3,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
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
