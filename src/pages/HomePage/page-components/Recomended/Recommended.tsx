import React, {FC} from 'react'

import {
    MetaversesImg,
    SportImg,
    CelebrityImg,
    RwaImg,
    ArtworkImg,
} from './imports'

import {
    RecommendedContainer,
    Title,
    ViewAllBtn,
    CategoriesWrap,
    CategoryWrap,
    TitleWrap,
    Name,
    Image
} from "./Recommended.styles";
import {Link} from "react-router-dom";

const Recommended:FC = () => {
    return (
        <RecommendedContainer>
            <TitleWrap>
                <Title>
                    Recommended Categories
                </Title>
                <ViewAllBtn>View all</ViewAllBtn>
            </TitleWrap>
            <CategoriesWrap>
                <CategoryWrap gridArea="1 / 1 / 4 / 3">
                    <Name>Metaverses</Name>
                    <Image src={MetaversesImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="1 / 3 / 3 / 5">
                    <Name>Sport</Name>
                    <Image src={SportImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="3 / 3 / 4 / 5">
                    <Name>Celebrity</Name>
                    <Image src={CelebrityImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="1 / 5 / 2 / 7">
                    <Link to="/categories">
                        <Name>rwaNFT</Name>
                        <Image src={RwaImg} alt="category-img" />
                    </Link>
                </CategoryWrap>
                <CategoryWrap gridArea="2 / 5 / 4 / 7" >
                    <Name>Artwork</Name>
                    <Image src={ArtworkImg} alt="category-img" />
                </CategoryWrap>
            </CategoriesWrap>
        </RecommendedContainer>
    )
}

export default Recommended