import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  BrowseSec,
  BrowseTitle,
  CategoryWrapper,
  CategoryContainer,
  CategoryImage,
  BlackLayer,
  CategoryText,
} from './BrowseCategory.styles';
import { category01, category02, category03 } from './imports';

import { Container, ComingSoonImage } from '../../../../globalStyles';
import comingSoon from '../../../../images/coming-soon.png';

const BrowseCategory: React.FC = () => {
  const [showCategory] = useState(false);

  return (
    <BrowseSec>
      <Container>
        <BrowseTitle>
          Browse by top category <ComingSoonImage src={comingSoon} />
        </BrowseTitle>
        {showCategory ? (
          <CategoryWrapper>
            <Link to="">
              <CategoryContainer>
                <CategoryImage src={category01} />
                <CategoryText>Girls</CategoryText>
                <BlackLayer />
              </CategoryContainer>
            </Link>
            <Link to="">
              <CategoryContainer>
                <CategoryImage src={category02} />
                <CategoryText>Sport</CategoryText>
                <BlackLayer />
              </CategoryContainer>
            </Link>
            <Link to="">
              <CategoryContainer>
                <CategoryImage src={category03} />
                <CategoryText>Furniture</CategoryText>
                <BlackLayer />
              </CategoryContainer>
            </Link>
          </CategoryWrapper>
        ) : (
          <></>
        )}
      </Container>
    </BrowseSec>
  );
};

export default BrowseCategory;
