import React from "react";

import { Text, BlogTitle } from "../../Blog.styles";
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
import { BlogPost } from "../../types";
import BlogPageGrid from "../BlogPageGrid/BlogPageGrid";

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
    <>
      <BlogTitle>Website Tips</BlogTitle>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        impedit rerum culpa id ea rem dignissimos.
      </Text>
      <BlogPageGrid posts={WebsiteTipsPosts} />
    </>
  );
};

export default WebsiteTips;
