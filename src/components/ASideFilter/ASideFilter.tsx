import React, {FC, useState} from 'react'
import {
    FilterIco,
    StatusIco,
    PriceIco,
    CategoriesIco,
    CollectionsIco,
    ChainsIco,
    UsdIco,
    EthIco
} from './imports'

import {
    ASideWrap,
    Holder,
    HolderElement,
    ElementText,
    Arrow,
    AccordionArrow,
    AccordionMenu,
    AccordionElement,
    Switch,
    InputSwitch,
    SliderRound,
    PriceSelect,
    PriceElement
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
                    if (active) {
                        setActiveMenu( {
                            status: false,
                            price: false,
                        })
                        setActive(false)
                    }
                }
                }>
                    <FilterIco/>
                    <ElementText>Filter</ElementText>
                    <Arrow />
                </HolderElement>
                <HolderElement onClick={() => {
                    if (!activeMenu.status) {
                        setActiveMenu({status: true})
                        !active && setActive(true)
                    }
                    else setActiveMenu({status: false})
                }
                }>
                    <StatusIco />
                    <ElementText>Status</ElementText>
                    <AccordionArrow className={activeMenu.status && 'active-status' || ''}/>
                </HolderElement>
                <AccordionMenu mh="146px" className={activeMenu.status && 'active-status' || ''}>
                    <AccordionElement>
                        <span>New</span>
                        <Switch>
                            <InputSwitch type="checkbox" />
                            <SliderRound />
                        </Switch>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Staking</span>
                        <Switch>
                            <InputSwitch type="checkbox" />
                            <SliderRound />
                        </Switch>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Rent</span>
                        <Switch>
                            <InputSwitch type="checkbox" />
                            <SliderRound />
                        </Switch>
                    </AccordionElement>
                    <AccordionElement>
                        <span>Has Offers</span>
                        <Switch>
                            <InputSwitch type="checkbox" />
                            <SliderRound />
                        </Switch>
                    </AccordionElement>
                </AccordionMenu>
                <HolderElement onClick={() => {
                    if (!activeMenu.price) {
                        setActiveMenu({price: true})
                        !active && setActive(true)
                    }
                    else setActiveMenu({price: false})
                }}>
                    <PriceIco />
                    <ElementText>Price</ElementText>
                    <AccordionArrow />
                </HolderElement>
                <AccordionMenu className={activeMenu.price && 'active-price' || ''}>
                    <AccordionElement padd="0">
                        <PriceElement>
                            <UsdIco />
                                <span>United States Dollar (USD)</span>
                            <Arrow />
                        </PriceElement>
                    </AccordionElement>
                </AccordionMenu>
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