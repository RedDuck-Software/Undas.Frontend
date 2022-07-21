import React from "react";

import {
  BigCardWrap,
  BigImageWrap,
  BigImage,
  BigCardBody,
  BigCardTitle,
  BigCardText,
  BigCardTextWrap,
  CardLink,
  CardFooter,
  Date,
  Inner,
} from "./BlogCard.styles";

import { ArticleBig } from "../../imports";

const BlogBigCard: React.FC = () => {
  return (
    <BigCardWrap to="/article">
      <BigImageWrap>
        <Inner />
        <BigImage src={ArticleBig} alt="card-image" />
      </BigImageWrap>
      <BigCardBody>
        <BigCardTitle>Welcome to UNDAS: Project History</BigCardTitle>
        <BigCardTextWrap>
          <BigCardText>
            Hello to all readers of the UNDAS blog! We would like to open this
            blog with a story about the project itself, how it was invented and
            how it was brought to life.
          </BigCardText>
        </BigCardTextWrap>
        <CardFooter>
          <Date>18.07.2022</Date>
          <CardLink href="article">See more...</CardLink>
        </CardFooter>
      </BigCardBody>
    </BigCardWrap>
  );
};

export default BlogBigCard;
