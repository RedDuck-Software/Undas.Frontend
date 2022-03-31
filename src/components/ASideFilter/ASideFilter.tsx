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
    Arrow,
    AccordionArrow
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
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <PriceIco />
                    <ElementText>Price</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <CategoriesIco/>
                    <ElementText>Categories</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <CollectionsIco />
                    <ElementText>Collections</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <HolderElement>
                    <ChainsIco />
                    <ElementText>Chains</ElementText>
                    <AccordionArrow />
                </HolderElement>
            </Holder>
        </ASideWrap>
    )
}

export default ASideFilter