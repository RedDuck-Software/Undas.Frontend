import React, {FC} from 'react'
import {Banner} from "../CategoriesPage/Categories.styles";
import {AllNFTContainer} from "../AllNFTs/AllNFTs.styles";
import {Wrapper} from "../CategoriesPage/Categories.styles";
//Components
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
//Assets
import {
    CollectionBanner,
    PurpleEthIco
} from './imports'
import ASideFilter from "../../components/ASideFilter/ASideFilter";

import {
    Info,
    InfoElement
} from './CollectionPage.styles'
const CollectionPage: FC = () => {
    return (
        <>
            <div>
                <Banner>
                    <img src={CollectionBanner} alt="CollectionBanner"/>
                </Banner>
                <AllNFTContainer>
                    <ASideFilter />
                    <Wrapper>
                        <CollectionCard />
                        <Info>
                            <InfoElement>
                                <span>
                                    Items
                                </span>
                            </InfoElement>
                        </Info>
                    </Wrapper>
                </AllNFTContainer>
            </div>
        </>
    )
}

export default CollectionPage