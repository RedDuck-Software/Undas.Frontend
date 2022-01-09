import React from 'react'

import { VioletText, Button } from '../../../../globalStyles'

import {
  DescriptionTitle,
  DescriptionContainer,
  DescriptionContainerTitle,
  DescriptionContainerText,
  TextAndButtonContainer,
} from './ProductDescription.styles'

const ProductDescription = () => {
  return (
    <>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionContainer>
        <DescriptionContainerTitle>
          Created by <VioletText>aaronpenne-ab</VioletText>
        </DescriptionContainerTitle>
        <DescriptionContainerText>
          "Return" is a meditation on returning inward, cyclical change, and the
          beauty of iteration. The composition of each piece slowly loops,
          providing a new experience for the viewer over time. Created by Aaron
          Penne
        </DescriptionContainerText>
        <TextAndButtonContainer>
          <DescriptionContainerText>
            See more information about Aeron Penne
          </DescriptionContainerText>
          <Button violet>See more</Button>
        </TextAndButtonContainer>
      </DescriptionContainer>
    </>
  )
}

export default ProductDescription
