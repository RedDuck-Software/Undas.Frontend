import styled from "styled-components";

import { top, buttom } from "../../../imports";

export const FavouriteSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
`;
export const FavouriteButton = styled.button`
  cursor: pointer;
  background: #ffffff;
  height: 36px;
  border: none;
  //box-sizing: border-box;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5d3f92;
  &.favourite-active {
    background-color: #edd2ff;
  }
`;
export const OfferMenuWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;
`;
export const OffersWrapTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  flex: 0 0 100%;
  margin: 20px 0;
`;
export const ItemIcon = styled.div`
  width: 50px;
  height: 50px;
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
  margin-top: -30px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const UNDText = styled.span`
  margin-right: 5px;
  margin-left: -49px;
  margin-top: 30px;
  font-family: "Jost";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  position: relative;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const UND = styled.span`
  position: absolute;
  left: 25px;
  top: 2px;
`;
export const OffersTdText = styled.td`
  padding: 10px 30px;
  position: relative;

  &.offers-table-item {
    display: flex;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
  &.first-column {
    padding: 15px 0 15px 20px;
    width: 3%;
    position: relative;
  }
  &.first-column:hover .offers-tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
export const PriceTextW = styled.div`
  width: 100%;
  text-align: left;
  float: left;
`;
export const PercentTextTop = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #008c38;
  &:after {
    content: url("${top}");
    margin-left: 10px;
  }
`;
export const PercentTextButtom = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #cc252f;
  &:after {
    content: url("${buttom}");
    margin-left: 10px;
  }
`;
export const OffersTr = styled.tr`
  padding: 0 30px;
  background: #fbf5ff;
  box-shadow: inset 0 0 1px #7c7c7c;
  &.offers-menu-row {
    background-color: #ffffff;
  }
  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(124, 124, 124, 0.5));
    border-radius: 10px;
  }
`;
