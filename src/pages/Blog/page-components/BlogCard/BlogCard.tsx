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
  adress: string;
  date: string | number;
}

const BlogCard: React.FC<BlogCard> = ({ image, titleText, date, adress }) => {
  return (
    <CardWrap to={adress}>
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
