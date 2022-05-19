import React from 'react';

import {
  MetaversesImg,
  SportImg,
  CelebrityImg,
  RwaImg,
  ArtworkImg,
} from './imports';
import {
  RecommendedContainer,
  Title,
  ViewAllBtn,
  CategoriesWrap,
  CategoryWrap,
  TitleWrap,
  Name,
  Image,
} from './Recommended.styles';

const Recommended: React.FC = () => {
  return (
    <RecommendedContainer>
      <TitleWrap>
        <Title>Recommended Categories</Title>
        <ViewAllBtn>View all</ViewAllBtn>
      </TitleWrap>
      <CategoriesWrap>
        <CategoryWrap to="/categories" gridArea="1 / 1 / 4 / 3">
          <Name>New</Name>
          <Image src={MetaversesImg} alt="category-img" />
        </CategoryWrap>
        <CategoryWrap to="/categories" gridArea="1 / 3 / 3 / 5">
          <Name>Sport</Name>
          <Image src={SportImg} alt="category-img" />
        </CategoryWrap>
        <CategoryWrap to="/categories" gridArea="3 / 3 / 4 / 5">
          <Name>Celebrity</Name>
          <Image src={CelebrityImg} alt="category-img" />
        </CategoryWrap>
        <CategoryWrap to="/categories" gridArea="1 / 5 / 2 / 7">
          <Name>rwaNFT</Name>
          <Image src={RwaImg} alt="category-img" />
        </CategoryWrap>
        <CategoryWrap to="/categories" gridArea="2 / 5 / 4 / 7">
          <Name>Artwork</Name>
          <Image src={ArtworkImg} alt="category-img" />
        </CategoryWrap>
      </CategoriesWrap>
    </RecommendedContainer>
  );
};

export default Recommended;
