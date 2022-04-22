import React, { FC, ReactNode, useState } from "react";

//Assets
import { OffersIco } from "../../imports";

//Styles
import { AccordionWrap, AccordionArrow, StyledUnd } from "./Accordion.styles";

import { TopBar } from "../../NFTPage.styles";

import { Wrapper } from "../../../CategoriesPage/Categories.styles"; 

interface IAccordion {
    children: ReactNode;
    name: string;
    und?: string;
    ico?: any;
    flex?: string;
    classLabel?: string;
}

const Accordion: FC<IAccordion> = ({ children, name, und, ico, flex, classLabel }) => {
    const [open, setOpen] = useState("");

    return (
        <AccordionWrap className={`${open} ${classLabel}`}>
            <TopBar
                justifyContent="space-between"
                cursor="pointer"
                className={open && "active"}
                onClick={() => {
                    open === "" ? setOpen("active") : setOpen("");
                }}
            >
                <Wrapper disp="flex" gap="5px">
                    {ico}
                    {name}
                    {und ? (
                      <StyledUnd>{und}</StyledUnd>
                    ): null}
                </Wrapper>
                <AccordionArrow className={open && "active"} />
            </TopBar>
            {children}
        </AccordionWrap>
    );
};

export default Accordion;
