import React from "react";

import { BigCardWrap, 
    ImageWrap, 
    BigImage, 
    Name, 
    BigCardBody, 
    BigCardTitle,
    BigCardText,
    BigCardTextWrap,
    CardLink
 } from "./BlogCard.styles";

import{
    BigImg
} from "../../imports";

const BlogBigCard: React.FC = () => {
  return <BigCardWrap>
      <ImageWrap>
        <BigImage src={BigImg} alt="card-image" />
      </ImageWrap>
      <BigCardBody>
        <Name>NEWS</Name>
        <BigCardTitle>Smart Apps: Do Even More with Your Website!</BigCardTitle>
        <BigCardTextWrap>
            <BigCardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi iure dicta, deserunt at unde aperiam, ipsa fuga quis minus eveniet sapiente, esse perferendis facilis. Adipisci laborum vel veritatis fugiat doloribus?</BigCardText>
        </BigCardTextWrap>
        <CardLink href="#">Learn more...</CardLink>
      </BigCardBody>
  </BigCardWrap>;
};

export default BlogBigCard;