import styled from "styled-components";
import {InformIco} from "./imports";

export const OffersWrap = styled.div `
    padding-bottom: 80px;
`;

export const OffersTitleWrap = styled.div ``;

export const OffersHeadWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DescriptionTextWrap = styled.div `
    display: flex;
`;


export const InformationButton = styled.button `
    width: 16px;
    height: 16px;
    background: url(${InformIco}) center / cover;
    border: none;
    outline: none;
    margin-left: 10px;
`;
export const ViewButton = styled.button`
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
    border-radius: 10px;
    border: 1px solid transparent;
    outline: none;
    padding: 10px 35px;
    color: #7c7c7c;
    transition: all .3s;
    &:hover{
        box-shadow: 0px 0px 5px rgb(124, 124, 124);
        border: 1px solid #232428;
        color: #232428;
    }
`;

export const OffersContentWrap = styled.div `
    height: 480px;
    background: #FBF5FF;
    box-shadow: inset 0px 0px 1px #7C7C7C;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 40px auto;
`;

export const OffersContentText = styled.p `
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #232428;
`;
