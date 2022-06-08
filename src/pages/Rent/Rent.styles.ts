import { Link } from "react-router-dom";
import styled from "styled-components";
import { back, eth } from "../OfferRent/imports";

export const TopLinkWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 2px #7c7c7c;
`;
export const TopLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 80rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #873dc1;
  transition: all 0.3s ease-in;
  &::before {
    content: url(${back});
    vertical-align: middle;
    padding-right: 12px;
  }
  &:hover {
    color: #873dc1;
    text-decoration: underline;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const LeftBlock = styled.div`
  display: flex;
  flex: 0 1 60%;
  flex-direction: column;
`;
export const RightBlock = styled.div``;
export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(124, 124, 124, 0.25);
`;
export const ContentItemName = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #232428;
`;
export const ContentItemPriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
`;
export const ContentItemPriceUnd = styled.span`
  color: #873dc1;
  &::before {
    content: "UND";
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    color: #873dc1;
    margin-right: 5px;
  }
`;
export const InputBlock = styled.span`
  margin: 0 10px;
`;
export const RentalLable = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin-right: 10px;
  color: #7c7c7c;
`;
export const Total = styled(ContentItemName)`
  font-size: 24px;
  line-height: 29px;
`;
export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
`;
export const TotalPriceEth = styled(ContentItemPriceEth)`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
export const TotalPriceUnd = styled(ContentItemPriceUnd)`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  &::before {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
export const Plus = styled.span`
  margin: 0 5px;
`;
export const CheckboxRow = styled.div`
  margin-top: 10px;
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
    top: 8px;
    left: 5px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CheckboxLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #7c7c7c;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }
`;
export const ItemAmount = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin: 20px 0;
`;
export const BottomWrapper = styled.div`
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
`;
export const Button = styled.button`
  display: block;
  padding: 10px;
  width: 30%;
  background: #873dc1;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  border: 1px solid #873dc1;
  outline: none;
  transition: all 0.3s linear;
  margin: 0 auto;
  margin-top: 40px;
  &:hover {
    background: #ffffff;
    color: #873dc1;
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }
`;
