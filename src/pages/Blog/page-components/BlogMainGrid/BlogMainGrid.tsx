import React from "react";

import { Wrap } from "./BlogMainGrid.styles";

import { SmImg1, SmImg2, SmImg3 } from "../../imports";
import BlogBigCard from "../BlogCard/BlogBigCard";
import BlogCard from "../BlogCard/BlogCard";

const BlogMainGrid: React.FC = () => {
  return (
    <Wrap>
      <BlogBigCard />
      <BlogCard
        image={SmImg1}
        titleText={"Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={SmImg2}
        titleText={"Lorem ipsum dolor sit, amet adipisicing elit."}
        date={"06.06.2022"}
      />
      <BlogCard
        image={SmImg3}
        titleText={"Lorem, amet consectetur adipisicing elit."}
        date={"05.06.2022"}
      />
    </Wrap>
  );
};

export default BlogMainGrid;
