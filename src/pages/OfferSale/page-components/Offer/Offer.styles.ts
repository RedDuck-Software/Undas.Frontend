import styled from "styled-components";
import { eth, offerTime } from "../../imports";

export const OfferContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const CollectionName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
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
  width: 30%;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SecondCollum = styled.div`
  display: flex;
  width: 66%;
  margin-left: 4%;
  flex-wrap: wrap;
  flex-direction: column;
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
  margin-top: 80px;
`;

export const PriceRow = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-top: 20px;
`;

export const EthSelect = styled.div`
  width: 30%;
  background: #fbf5ff;
  box-shadow: 0px 0px 1px #7c7c7c;
  border-radius: 10px 0px 0px 10px;
  border-width: 0px;
  height: 36px;
  padding-top: 5px;
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
  box-shadow: 0px 0px 1px #7c7c7c;
  padding-left: 25px;
  border-width: 0px;
  border: none;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 5px rgb(135 61 193 / 50%);
    border-color: rgb(135 61 193);
  }
`;

export const CostSelect = styled.div`
  width: 20%;
  background: #ffffff;
  box-shadow: 0px 0px 1px #7c7c7c;
  border-radius: 0 10px 10px 0;
  border-width: 0px;
  height: 36px;
  padding-top: 5px;
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
  margin-top: 30px;
  margin-bottom: 8px;
`;

export const DaySelect = styled.div`
  width: 40%;
  background: #fbf5ff;
  box-shadow: 0px 0px 1px #7c7c7c;
  border-radius: 10px 0px 0px 10px;
  border-width: 0px;
  height: 36px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  padding-left: 20px;
  padding-top: 9px;
`;

export const ImageDownOffer = styled.img`
  float: right;
  padding-right: 20px;
  padding-top: 7px;
`;

export const TimeSelect = styled.div`
  width: 60%;
  background: #ffffff;
  box-shadow: 0px 0px 1px #7c7c7c;
  border-radius: 0 10px 10px 0;
  border-width: 0px;
  height: 36px;
  padding-top: 5px;
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
  margin-top: 30px;
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
    top: 6px;
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
`;

export const UNDLabel = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #873dc1;
`;

export const ImageInfo = styled.img`
  margin-left: 10px;
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
  &::before {
    content: "$";
  }
`;

export const AgreeRow = styled.div`
  width: 100%;
  display: block;
`;

export const PayRow = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 0.1px solid #7c7c7c;
  padding-bottom: 20px;
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
  &:hover {
    background: #ffffff;
    color: #873dc1;
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
    border: 1px solid #873dc1;
  }
`;

export const AgreeRowButton = styled.div`
  width: 100%;
  display: flex;
`;
