import React from "react";

import { Wrap, Image, Name } from "./BlogCard.styles";

const BlogCard: React.FC<{ uri: string; name: string }> = ({ uri, name }) => {
  return (
    <Wrap>
      <Image src={uri} alt="nft-image" />
      <Name>{name}</Name>
    </Wrap>
  );
};

export default BlogCard;
