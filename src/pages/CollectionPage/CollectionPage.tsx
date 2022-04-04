import React, {FC} from 'react'
import {Banner} from "../CategoriesPage/Categories.styles";
import {AllNFTContainer} from "../AllNFTs/AllNFTs.styles";
import {Wrapper} from "../CategoriesPage/Categories.styles";
//Components
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
//Assets
import {
    CollectionBanner
} from './imports'
import ASideFilter from "../../components/ASideFilter/ASideFilter";
const CollectionPage: FC = () => {
    return (
        <>
            <Wrapper>
                <Banner>
                    <img src={CollectionBanner} alt="CollectionBanner"/>
                </Banner>
                <AllNFTContainer>
                    <ASideFilter />
                    <CollectionCard />
                    <Wrapper>
                    </Wrapper>
                </AllNFTContainer>
            </Wrapper>
        </>
    )
}

export default CollectionPage