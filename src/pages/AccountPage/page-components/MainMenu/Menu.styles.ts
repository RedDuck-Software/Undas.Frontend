import styled from "styled-components";
import {
  EthBlack,
} from '../../imports'
import {ViewButton, ViewOption} from "../../../AllNFTs/AllNFTs.styles";

export const FavouriteSelect = styled.div `
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-width: 400px;
`
export const FavouriteButton = styled.button `
  cursor: pointer;
  background: #FFFFFF;
  height: 36px;
  border: none;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #5D3F92;
  &.favourite-active {
    background-color: #EDD2FF;
  }
`
export const OfferMenuWrap = styled.div `
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`
export const OfferFilterWrap = styled(ViewOption) `
`
export const FilterButton = styled(FavouriteButton) `
  width: 180px;
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
export const OffersWrapTable = styled.table `
  width: 100%;
  border-collapse: collapse;
  flex: 0 0 100%;
  margin: 20px 0;
`
export const ItemIcon = styled.div`
  width: 30px;
  height: 30px;
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
  @media (max-width: 576px){
    font-size: 12px;
  }
`
export const OffersTdText = styled.td `
  padding: 10px 30px;
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
  &.first-column:hover{
    cursor: pointer;
  }
  &.first-column:hover .offers-tooltip{
    visibility: visible;
    opacity: 1;
  }
`
export const OffersTooltipWrap = styled.div`
  position: absolute;
  top: -14px;
  left: 22px;
  visibility: hidden;
  opacity: 0;
  transition: all .5s ease-out;
`
export const OffersTooltip = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  background-color: #EDD2FF;
  border-radius: 5px;
  padding: 5px 15px;
  position: relative;
   &::before{
    content: '';
    position: absolute;
    bottom: -7px;
    right: 65%;
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #EDD2FF;
  }
`
export const AcceptBTN = styled.button`
background: #873DC1;
border-radius: 10px;
width: 100px;
height: 36px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
border-color: #873DC1;

&:hover{
  color: #873DC1;
  background: #FFFFFF;
  border: 1px solid #873DC1;
  }
`
export const MakeOfferBTN = styled.button`
width: 100px;
height: 36px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #873DC1;
border-radius: 10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #873DC1;

&:hover{
  border: 1px solid #873DC1;
  box-shadow: 0px 0px 10px #873DC1;
  }
`
export const DenyBTN = styled.button`
width: 100px;
height: 36px;
box-sizing: border-box;
background: #FFFFFF;
border: 1px solid #FF2A36;
border-radius: 10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #FF2A36;

&:hover{
  border: 1px solid #FF2A36;
  box-shadow: 0px 0px 10px #FF2A36;
  }
`
export const WethText = styled.span `
  font-weight: 400;
  font-size: 12px;
  color: #7C7C7C;
  vertical-align: middle;
  padding-left: 5px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const PriceTextETH = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #232428;
display: inline-block;

  @media (max-width: 576px) {
    font-size: 14px;
  }

  &::before{
    content: url(${EthBlack});
    vertical-align: middle;
    padding-right: 5px;
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
