import React from "react";

import { Wrap } from "./BlogPageGrid.styles";

import BlogCard from "../BlogCard/BlogCard";

const BlogPageGrid: React.FC = () => {
  return <Wrap>
      <BlogCard uri={"URI"} name={"item.name"}/>
  </Wrap>;
};

export default BlogPageGrid;