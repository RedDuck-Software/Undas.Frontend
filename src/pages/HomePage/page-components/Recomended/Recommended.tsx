import React, {FC} from 'react'

import {
    MetaversesImg,
    SportImg,
    CelebrityImg,
    RwaImg,
    ArtworkImg,
} from './imports'

import {
    Title,
    CategoriesWrap,
    CategoryWrap,
    TitleWrap,
    Name,
    Image
} from "./Recommended.styles";

const Recommended:FC = () => {
    return (
        <>
            <TitleWrap>
                <Title>
                    Recommended Categories
                </Title>
            </TitleWrap>
            <CategoriesWrap>
                <CategoryWrap gridArea="1 / 1 / 4 / 4">
                    <Name>Metaverses</Name>
                    <Image src={MetaversesImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="1 / 4 / 3 / 7">
                    <Name>Sport</Name>
                    <Image src={SportImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="3 / 4 / 4 / 7">
                    <Name>Celebrity</Name>
                    <Image src={CelebrityImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="1 / 7 / 2 / 10">
                    <Name>rwaNFT</Name>
                    <Image src={RwaImg} alt="category-img" />
                </CategoryWrap>
                <CategoryWrap gridArea="2 / 7 / 4 / 10" >
                    <Name>Artwork</Name>
                    <Image src={ArtworkImg} alt="category-img" />
                </CategoryWrap>
            </CategoriesWrap>
        </>
    )
}

export default Recommended