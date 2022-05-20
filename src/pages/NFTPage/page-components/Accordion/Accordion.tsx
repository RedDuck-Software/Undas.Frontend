import React, { ReactNode, useState } from "react";

import { AccordionWrap, AccordionArrow, StyledUnd } from "./Accordion.styles";

import { Wrapper } from "../../../CategoriesPage/Categories.styles";
import { TopBar } from "../../NFTPage.styles";

interface IAccordion {
  children: ReactNode;
  name: string;
  und?: string;
  ico?: any;
  flex?: string;
  classLabel?: string;
}

const Accordion: React.FC<IAccordion> = ({
  children,
  name,
  und,
  ico,
  classLabel,
}) => {
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
          {und ? <StyledUnd>{und}</StyledUnd> : null}
        </Wrapper>
        <AccordionArrow className={open && "active"} />
      </TopBar>
      {children}
    </AccordionWrap>
  );
};

export default Accordion;
