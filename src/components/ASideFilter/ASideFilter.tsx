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