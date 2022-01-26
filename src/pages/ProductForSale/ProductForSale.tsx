import { useParams } from "react-router-dom";

import {
  SaleSection,
  PriceHistory,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from "./page-components";

import { getId } from "../../utils/getId";

import { Background } from "../../globalStyles";

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
} from "./ProductForSale.styles";
import Image from "../../images/card-item.png";

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
                <ProductTitle>Returne #{productId}</ProductTitle>
              </ItemInformation>
              <CardImage src={Image} />
              <BookmarkButton>10</BookmarkButton>
            </CardImageContainer>
          </LeftSide>
          <RightSide>
            <ItemInformation>
              <ProductTitle>Returne #{productId}</ProductTitle>
            </ItemInformation>
            <SaleSection itemId={pageId!} />
            <PriceHistory />
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
