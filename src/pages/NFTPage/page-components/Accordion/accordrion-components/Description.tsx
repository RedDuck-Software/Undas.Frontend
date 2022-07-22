import React from "react";

import {
  DescriptionWrap,
  Title,
  MoreBtn,
  AccordionText,
  WrapperDescript,
} from "../Accordion.styles";
interface DescriptionProps {
  creator?: string;
  text?: string;
}
const Description: React.FC<DescriptionProps> = ({ text, creator }) => {
  return (
    <DescriptionWrap>
      <Title>
        Created by <Title color="#873DC1">{creator}</Title>
      </Title>
      <AccordionText>{text}</AccordionText>
      <WrapperDescript>
        <AccordionText>See more information about Aeron Penne</AccordionText>
        <MoreBtn>See more</MoreBtn>
      </WrapperDescript>
    </DescriptionWrap>
  );
};

export default Description;
