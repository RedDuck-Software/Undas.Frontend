import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion';

export const AccountSupportWrap = styled.div ``;

export const AccordionWrap = styled.div `
    margin: 40px auto;
`;
export const AccordionItem = styled(Accordion.Item) `
    background-color: #FBF5FF;
    & .accordion-button{
        color: #232428;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        background-color: #FBF5FF;
    }
    & .accordion-button:not(.collapsed){
        box-shadow: none;
    }
    & .accordion-button:focus{
        border: none;
        box-shadow: none;
    }
    & .accordion-button:not(.collapsed)::after{
        background-image: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e");
    }
    & .accordion-text-link{
        color: #873DC1;
        text-decoration: none;
    }
`;
