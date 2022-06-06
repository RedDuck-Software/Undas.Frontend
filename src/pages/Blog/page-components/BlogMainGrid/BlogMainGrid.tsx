import React from "react";

import { Wrap } from "./BlogMainGrid.styles";

import BlogCard from "../BlogCard/BlogCard";
import BlogBigCard from "../BlogCard/BlogBigCard";

import{
    SmImg1,
    SmImg2,
    SmImg3,
} from "../../imports";

const BlogMainGrid: React.FC = () => {
  return <Wrap>
      <BlogBigCard />
      <BlogCard image={SmImg1} titleText={"Beginners Guide: What is a Website Domain Name?"} date={"06.06.2022"}/>
      <BlogCard image={SmImg2} titleText={"How to Find the Best Domain for Your Website"} date={"06.06.2022"}/>
      <BlogCard image={SmImg3} titleText={"9 Best Places to Upload Your Music Online for Free"} date={"05.06.2022"}/>
  </Wrap>;
};

export default BlogMainGrid;