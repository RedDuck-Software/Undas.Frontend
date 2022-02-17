import {
  CardItemContainer,
  CardItemImage,
  TransparentLayer,
  InfoContainer,
  CardTitle,
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
