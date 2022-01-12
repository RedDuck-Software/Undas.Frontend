import {
  CardItemContainer,
  CardItemImage,
  TransparentLayer,
  InfoContainer,
  CardTitle,
  CardNumber,
  CardETH,
} from './CardItem.styles';

interface CardItemProps {
  image?: string;
  id?: string;
  price?: string;
}

const CardItem: React.FC<CardItemProps> = ({ image, id, price }) => {
  return (
    <CardItemContainer>
      <CardItemImage src={image} />
      <TransparentLayer />
      <InfoContainer>
        <CardTitle>Returne by Borya Borya</CardTitle>
        <CardNumber>Returne {id}</CardNumber>
        <CardETH>Last {price}</CardETH>
      </InfoContainer>
    </CardItemContainer>
  );
};

export default CardItem;
