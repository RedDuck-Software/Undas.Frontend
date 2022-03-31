import React, {FC, useState} from 'react'
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
    HolderElement,
    ElementText,
    Arrow
} from './ASideFilter.styles'


const ASideFilter:FC = () => {
    const [active, setActive] = useState(false)
    return (
        <ASideWrap className={active && 'active' || ''}>
            <Holder>
                <HolderElement onClick={() => {
                    !active && setActive(true)
                    active && setActive(false)
                }
                }>
                    <FilterIco/>
                    <ElementText>Filter</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement>
                    <StatusIco />
                    <ElementText>Status</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement>
                    <PriceIco />
                    <ElementText>Price</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement>
                    <CategoriesIco/>
                    <ElementText>Categories</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement>
                    <CollectionsIco />
                    <ElementText>Collections</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement>
                    <ChainsIco />
                    <ElementText>Chains</ElementText>
                    <Arrow />
                </HolderElement>
            </Holder>
        </ASideWrap>
    )
}

export default ASideFilter