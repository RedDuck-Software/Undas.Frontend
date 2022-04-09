import React, {FC, useState} from 'react'

//Assets
import {
    OffersIco
} from '../../imports'

//Styles
import {
    AccordionWrap,
    AccordionArrow,
} from "./Accordion.styles";

import {
    TopBar,
} from "../../NFTPage.styles";

import {Wrapper} from "../../../CategoriesPage/Categories.styles";

//Components
import OffersAccordion from "./OffersAccordion";

const Accordion: FC = () => {

    const [open, setOpen] = useState('')

    return (
        <AccordionWrap>
            <TopBar
                justifyContent="space-between"
                cursor="pointer"
                onClick={() => {
                    open === '' ? setOpen('active') : setOpen('')
                }}
            >
                <Wrapper disp="flex" gap="5px">
                    <OffersIco />
                    Offers
                </Wrapper>
                <AccordionArrow className={open && 'active'}/>
            </TopBar>
            <OffersAccordion />
        </AccordionWrap>
    )
}

export default Accordion