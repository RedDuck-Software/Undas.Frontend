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
    PriceElement,
    ApplyBtn,
    PriceVariations
} from './ASideFilter.styles'


const ASideFilter:FC<{marginTop?: string}> = ({marginTop}) => {
    const [active, setActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState<any>({
        status: false,
        price: false,
    })
    const [priceMenu, setPriceMenu] = useState<boolean>(false)
    const [priceCurrency, setPriceCurrency] = useState([
        {
            currency: 'usd',
            text: 'United States Dollar (USD)',
            ico: <UsdIco/>,
            selected: false
        },
        {
            currency: 'eth',
            text: 'Ether (ETH)',
            ico: <EthIco/>,
            selected: true
        }
    ])

    return (
        <ASideWrap className={active && 'active' || ''}>
            <Holder marginTop={marginTop}>
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
                    <AccordionArrow className={activeMenu.price && 'active-price' || ''}/>
                </HolderElement>
                <AccordionMenu mh="178px" className={activeMenu.price && 'active-price' || ''}>
                    <AccordionElement padd="15px 15px 20px 15px" direction="column">
                        <PriceElement
                            className={priceMenu && 'price-menu-active' || ''}
                            onClick={() => {
                                !priceMenu ? setPriceMenu(true) : setPriceMenu(false)
                            }}>
                            <UsdIco />
                            <span>United States Dollar (USD)</span>
                            <AccordionArrow className={priceMenu && 'price-menu-active' || ''}/>
                        </PriceElement>
                        <PriceSelect className={priceMenu && 'price-menu-active' || ''}>
                            <PriceVariations>
                                <UsdIco />
                                <span>United States Dollar (USD)</span>
                            </PriceVariations>
                            <PriceVariations>
                                <EthIco />
                                <span>Ether (ETH)</span>
                            </PriceVariations>
                        </PriceSelect>
                        <ApplyBtn>Apply</ApplyBtn>
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