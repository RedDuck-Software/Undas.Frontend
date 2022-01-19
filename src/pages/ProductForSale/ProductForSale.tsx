import { useParams } from 'react-router-dom';

import {
  ProductDescription,
  SaleSection,
  PriceHistory,
  Listing,
  Offers,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from './page-components';

import { getId } from '../../utils/getId';

import { Background } from '../../globalStyles';

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductForSaleSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
  ItemInformation,
  ProductSubtitle,
  ProductTitle,
} from './ProductForSale.styles';
import Image from '../../images/card-item.png';

const ProductForSale = () => {
  let { id: pageId } = useParams();

  const productId = getId(+pageId! + 1);

  return (
    <Background>
      <ProductForSaleSec>
        <ProductContainer>
          <LeftSide>
            <CardImageContainer>
              <ItemInformation mobile>
                <ProductSubtitle>Returne by Borya Borya</ProductSubtitle>
                <ProductTitle>Returne #{productId}</ProductTitle>
              </ItemInformation>
              <CardImage src={Image} />
              <BookmarkButton>10</BookmarkButton>
            </CardImageContainer>
            <ProductDescription />
          </LeftSide>
          <RightSide>
            <ItemInformation>
              <ProductSubtitle>Returne by Borya Borya</ProductSubtitle>
              <ProductTitle>Returne #{productId}</ProductTitle>
            </ItemInformation>
            <SaleSection itemId={pageId!} />
            <PriceHistory />
            <Listing />
            <Offers />
            <Rent />
            <Staking />
          </RightSide>
        </ProductContainer>
        <ProductContainerCenter>
          <ItemActivity />
          <MoreFromCollection />
        </ProductContainerCenter>
      </ProductForSaleSec>
    </Background>
  );
};

export default ProductForSale;
