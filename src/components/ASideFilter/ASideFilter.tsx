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
    AccordionElement,
    Switch,
    InputSwitch,
    SliderRound,
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