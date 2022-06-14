import styled from "styled-components";

import {
  ViewOption,
  ResultsTotal,
  SettingsBlock,
} from "../../../AllNFTs/AllNFTs.styles";
import { EthBlack } from "../../imports";

//Favorite

export const FavouriteSettingsBlock = styled(SettingsBlock)`
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;
export const FavouriteSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    min-width: 100%;
  }
`;
export const FavouriteButton = styled.button`
  cursor: pointer;
  background: #ffffff;
  height: 40px;
  border: none;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5d3f92;
  &:hover {
    background-color: #fbf5ff;
  }
  &.favourite-active {
    background-color: #edd2ff;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    padding: 8px;
  }
`;
export const FavouriteResultsTotal = styled(ResultsTotal)`
  @media (max-width: 1200px) {
    flex: 0 0 20%;
    text-align: right;
    order: 3;
  }
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

//Offers
export const OfferMenuWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    margin-top: 15px;
  }
`;
export const OfferFilterWrap = styled(ViewOption)`
  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const FilterButton = styled(FavouriteButton)`
  width: 180px;
  font-size: 14px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  &:hover {
    background: #fbf5ff;
  }
  &.offers-active {
    background-color: #edd2ff;
  }
  @media (max-width: 992px) {
    width: 50%;
  }
`;
export const OffersWrapTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  flex: 0 0 100%;
  margin: 20px auto;
  display: block;
  max-height: 660px;
  overflow-y: auto;
  position: relative;
  padding-top: 50px;
  margin-top: -40px;
  background-color: #fff;
  @media (max-width: 992px) {
    max-width: fit-content;
    overflow-x: auto;
    white-space: nowrap;
    max-height: 480px;
  }
  @media (max-width: 768px) {
    max-height: 380px;
  }
  @media (max-width: 576px) {
    max-height: 325px;
  }
`;
export const ItemIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  & .offers-item-image {
    width: 100%;
  }
`;
export const ItemName = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-right: 5px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const OffersTdText = styled.td`
  padding: 10px 30px;
  &.offers-table-item {
    display: flex;
    align-items: center;
  }
  &.first-column {
    padding: 15px 0 15px 20px;
    width: 3%;
    position: relative;
  }
  &.first-column:hover {
    cursor: pointer;
  }
  &.first-column:hover .offers-tooltip {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
`;
export const OffersTdEmpty = styled(OffersTdText)`
  padding: 10px 50px;
  @media (max-width: 850px) {
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const OffersTdButton = styled(OffersTdText)`
  padding: 10px;
`;

export const OffersTooltipWrap = styled.div`
  position: absolute;
  top: -14px;
  left: 22px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-out;
`;
export const OffersTooltip = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  background-color: #edd2ff;
  border-radius: 5px;
  padding: 5px 15px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -7px;
    right: 65%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #edd2ff;
  }
`;
export const AcceptBTN = styled.button`
  background: #873dc1;
  border-radius: 10px;
  width: 100px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  border: 1px solid #873dc1;
  transition: all 0.3s;
  &:hover {
    color: #873dc1;
    background: #ffffff;
  }
`;
export const MakeOfferBTN = styled.button`
  width: 100px;
  height: 36px;
  box-sizing: border-box;
  background: #ebdfff;
  border: 1px solid #873dc1;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #232428;
  transition: all 0.3s;
  &:hover {
    background: #ffffff;
  }
`;
export const DenyBTN = styled.button`
  width: 100px;
  height: 36px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #ff2a36;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ff2a36;
  transition: all 0.3s;
  &:hover {
    background-color: #ff2a36;
    color: #ffffff;
  }
`;
export const CancelBtn = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #5d3f92;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px 25px;
  position: absolute;
  right: 2px;
  top: 2px;
  z-index: 2;
  transition: all 0.3s;
  &:hover {
    background-color: #fbf5ff;
  }
  @media (max-width: 576px) {
    width: 99%;
  }
`;

export const WethText = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #7c7c7c;
  vertical-align: middle;
  padding-left: 5px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`;
export const PriceTextETH = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232428;
  display: inline-block;
  @media (max-width: 576px) {
    font-size: 14px;
  }
  &::before {
    content: url(${EthBlack});
    vertical-align: middle;
    padding-right: 5px;
  }
`;
export const SelectedFilters = styled.div`
  width: 100%;
  margin-top: 20px;
  z-index: 2;
`;
export const Filter = styled.div`
  width: 180px;
  height: 36px;
  background: #fbf5ff;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  display: inline-block;
`;
export const FilterImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  margin-top: 3px;
  margin-left: 10px;
`;
export const FilterName = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  vertical-align: middle;
  margin-left: 5px;
`;
export const FilterClose = styled.img`
  width: 10px;
  height: 10px;
  margin-left: 40px;
  margin-top: 3px;
`;
export const ClearAll = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  border: none;
  background: transparent;
  margin-left: 15px;
`;
