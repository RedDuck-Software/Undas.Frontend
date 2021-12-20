import React from 'react'

import {
  CardContainer,
  CardImage,
  CardContent,
  CardImageIcon,
  CardCollectionName,
  CardCollectionCreator,
  CardDescription,
  PurpleText,
} from './LargeCardItem.styles'

const LargeCardItem = ({ image }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="" />
      <CardContent>
        <CardImageIcon src={image} alt="" />
        <CardCollectionName>Borya Borya</CardCollectionName>
        <CardCollectionCreator>
          by <PurpleText>Borya Borya</PurpleText>
        </CardCollectionCreator>
        <CardDescription>
          If you believe in the future of DeFi, then you believein the future of
          rekt.news. Each auction winner will also be sent a unique NFT which
          can be redeemed for a customised merchandise pack containing the full
          range of limited edition “rekt 365” merchandise.
        </CardDescription>
      </CardContent>
    </CardContainer>
  )
}

export default LargeCardItem
