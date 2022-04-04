import React, {FC} from 'react'
import {Banner} from "../CategoriesPage/Categories.styles";

//Components
import CollectionCard from "./page-components/CollectionCard/CollectionCard";
//Assets
import {
    CollectionBanner
} from './imports'
const CollectionPage: FC = () => {
    return (
        <>
            <Banner>
                <img src={CollectionBanner} alt="CollectionBanner"/>
            </Banner>
            <CollectionCard />
        </>
    )
}

export default CollectionPage