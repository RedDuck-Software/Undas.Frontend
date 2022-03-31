import React, {FC} from 'react'
import {
    FilterIco,
    StatusIco,
    PriceIco,
    CategoriesIco,
    CollectionsIco,
    ChainsIco,
} from './imports'

import {
    ASideWrap,
    Holder,
    HolderElement
} from './ASideFilter.styles'


const ASideFilter = () => {
    return (
        <ASideWrap>
            <Holder>
                <HolderElement>
                    <FilterIco />
                </HolderElement>
                <HolderElement>
                    <StatusIco />
                </HolderElement>
                <HolderElement>
                    <PriceIco />
                </HolderElement>
                <HolderElement>
                    <CategoriesIco/>
                </HolderElement>
                <HolderElement>
                    <CollectionsIco />
                </HolderElement>
                <HolderElement>
                    <ChainsIco />
                </HolderElement>
            </Holder>
        </ASideWrap>
    )
}

export default ASideFilter