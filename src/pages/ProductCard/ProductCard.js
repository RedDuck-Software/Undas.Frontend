import React from 'react'

import {
  ProductDescription,
  ProductPrice,
  PriceHistory,
  Listing,
  Offers,
  Rent,
  Staking,
  ItemActivity,
  MoreFromCollection,
} from './page-components'

import { Background, VioletText } from '../../globalStyles'

import {
  LeftSide,
  CardImageContainer,
  CardImage,
  BookmarkButton,
  ProductCardSec,
  ProductContainer,
  ProductContainerCenter,
  RightSide,
  ProductSubtitle,
  ProductTitle,
  GenInformationTitle,
  ViewsContainer,
  LikesContainer,
} from './ProductCard.styles'

import Image from '../../images/card-item.png'

const ProductCard = () => {
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
            <ProductSubtitle>Returne by Borya Borya</ProductSubtitle>
            <ProductTitle>Returne #274</ProductTitle>
            <GenInformationTitle>
              Owned by <VioletText>Hype-eth</VioletText>
              <ViewsContainer>91 views</ViewsContainer>
              <LikesContainer>10 favorites</LikesContainer>
            </GenInformationTitle>
            <ProductPrice />
            <PriceHistory />
            <Listing />
            <Offers />
            <Rent />
            {/* <Staking /> */}
          </RightSide>
        </ProductContainer>
        <ProductContainerCenter>
          <ItemActivity />
          <MoreFromCollection />
        </ProductContainerCenter>
      </ProductCardSec>
    </Background>
  )
}

export default ProductCard
