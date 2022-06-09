import React from "react";

import { Wrap } from "./BusinessTips.styles";

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

const BusinessTipsPosts: BlogPost[] = [
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
    date: "05.05.2022",
  },
  {
    image: SmImg1,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "03.05.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem ipsum adipisicing elit.",
    date: "01.05.2022",
  },
  {
    image: SmImg2,
    titleText: "Lorem adipisicing elit.",
    date: "16.04.2022",
  },
  {
    image: Inspiration2,
    titleText: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    date: "08.03.2022",
  },
  {
    image: SmImg3,
    titleText: "Lorem ipsum amet consectetur adipisicing elit.",
    date: "24.02.2022",
  },
];

const BusinessTips: React.FC = () => {
  return (
    <Wrap>
      <BlogTitle>Business Tips</BlogTitle>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        repudiandae quidem sit earum amet veritatis, voluptates vel provident
        tenetur qui itaque nobis omnis! Hic accusantium odit quasi sed quia
        praesentium?
      </Text>
      <BlogPageGrid posts={BusinessTipsPosts} />
    </Wrap>
  );
};

export default BusinessTips;
