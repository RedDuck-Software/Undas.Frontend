import React from "react";
import BlogMainGrid from "../BlogMainGrid/BlogMainGrid";

import { Wrap } from "./MainBlog.styles";

const MainBlog: React.FC = () => {
  return <Wrap>
      <BlogMainGrid />
  </Wrap>;
};

export default MainBlog;