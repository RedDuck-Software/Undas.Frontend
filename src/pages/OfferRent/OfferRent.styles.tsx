import { Link } from "react-router-dom";
import styled from "styled-components";
import { NFTWrap } from "../HomePage/page-components/NFTCard/NFTCard.styles";
import { eth, offerTime } from "./imports";
import { Swiper } from "swiper/react";

export const PageWrapper = styled.div`
  padding: 40px 0 120px;
  @media (max-width: 992px) {
    padding: 30px 0 80px;
  }
  @media (max-width: 768px) {
    padding: 20px 0 60px;
  }
  @media (max-width: 576px) {
    padding-bottom: 30px;
  }
`;
export const TabsMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 40px;
`;
export const Tab = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 30%;
  max-height: 36px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px 0 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #5d3f92;
  max-width: 160px;
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
`;
export const TabCastom = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 30%;
  max-height: 36px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 0 10px 10px 0;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #5d3f92;
  max-width: 160px;
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
`;
export const OfferContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
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

  &.margin-top {
    margin-top: 15px;
  }
  &.margin-top-30 {
    margin-top: 30px;
  }
  &.margin-top-20 {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    &.margin-top-20 {
      margin-top: unset;
    }
  }
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
  &.сost-per-day {
    margin-top: 20px;
  }

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

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
export const EthSelect = styled.div`
  width: 30%;
  background: #fbf5ff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px 0px 0px 10px;
  height: 36px;
  padding-top: 5px;

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;
export const EthText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-left: 20px;
  &::before {
    content: url(${eth});
    margin-right: 10px;
  }
`;
export const ImageDown = styled.img`
  float: right;
  padding-right: 20px;
  padding-top: 9px;
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
  margin-bottom: 8px;

  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
    &.no-margin {
      margin-top: unset;
    }
  }
`;
export const DaySelect = styled.div`
  width: 40%;
  background: #fbf5ff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px 0px 0px 10px;
  height: 36px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  padding-left: 20px;
  padding-top: 9px;

  @media (max-width: 992px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }
`;
export const ImageDownOffer = styled.img`
  float: right;
  padding-right: 20px;
  padding-top: 7px;
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
  margin-top: 6px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 14px;
  }

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
    width: 16px;
    height: 16px;
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
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
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

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;
export const ImageInfo = styled.img`
  padding-bottom: 10px;
  &.margin-top {
    padding-bottom: 4px;
  }
  &.margin {
    margin-top: 8px;
  }
  &.margin-3 {
    margin-top: 4px;
  }
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
  margin-top: 6px;
  &::before {
    content: "$";
  }

  @media (max-width: 768px) {
    &.margin-0 {
      margin-top: 8px;
    }
  }
  @media (max-width: 576px) {
    margin-top: 2px;
    margin-left: 10px;
    &.margin-0 {
      display: none;
    }
  }
`;
export const PayRow = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;

  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;
export const AgreementLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  text-decoration: none;
  &:hover {
    color: #873dc1;
    text-decoration: underline;
  }
`;

export const CheckboxLabelAgreement = styled.label`
  margin: 0 auto;
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
    display: block;
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
    vertical-align: middle;
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
    top: 4px;
    left: 4px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
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

export const CheckboxLabelCollateral = styled.label`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
  justify-content: flex-end;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CheckboxInputCollateral = styled.input`
  margin-right: 12px;
  margin-top: 6px;
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
    width: 16px;
    height: 16px;
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
    top: 6px;
    left: 5px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;

export const ContainerCheckboxCollateral = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
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

export const SelectedNFT = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #232428;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImgDelete = styled.img`
  height: 16px;
  top: 10px;
  position: absolute;
  right: 0;
`;

export const AddNFTContainer = styled(NFTInfoContainer)`
  padding: 65px 40px 15px;
`;
export const AddNFTCard = styled(NFTWrap)`
  background-color: #c4c4c4;
  padding: 0;
  width: 300px;
  height: 300px;
  border-radius: 10px;
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

export const SwiperNFT = styled(Swiper)`
  &.swiper-button-prev {
    width: 36px;
    height: 36px;
    transition: all ease-in-out 0.15s;
    background: #fff;
    border: 1px solid #7c7c7c;
    box-sizing: border-box;
    border-radius: 10px;
    left: 0;
    right: auto;
    z-index: 999;
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
    &::after {
      content: "";
      border-bottom: 1px solid #7c7c7c;
      border-left: 1px solid #7c7c7c;
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      margin-left: 4px;
    }
  }
  &.swiper-button-next {
    width: 36px;
    height: 36px;
    transition: all ease-in-out 0.15s;
    background: #fff;
    border: 1px solid #7c7c7c;
    box-sizing: border-box;
    border-radius: 10px;
    left: auto;
    right: 0;
    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
    &::after {
      content: "";
      border-bottom: 1px solid #7c7c7c;
      border-right: 1px solid #7c7c7c;
      width: 16px;
      height: 16px;
      transform: rotate(-45deg);
      margin-right: 6px;
    }
  }
`;

export const ContainerCollum = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
