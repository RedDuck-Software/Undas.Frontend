import React, {FC} from 'react'

//Styles
import {
    DescriptionWrap,
    Title,
    MoreBtn,
    AccordionText
} from "../Accordion.styles";
import {Wrapper} from "../../../../CategoriesPage/Categories.styles";

const Description: FC = () => {
    return (
        <DescriptionWrap>
            <Title>Created by <Title color="#873DC1">aaronpenne-ab</Title></Title>
            <AccordionText>
                "Return" is a meditation on returning inward, cyclical change, and the beauty  of iteration.The composition of each piece slowly loops, providing a new experience for the viewer over time. Created by Aaron Penne
            </AccordionText>
            <Wrapper disp="flex" gap="26px" alignItems="center" marg="15px 0 0 0">
                <span>
                    See more information about Aeron Penne
                </span>
                <MoreBtn>See more</MoreBtn>
            </Wrapper>
        </DescriptionWrap>
    )
}

export default Description