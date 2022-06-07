import React from "react";

import {
  CardWrap,
  ImageWrap,
  Image,
  CardBody,
  CardTitle,
  CardLink,
  CardFooter,
  Date,
} from "./BlogCard.styles";

interface BlogCard {
  image: string;
  titleText: string;
  date?: string;
}

const BlogCard: React.FC<BlogCard> = ({ image, titleText, date }) => {
  return (
    <CardWrap>
      <ImageWrap>
        <Image src={image} alt="article-image" />
      </ImageWrap>
      <CardBody>
        <CardTitle>{titleText}</CardTitle>
        <CardFooter>
          <Date>{date}</Date>
          <CardLink href="#">See more...</CardLink>
        </CardFooter>
      </CardBody>
    </CardWrap>
  );
};

export default BlogCard;
