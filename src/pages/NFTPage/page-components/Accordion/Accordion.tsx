import React, {FC, ReactNode, useState} from 'react'

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


interface IAccordion {
    children: ReactNode,
    name: string,
    ico?: any
}

const Accordion: FC<IAccordion> = ({children, name, ico}) => {

    const [open, setOpen] = useState('')

    return (
        <AccordionWrap className={open}>
            <TopBar
                justifyContent="space-between"
                cursor="pointer"
                className={open && 'active'}
                onClick={() => {
                    open === '' ? setOpen('active') : setOpen('')
                }}
            >
                <Wrapper disp="flex" gap="5px">
                    {ico}
                    {name}
                </Wrapper>
                <AccordionArrow className={open && 'active'}/>
            </TopBar>
            {children}
        </AccordionWrap>
    )
}

export default Accordion