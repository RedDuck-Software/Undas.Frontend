import styled from "styled-components";

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
  margin-left: 30px;
  margin-right: 30px;
`
export const OffersWrapTable = styled.table `
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
  margin-left: -95px;
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
export const OffersTdText = styled.td `
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
  &.first-column:hover{
    cursor: pointer;
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
text-alight: right;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
text-align: right;
color: #7C7C7C;

&::before{
  content: '$';
}
`
export const QuantityText = styled.div `
width:100%;
text-align: center;
`
export const TimeText = styled.div `
width:100%;
text-align: right;
`
export const PriceTextW = styled.div `
width:100%;
text-align: right;
`