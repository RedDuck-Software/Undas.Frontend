import React from 'react'

import {
  CardItemContainer,
  CardItemImage,
  TransparentLayer,
  InfoContainer,
  CardTitle,
  CardNumber,
  CardETH,
} from './CardItem.styles'

const CardItem = ({ image }) => {
  return (
    <CardItemContainer>
      <CardItemImage src={image} />
      <InfoContainer>
        <CardTitle>Returne by Borya Borya</CardTitle>
        <CardNumber>Returne #204</CardNumber>
        <CardETH>Last 3</CardETH>
      </InfoContainer>
      <TransparentLayer />
    </CardItemContainer>
  )
}

export default CardItem
