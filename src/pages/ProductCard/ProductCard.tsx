import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ProductDescription,
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from './page-components';

import { Background, VioletText } from '../../globalStyles';

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
} from './ProductCard.styles';

import Image from '../../images/card-item.png';

const ProductCard = () => {
  let { id: pageId } = useParams();

  const [showPriceHistory, setShowPriceHistory] = useState(false);

  return (
    <Background>
      <ProductCardSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <CardImage src={Image} />
              <BookmarkButton>10</BookmarkButton>
            </CardImageContainer>
            <ProductDescription />
          </LeftSide>
          <RightSide>
            <ProductPrice id={+pageId! - 1} />
            {showPriceHistory ? <PriceHistory /> : <></>}
            <Rent id={+pageId! - 1} />
            <Staking />
          </RightSide>
        </ProductContainer>
        <ProductContainerCenter>
          <ItemActivity />
          <MoreFromCollection />
        </ProductContainerCenter>
      </ProductCardSec>
    </Background>
  );
};

export default ProductCard;
