import React from 'react'

import PlaceBid from '../PlaceBid/PlaceBid'

import { Button } from '../../../../globalStyles'

import {
  ProductPriceContainer,
  SaleEnds,
  CurrentPrice,
  PriceContainer,
  ButtonsContainer,
} from './ProductPrice.styles'

const ProductPrice = () => {
  return (
    <>
      <ProductPriceContainer>
        <SaleEnds>Sale ends April 4, 2022 at 6:02pm EET</SaleEnds>
        <CurrentPrice>
          Current price
          <PriceContainer>
            <h3>2,5</h3> <span>($18 465,32)</span>
          </PriceContainer>
          <ButtonsContainer>
            <Button violet>Buy now</Button>
            <PlaceBid />
          </ButtonsContainer>
        </CurrentPrice>
      </ProductPriceContainer>
    </>
  )
}

export default ProductPrice
