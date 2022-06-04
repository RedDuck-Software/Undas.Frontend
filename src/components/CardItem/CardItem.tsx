import React from "react";

import {
  CardItemContainer,
  CardItemImage,
  TransparentLayer,
  InfoContainer,
  CardNumber,
  CardPrice,
  CardETH,
} from "./CardItem.styles";

interface CardItemProps {
  image?: string;
  name?: string;
  price?: number;
}

const CardItem: React.FC<CardItemProps> = ({ image, name, price }) => {
  console.log("ALL NFT")

  return (
    <CardItemContainer>
      <CardItemImage src={image} />
      <TransparentLayer />
      <InfoContainer>
        <CardNumber>{name}</CardNumber>
        <CardETH>
          <CardPrice>{price}</CardPrice>
        </CardETH>
      </InfoContainer>
    </CardItemContainer>
  );
};

export default CardItem;
