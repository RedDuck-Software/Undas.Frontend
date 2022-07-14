import styled from "styled-components";

import { eth, offerTime } from "../../imports";

export const OfferContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
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

export const FirstCollum = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SecondCollum = styled.div`
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

export const TextPrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

export const PriceRow = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-top: 15px;
  position: relative;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const AmmountInput = styled.input`
  width: 50%;
  background: #ffffff;
  border: none;
  box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
  padding-left: 25px;
  outline: none;
  &:focus {
    box-shadow: inset 0px 0px 5px rgb(135, 61, 193);
  }

  @media (max-width: 992px) {
    border-radius: 0px 0px 0px 10px;
  }
`;

export const CostSelect = styled.div`
  width: 20%;
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 0 10px 10px 0;
  height: 36px;
  padding-top: 5px;
  @media (max-width: 992px) {
    width: 50%;
    border-radius: 0px 0px 10px 0px;
  }
`;

export const DollarText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  padding-right: 20px;
  padding-top: 4px;
  float: right;
  &::before {
    content: "$";
    margin-right: 10px;
  }
`;

export const TextOffer = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
  margin-top: 20px;
  margin-bottom: 8px;
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TimeSelect = styled.div`
  width: 60%;
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 0 10px 10px 0;
  height: 36px;
  padding-top: 5px;

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const TextPmAm = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  padding-right: 20px;
  padding-top: 4px;
  float: right;
`;

export const TextTime = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  padding-top: 4px;
  padding-left: 20px;
  &::before {
    content: url(${offerTime});
    vertical-align: middle;
    padding-right: 10px;
  }
`;

export const UNDPrice = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #873dc1;
  margin-left: auto;
  margin-top: 23px;
  &.small-size {
    display: none;
    margin-top: unset;
    @media (max-width: 576px) {
      display: flex;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
  margin-top: 8px;
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
    top: 12px;
    left: 5px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;

export const CheckboxLabel = styled.label`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  position: relative;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const UNDLabel = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #873dc1;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ImageInfo = styled.img`
  margin-bottom: 3px;
`;

export const DollarPrice = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  margin-left: auto;
  margin-top: 8px;
  &::before {
    content: "$";
  }

  @media (max-width: 576px) {
    margin-top: 2px;
    margin-left: 10px;
    &.margin-0 {
      display: none;
    }
  }
`;

export const AgreeRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PayRow = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 0.1px solid #7c7c7c;
  padding-bottom: 20px;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
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

export const ButtonMakeOffer = styled.button`
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
  margin-top: 40px;
  margin-bottom: 120px;
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
    margin-bottom: 80px;
  }
  @media (max-width: 992px) {
    margin-bottom: 60px;
  }
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

export const AgreeRowButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

export const EthPrice = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #5d3f92;
  &::before {
    content: url(${eth});
    margin-right: 5px;
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

export const ButtonInfo = styled.button`
  background-color: transparent;
  border: none;
  width: 36px;
  height: 36px;
`;

export const OverlayPopUp = styled.div`
  width: 350px;
  background: #ccb7f2;
  padding: 10px 15px;
  box-shadow: 0px 4px 4px rgb(124 124 124/25%);
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  margin-left: 11%;
  position: absolute;
  margin-left: 137px;
  margin-bottom: 10px;
  &::after {
    content: "";
    position: absolute;
    left: 23px;
    bottom: -20px;
    border: 12px solid transparent;
    border-left: 20px solid #ccb7f2;
    transform: rotate(90deg);
  }

  @media (max-width: 992px) {
    margin-left: unset;
    &::after {
      left: 160px;
    }
  }
  @media (max-width: 576px) {
    width: 95%;
    &::after {
      left: 45%;
    }
  }
`;

export const FAQLink = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  &:hover {
    color: #873dc1;
  }
`;

export const Filter = styled.ul`
  width: 30%;
  background: #fbf5ff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px 0px 0px 10px;
  height: 36px;
  cursor: pointer;

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;

    &.sort-active {
      border-radius: 10px 10px 0px 0px;
    }
  }

  &.sort-active {
    border-radius: 10px 0 0 0;
  }
`;

export const FilterDay = styled.ul`
  width: 40%;
  background: #fbf5ff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px 0px 0px 10px;
  height: 36px;
  cursor: pointer;

  &.sort-day {
    border-radius: 10px 0 0 0;
  }

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    &.sort-day {
      border-radius: 10px 10px 0px 0px;
    }
  }
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  padding: 7px;
  transition: all ease-in-out 0.3s;
  border-radius: 10px;
  margin-top: 2px;
  &:hover {
    background: #fbf5ff;
  }
`;

export const FilterTitle = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #232428;

  &.day {
    margin-left: 15px;
  }
`;

export const Arrow = styled.span`
  margin-top: -4px;
  margin-right: 10px;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: rotate(225deg);
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
  margin-left: auto;
  &.sort-active {
    margin-top: 4px;
    transform: rotate(45deg);
  }
`;

export const FilterMenu = styled.ul`
  width: 30%;
  position: absolute;
  z-index: 2;
  background: rgb(251, 245, 255);
  border: 1px solid rgba(124, 124, 124, 0.3);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.15s;
  margin-top: -1px;
  justify-content: flex-start;
  &.sort-active {
    visibility: visible;
    opacity: 1;
  }
  &.collection-active {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const FilterMenuDay = styled.ul`
  width: 40%;
  position: absolute;
  z-index: 2;
  background: rgb(251, 245, 255);
  border: 1px solid rgba(124, 124, 124, 0.3);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.15s;
  margin-top: -1px;
  justify-content: flex-start;
  &.day-active {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;

interface IMenuItem {
  hover?: boolean;
}

export const MenuItem = styled(FilterItem)<IMenuItem>`
  &:hover {
    ${(props) =>
      props.hover
        ? "box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5), inset 0px -3px 4px rgba(124, 124, 124, 0.25);"
        : ""}
  }
`;

export const BlockchainIMG = styled.img`
    width:20px;
    height: 20px;
    margin-right: 10px;
    margin-top: -4px;
`;
