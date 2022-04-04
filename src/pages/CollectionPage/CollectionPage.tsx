import React, {FC} from 'react'
import {Banner} from "../CategoriesPage/Categories.styles";
import {AllNFTContainer} from "../AllNFTs/AllNFTs.styles";
import {Wrapper} from "../CategoriesPage/Categories.styles";
//Components
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
//Assets
import {
    CollectionBanner,
    PurpleEthIco,
    AddToFavIco,
} from './imports'
import ASideFilter from "../../components/ASideFilter/ASideFilter";

import {
    Info,
    InfoElement,
    Amount,
    MakeComplaint,
    AddToFav,
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
                    <Wrapper disp="flex" gap="15px">
                        <CollectionCard />
                        <Wrapper disp="flex" flexWrap="wrap" justifyContent="space-between">
                            <Info>
                                <InfoElement>
                                    <span>
                                        Items
                                    </span>
                                    <Amount>14000</Amount>
                                </InfoElement>
                                <InfoElement>
                                    <span>
                                        Owners
                                    </span>
                                    <Amount>6400</Amount>
                                </InfoElement>
                                <InfoElement>
                                    <span>
                                        Floor Price
                                    </span>
                                    <Wrapper disp="flex" gap="5px">
                                        <PurpleEthIco />
                                        <Amount>3,2</Amount>
                                    </Wrapper>
                                </InfoElement>
                                <InfoElement>
                                    <span>
                                        Total Vol
                                    </span>
                                    <Wrapper disp="flex" gap="5px">
                                        <PurpleEthIco />
                                        <Amount>13,402,000</Amount>
                                    </Wrapper>
                                </InfoElement>
                            </Info>
                            <MakeComplaint>Make a Complaint</MakeComplaint>
                            <AddToFav>
                                <AddToFavIco />
                                Add to Favorites
                            </AddToFav>
                        </Wrapper>
                    </Wrapper>
                </AllNFTContainer>
            </div>
        </>
    )
}

export default CollectionPage