import styled from "styled-components";
import {ViewButton, ViewOption} from "../../../AllNFTs/AllNFTs.styles";

import {
  top,
  buttom,
} from '../../imports'

export const FavouriteSelect = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
`
export const FavouriteButton = styled.button`
  cursor: pointer;
  background: #FFFFFF;
  height: 36px;
  border: none;
  //box-sizing: border-box;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5D3F92;
  &.favourite-active {
    background-color: #EDD2FF;
  }
`
export const OfferMenuWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
  margin-right: 30px;
`
export const OffersWrapTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  flex: 0 0 100%;
  margin: 20px 0;
`
export const ItemIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  & .offers-item-image{
    width: 100%;
  }
`
export const ItemName = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  margin-right: 5px;
  margin-top: -30px;
  @media (max-width: 576px){
    font-size: 12px;
  }
`
export const CollectionName = styled.span`
  margin-right: 5px;
  margin-left: -80px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #7C7C7C;
  @media (max-width: 576px){
    font-size: 12px;
  }
`
export const UNDText = styled.span`
  margin-right: 5px;
  margin-left: -49px;
  margin-top: 30px;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873DC1;
  position: relative;
  
  @media (max-width: 576px){
    font-size: 12px;
  }
`
export const UND = styled.span`
position: absolute;
left: 25px;
top: 2px;
`
export const OffersTdText = styled.td`
  padding: 10px 30px;
  position: relative;
  
  &.offers-table-item{
    display: flex;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 10px;
  }
  &.first-column{
    padding: 15px 0 15px 20px;
    width: 3%;
    position: relative;
  }

  &.first-column:hover .offers-tooltip{
    visibility: visible;
    opacity: 1;
  }
`
export const ActionText = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
`
export const USDPrise = styled.div`
width: 100%;
text-align: left;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #7C7C7C;
margin-bottom: 5px;
`
export const QuantityText = styled.div`
width:100%;
text-align: center;
`
export const TimeText = styled.div`
width:100%;
text-align: right;
`
export const PriceTextW = styled.div`
width:100%;
text-align: left;
float: left;
`
export const PercentTextTop = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #008C38;

&:after {
  content: url('${top}');
  margin-left: 10px;
}
`
export const PercentTextButtom = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #CC252F;

&:after {
  content: url('${buttom}');
  margin-left: 10px;
}
`
export const OffersTr = styled.tr `
  padding: 0 30px;
  background: #FBF5FF;
  box-shadow: inset 0 0 1px #7C7C7C;
  &.offers-menu-row{
    background-color: #FFFFFF;
  }

  &:hover {
    filter: drop-shadow(0px 0px 10px rgba(124, 124, 124, 0.5));
    border-radius: 10px;
  }

`
export const OfferFilterWrap = styled(ViewOption) `
`
export const FilterButton = styled(FavouriteButton) `
  width: 100px;
  font-size: 14px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  &.offers-active {
    background-color: #EDD2FF;
  }
`
export const SelectedFilters = styled.div `
width: 100%;
margin-top: 20px;
`
export const Filter = styled.div `
width: 180px;
height: 36px;
background: #FBF5FF;
box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
border-radius: 10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #232428;
display: inline-block;
`
export const FilterImg = styled.img `
width: 30px;
height: 30px;
border-radius: 5px;
box-shadow: inset 0px 0px 1px #7C7C7C;
margin-top: 3px;
margin-left: 10px;
`
export const FilterName = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #232428;
vertical-align: middle;
margin-left: 5px;
`
export const FilterClose = styled.img `
width: 10px;
height: 10px;
margin-left: 40px;
margin-top: 3px;
`
export const ClearAll = styled.button `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #5D3F92;
border: none;
background: transparent;
margin-left: 15px;
`
export const TextButton = styled.div `
width: 100%;
`