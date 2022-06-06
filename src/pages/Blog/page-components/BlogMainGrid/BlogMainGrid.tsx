import React from "react";

import { Wrap } from "./BlogMainGrid.styles";

import BlogCard from "../BlogCard/BlogCard";
import BlogBigCard from "../BlogCard/BlogBigCard";

const BlogMainGrid: React.FC = () => {
  return (
    <Wrap>
      <BlogBigCard />
      <BlogCard uri={"URI"} name={"item.name"} />
    </Wrap>
  );
};

export default BlogMainGrid;
