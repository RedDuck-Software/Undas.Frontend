import React from "react";

import { Wrap } from "./BlogPageGrid.styles";

import BlogCard from "../BlogCard/BlogCard";

import{
    SmImg1,
    SmImg2,
    SmImg3,
} from "../../imports";

const BlogPageGrid: React.FC = () => {
  return <Wrap>
      <BlogCard image={SmImg1} titleText={"Beginners Guide: What is a Website Domain Name?"}/>
      <BlogCard image={SmImg2} titleText={"Beginners Guide: What is a Website Domain Name?"}/>
      <BlogCard image={SmImg3} titleText={"Beginners Guide: What is a Website Domain Name?"}/>
  </Wrap>;
};

export default BlogPageGrid;