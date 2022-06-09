import React from "react";

import { Wrap } from "./Inspiration.styles";

import BlogPageGrid from "../BlogPageGrid/BlogPageGrid";
import { Text, BlogTitle } from "../../Blog.styles";
import { BlogPost } from "../../types";
import {
  SmImg1,
  SmImg2,
  SmImg3,
  WebsiteTips1,
  WebsiteTips2,
  WebsiteTips3,
  Inspiration1,
  Inspiration2,
} from "../../imports";

const InspirationPosts: BlogPost[] = [
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
    image: WebsiteTips2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "22.05.2022",
  },
  {
    image: WebsiteTips1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.05.2022",
  },
  {
    image: SmImg2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "06.05.2022",
  },
  {
    image: WebsiteTips3,
    titleText: "Lorem, amet consectetur adipisicing elit.",
    date: "19.04.2022",
  },
  {
    image: SmImg1,
    titleText: "Lorem ipsum sit, amet consectetur adipisicing elit.",
    date: "16.04.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem ipsum dolor sit, amet  adipisicing elit.",
    date: "08.03.2022",
  },
  {
    image: WebsiteTips3,
    titleText: "Lorem ipsum dolor sit, consectetur adipisicing elit.",
    date: "24.02.2022",
  },
  {
    image: SmImg1,
    titleText: "Lorem, amet consectetur adipisicing elit?",
    date: "20.01.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "31.12.2021",
  },
];

const Inspiration: React.FC = () => {
  return (
    <Wrap>
      <BlogTitle>Inspiration</BlogTitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        cupiditate impedit tempora eos. Quam voluptates recusandae asperiores
        nesciunt, odit porro atque impedit soluta doloribus!
      </Text>
      <BlogPageGrid posts={InspirationPosts} />
    </Wrap>
  );
};

export default Inspiration;
