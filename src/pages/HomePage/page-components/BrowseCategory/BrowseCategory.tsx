import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/explore/girls">
            <CategoryContainer>
              <CategoryImage src={category01} />
              <CategoryText>Girls</CategoryText>
              <BlackLayer />
            </CategoryContainer>
          </Link>
          <Link to="/explore/sport">
            <CategoryContainer>
              <CategoryImage src={category02} />
              <CategoryText>Sport</CategoryText>
              <BlackLayer />
            </CategoryContainer>
          </Link>
          <Link to="/explore/furniture">
            <CategoryContainer>
              <CategoryImage src={category03} />
              <CategoryText>Furniture</CategoryText>
              <BlackLayer />
            </CategoryContainer>
          </Link>
        </CategoryWrapper>
      </Container>
    </BrowseSec>
  )
}

export default BrowseCategory
