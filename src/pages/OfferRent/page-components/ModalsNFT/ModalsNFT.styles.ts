import styled from "styled-components";

import { ReactComponent as Search } from "../../../../pages/CollectionPage/assets/search.svg";

import { collectionType, eth } from "../../imports";

export const FormButton = styled.button`
  height: 36px;
  width: 250px;
`;
export const MakeOfferText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #232428;
  width: 100%;
`;

export const AddNFTButton = styled.button`
  background-color: #c4c4c4;
  border: none;
  outline: none;
  position: relative;
  width: 100%;
  height: 100%;
  &:hover .add-btn {
    box-shadow: 0px 0px 5px #7c7c7c;
  }
`;
export const AddNFT = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  color: #7c7c7c;
  font-size: 50px;
  line-height: 50px;
  transition: all 0.3s;
`;
export const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  &.justify-content-end {
    justify-content: end;
    margin-top: 20px;
  }
`;
export const SelectedItem = styled.div`
  width: 40%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 6px;
  color: #7c7c7c;
`;
export const SearchIco = styled(Search)`
  margin-right: 10px;
`;

export const MenuSearchWrap = styled.div`
  width: 60%;
  padding-left: 20px;
  display: flex;
  align-items: center;
  height: 36px;
  background-color: #fff;
  box-shadow: inset 0px 0px 3px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  border: none;
`;
export const Input = styled.input`
  font-weight: 400;
  font-size: 12px;
  border: transparent;
  background: transparent;
  padding-right: 0.5rem;
  outline: none;
  width: 100%;
`;
export const Filter = styled.ul`
  width: 20%;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
  border-radius: 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  &.sort-active {
    border-radius: 10px 10px 0 0;
  }
`;
export const FilterCollection = styled.ul`
  width: 38%;
  height: 36px;
  margin-right: 2%;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  &.collection-active {
    border-radius: 10px 10px 0 0;
  }
`;
export const FilterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  transition: all ease-in-out 0.15s;
`;

export const FilterTitle = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  padding-top: 2px;
`;
export const Arrow = styled.span`
  margin-top: 4px;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
  &.sort-active {
    margin-top: -4px;
    transform: rotate(-135deg);
  }
  &.collection-active {
    margin-top: -4px;
    transform: rotate(-135deg);
  }
`;
export const FilterMenu = styled.ul`
  position: absolute;
  z-index: 2;
  width: 100%;
  background: #ffffff;
  box-shadow: inset 0 0 1px rgba(135, 61, 193, 0.5);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.15s;
  &.sort-active {
    visibility: visible;
    opacity: 1;
  }
  &.collection-active {
    visibility: visible;
    opacity: 1;
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

export const FilterTitleCollection = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  &::before {
    content: url(${collectionType});
    vertical-align: middle;
    padding-right: 10px;
  }
`;
export const CheckboxInputAgreement = styled.input`
  &.custom-checkbox {
    position: absolute;
    z-index: 3;
    opacity: 0;
  }
  &.custom-checkbox + label {
    display: flex;
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
    margin-right: 15px;
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
    top: 6px;
    left: 4px;
  }
  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CheckboxLabelAgreement = styled.label`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    cursor: pointer;
  }
`;

export const CollectionImage = styled.img`
  margin-right: 5px;
`;

export const UNDText = styled.span`
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  float: right;
  color: #873dc1;
  &.alight-left {
    margin-left: 5px;
    margin-right: 15px;
  }
`;

export const VerifyImage = styled.img`
  margin-right: 5px;
  float: right;
  &.alight-right {
    margin-left: auto;
    margin-right: unset;
  }
`;

export const CollectionBox = styled.div`
  width: 100%;
`;

export const NFTSelect = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  gap: 2%;
  flex-wrap: wrap;
  max-height: 350px;
  overflow-y: auto;
`;

export const NFTCard = styled.div`
  display: flex;
  height: 100px;
  width: 49%;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 10px;
  margin-top: 15px;
  &.selected {
    background-color: #ebdfff;
  }
`;

export const FirstCollumNFT = styled.div`
  display: flex;
  width: 30%;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const SecondCollumNFT = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const LastCollumNFT = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-self: center;
  height: 100px;
  border-radius: 0px 10px 10px 0px;
  &:hover {
    background-color: #f5efff;
  }
`;

export const NFTImage = styled.img`
  margin-top: 5px;
  margin-left: 5px;
  width: 60px;
  height: 60px;
`;

export const PriceText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  margin-top: 5px;
  margin-left: 14px;
`;

export const CollectionNameNFT = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  width: 100%;
  margin-top: 13px;
`;

export const NameNFTBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

export const NameNFTText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
`;

export const TotalPriceBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

export const EthPrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #5d3f92;
  &::before {
    content: url(${eth});
    vertical-align: middle;
    padding-right: 5px;
  }
`;

export const DollarPrice = styled.div`
  margin-top: 2px;
  margin-left: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  color: #7c7c7c;
  &::before {
    content: "($";
  }
  &::after {
    content: ")";
  }
`;

export const Add = styled.div`
  font-size: 50px;
  color: #7c7c7c;
  margin-top: 10px;
  &.minus {
    font-size: 25px;
    margin-top: 28px;
  }
`;

export const ModalNftDiv = styled.div`
  display: inline;
`;
