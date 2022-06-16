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

import { BigImg } from "../../imports";

const BlogBigCard: React.FC = () => {
  return (
    <BigCardWrap to="/article">
      <BigImageWrap>
        <Inner />
        <BigImage src={BigImg} alt="card-image" />
      </BigImageWrap>
      <BigCardBody>
        <BigCardTitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit!
        </BigCardTitle>
        <BigCardTextWrap>
          <BigCardText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi iure
            dicta, deserunt at unde aperiam, ipsa fuga quis minus eveniet
            sapiente, esse perferendis facilis. Adipisci laborum vel veritatis
            fugiat doloribus...
          </BigCardText>
        </BigCardTextWrap>
        <CardFooter>
          <Date>06.06.2022</Date>
          <CardLink href="article">See more...</CardLink>
        </CardFooter>
      </BigCardBody>
    </BigCardWrap>
  );
};

export default BlogBigCard;
