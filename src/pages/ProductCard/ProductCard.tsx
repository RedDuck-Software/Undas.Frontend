import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../utils/Context';

import { isBuyableFunction } from '../../utils/isBuyable';

import {
  ProductDescription,
  ProductPrice,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from './page-components';

import { Background } from '../../globalStyles';

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
} from './ProductCard.styles';

import Image from '../../images/card-item.png';

const ProductCard = () => {
  const { connector } = useContext(Context);

  let { id: pageId } = useParams();

  const [showPriceHistory] = useState(false);

  useEffect(() => {
    if (!connector) {
      return console.log('loading');
    }

    console.log(isBuyableFunction(Number(pageId), connector));
  }, []);

  return (
    <Background>
      <ProductCardSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <CardImage src={Image} />
            </CardImageContainer>
            <ProductDescription />
          </LeftSide>
          <RightSide>
            <ProductPrice id={Number(pageId!)} />
            {showPriceHistory ? <PriceHistory /> : <></>}
            <Rent id={Number(pageId!)} />
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
