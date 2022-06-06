import React from "react";

import { Wrap } from "./News.styles";

import BlogPageGrid from "../BlogPageGrid/BlogPageGrid";

const News: React.FC = () => {
  return (
    <Wrap>
      News
      <BlogPageGrid />
    </Wrap>
  );
};

export default News;
