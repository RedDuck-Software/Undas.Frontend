import styled from "styled-components";

import { back, eth } from "./imports";

export const Back = styled.div`
  width: 100%;
  height: 50px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 2px #7c7c7c;
  &:hover {
    cursor: pointer;
  }
`;
export const BackText = styled.div`
  width: 100%;
  max-width: 80rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #873dc1;
  margin: 0 auto;
  padding: 14px 3rem;
  &::before {
    content: url(${back});
    vertical-align: middle;
    padding-right: 12px;
  }
  @media (min-width: 1700px) {
    max-width: 105rem;
  }
`;
export const TitleText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-weight: 400;
  font-size: 36px;
  text-align: left;
  color: #232428;
  margin-top: 60px;
  margin-bottom: 40px;
  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
export const ContentWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        gap: 30px;
    }
`;
export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(124, 124, 124, 0.25);
  &:first-child {
    padding-top: 0;
  }
  @media (max-width: 860px) {
    &.wrap {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;
export const ContentItemName = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
  @media (max-width: 992px) {
    font-size: 16px;
    &.width {
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ContentItemPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 860px) {
    &.fee {
      width: 100%;
      justify-content: flex-end;
      flex-direction: unset;
      gap: 10px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: unset;
    gap: 10px;
    &.column {
      flex-direction: column;
    }
  }
`;
export const ContentItemPriceEth = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #5d3f92;
  &::before {
    content: url(${eth});
    margin-right: 5px;
  }
`;
export const ContentItemPriceUsd = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  @media (max-width: 860px) {
    &.margin-3 {
      margin-top: 3px;
    }
  }
  @media (max-width: 576px) {
    margin-top: 1px;
  }
`;
export const InputBlock = styled.span`
  margin: 0 10px;
`;
export const RentalPeriod = styled.input`
  width: 170px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  padding: 10px 36px;
  background: #ffffff;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  color: #7c7c7c;
  border: none;
  outline: none;
  &:focus {
    box-shadow: inset 0px 0px 5px rgb(135, 61, 193);
  }
  @media (max-width: 576px) {
    width: 130px;
    font-size: 12px;
    text-align: center;
    padding: unset;
  }
`;
export const CollectionName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #232428;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ImageVerify = styled.img`
  margin-left: 10px;
`;

export const ImageUND = styled.img`
  margin-left: 15px;
`;

export const ImageNFT = styled.img`
  margin-top: 30px;
`;

export const FirstCollumn = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondCollumn = styled.div`
  display: flex;
  width: 36%;
  margin-left: 4%;
  flex-wrap: wrap;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: unset;
  }
`;

export const TextNameNFT = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
`;

export const ImageUNDItem = styled.img`
  margin-left: 10px;
  height: 17px;
  width: 27px;
  margin-top: 4px;
`;

export const ImageVerifyItem = styled.img`
  margin-left: 10px;
  height: 16px;
  margin-top: 4px;
`;

export const NameRow = styled.div`
  width: 100%;
  display: flex;
`;

export const TextCreator = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  margin-top: 10px;
`;

export const CreatorName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #873dc1;
  margin-top: 10px;
`;

export const AgreeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AgreementLink = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
`;

export const CheckboxLabelAgreement = styled.label`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #7c7c7c;
  margin-top: 40px;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }
`;
export const CheckboxInputAgreement = styled.input`
  margin-right: 5px;
  margin-top: 42px;
  &.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &.custom-checkbox + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
  }
  &.custom-checkbox + label::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #5d3f92;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::before {
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::after {
    content: "";
    width: 6px;
    height: 8px;
    border-bottom: 1px solid #5d3f92;
    border-right: 1px solid #5d3f92;
    transform: skew(-10deg) rotate(45deg);
    position: absolute;
    top: 3px;
    left: 4px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const ButtonsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 120px;
  @media (max-width: 992px) {
    margin-bottom: 80px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 60px;
  }
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;
export const Button = styled.button`
  width: 350px;
  height: 36px;
  background: #873dc1;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  border: none;
  outline: none;
  transition: all 0.3s linear;
  &:hover {
    background: #ffffff;
    color: #873dc1;
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
    border: 1px solid #873dc1;
  }
  @media (max-width: 992px) {
    width: 100%;
  }

`;
export const TextDay = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  margin-top: 6px;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  margin-top: 13px;
`;

export const InputDay = styled.input`
  background: #ffffff;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  width: 120px;
  height: 36px;
  margin-left: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  outline: none;
  color: #7c7c7c;
  border: none;
  &:focus {
    box-shadow: inset 0px 0px 5px rgba(135, 61, 193, 1);
  }
`;

export const NFTInfoContainer = styled.div`
  display: flex;
  width: 400px;
  height: 400px;
  background: #fbf5ff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  &.disable {
    background: #c4c4c4;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 640px) {
    width: 70%;
    margin: 0 auto;
    &.max-width {
      width: 100%;
    }
  }
  @media (max-width: 550px) {
    width: 80%;
    &.max-width {
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CheckBoxCenter = styled.div`
  display: flex;
`;