import styled from "styled-components";
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

export const OfferMenuWrap = styled.div `
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`

export const OfferFilterWrap = styled(ViewOption) `
    
`

export const FilterButton = styled(FavouriteButton) `
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