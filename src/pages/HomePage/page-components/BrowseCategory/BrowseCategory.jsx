import React from 'react'

import { Container } from '../../../../globalStyles'
import {
  BrowseSec,
  BrowseTitle,
  CategoryWrapper,
  CategoryContainer,
  CategoryImage,
  BlackLayer,
  CategoryText,
} from './BrowseCategory.styles'

import { category01, category02, category03 } from './imports'

const BrowseCategory = () => {
  return (
    <BrowseSec>
      <Container>
        <BrowseTitle>Browse by top category</BrowseTitle>
        <CategoryWrapper>
          <CategoryContainer>
            <CategoryImage src={category01} />
            <CategoryText>Girls</CategoryText>
            <BlackLayer />
          </CategoryContainer>
          <CategoryContainer>
            <CategoryImage src={category02} />
            <CategoryText>Sport</CategoryText>
            <BlackLayer />
          </CategoryContainer>
          <CategoryContainer>
            <CategoryImage src={category03} />
            <CategoryText>Furniture</CategoryText>
            <BlackLayer />
          </CategoryContainer>
        </CategoryWrapper>
      </Container>
    </BrowseSec>
  )
}

export default BrowseCategory
