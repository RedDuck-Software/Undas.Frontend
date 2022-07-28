import React from "react";

import { PageGridWrap } from "./BlogPageGrid.styles";

import { BlogPost } from "../../types";
import BlogCard from "../BlogCard/BlogCard";

interface BlogPageGridProps {
  posts: BlogPost[];
}
const BlogPageGrid: React.FC<BlogPageGridProps> = ({ posts }) => {
  return (
    <PageGridWrap>
      {posts.map((post: BlogPost) => {
        return (
          <BlogCard
            key={`${post.image}-${post.date}`}
            image={post.image}
            titleText={post.titleText}
            date={post.date}
            adress={post.adress}
          />
        );
      })}
    </PageGridWrap>
  );
};

export default BlogPageGrid;
