import React from "react";

import { Wrap } from "./WebsiteTips.styles";

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

const WebsiteTipsPosts: BlogPost[] = [
  {
    image: SmImg1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: WebsiteTips3,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: Inspiration1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
  {
    image: Inspiration2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "09.06.2022",
  },
];

const WebsiteTips: React.FC = () => {
  return (
    <Wrap>
      <BlogTitle>Website Tips</BlogTitle>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        impedit rerum culpa id ea rem dignissimos.
      </Text>
      <BlogPageGrid posts={WebsiteTipsPosts} />
    </Wrap>
  );
};

export default WebsiteTips;
