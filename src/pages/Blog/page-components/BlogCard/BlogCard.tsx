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
  Inner,
} from "./BlogCard.styles";

interface BlogCard {
  image: string;
  titleText: string;
  date: string | number;
}

const BlogCard: React.FC<BlogCard> = ({ image, titleText, date }) => {
  return (
    <CardWrap to="/article">
      <ImageWrap>
        <Inner />
        <Image src={image} alt="article-image" />
      </ImageWrap>
      <CardBody>
        <CardTitle>{titleText}</CardTitle>
        <CardFooter>
          <Date>{date}</Date>
          <CardLink href="article">See more...</CardLink>
        </CardFooter>
      </CardBody>
    </CardWrap>
  );
};

export default BlogCard;
