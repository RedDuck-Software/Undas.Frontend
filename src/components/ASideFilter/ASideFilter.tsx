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
    AccordionArrow,
    AccordionMenu,
    AccordionElement
} from './ASideFilter.styles'


const ASideFilter:FC = () => {
    const [active, setActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState<any>({
        status: false,
        price: false,
    })
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
                <HolderElement onClick={() => {
                    if (!activeMenu.status) {
                        setActiveMenu({status: true})
                    }
                    else setActiveMenu({status: false})
                    console.log('clicked', activeMenu)
                }
                }>
                    <StatusIco />
                    <ElementText>Status</ElementText>
                    <AccordionArrow className={activeMenu.status && 'active-status' || ''}/>
                </HolderElement>
                <AccordionMenu className={activeMenu.status && 'active-status' || ''}>
                    <AccordionElement>
                        <span>New</span>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Staking</span>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Rent</span>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Has Offers</span>
                    </AccordionElement>
                </AccordionMenu>
                <HolderElement>
                    <PriceIco />
                    <ElementText>Price</ElementText>
                    <AccordionArrow />
                </HolderElement>
                {/* MVP
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
                </HolderElement>*/}
            </Holder>
        </ASideWrap>
    )
}

export default ASideFilter