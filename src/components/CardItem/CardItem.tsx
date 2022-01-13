import {
  CardItemContainer,
  CardItemImage,
  TransparentLayer,
  InfoContainer,
  CardTitle,
  CardNumber,
  CardPrice,
  CardETH,
} from './CardItem.styles';

interface CardItemProps {
  image?: string;
  id?: string;
  price?: number;
}

const CardItem: React.FC<CardItemProps> = ({ image, id, price }) => {
  return (
    <CardItemContainer>
      <CardItemImage src={image} />
      <TransparentLayer />
      <InfoContainer>
        <CardTitle>Returne by Borya Borya</CardTitle>
        <CardNumber>Returne #{id}</CardNumber>
        <CardETH>
          Last <CardPrice>{price}</CardPrice>
        </CardETH>
      </InfoContainer>
    </CardItemContainer>
  );
};

export default CardItem;
