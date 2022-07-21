import React from "react";

import { Wrap } from "./BlogMainGrid.styles";

import BlogBigCard from "../BlogCard/BlogBigCard";

const BlogMainGrid: React.FC = () => {
  return (
    <Wrap>
      <BlogBigCard />
    </Wrap>
  );
};

export default BlogMainGrid;
