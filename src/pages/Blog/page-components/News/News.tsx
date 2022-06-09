import React from "react";

import { Wrap } from "./News.styles";
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

const NewsPosts: BlogPost[] = [
  {
    image: WebsiteTips3,
    titleText: "Lorem ipsum dolor, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: Inspiration2,
    titleText: "Lorem ipsum dolor sit, adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips2,
    titleText: "Lorem adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: Inspiration1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg1,
    titleText: "Lorem  sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem id, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
];

const News: React.FC = () => {
  return (
    <Wrap>
      <BlogTitle>News</BlogTitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
        perspiciatis modi fugit pariatur ex nulla ipsam, tempora deserunt
        excepturi accusamus!
      </Text>
      <BlogPageGrid posts={NewsPosts} />
    </Wrap>
  );
};

export default News;
