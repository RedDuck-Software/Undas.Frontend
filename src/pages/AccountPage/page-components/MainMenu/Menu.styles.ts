import styled from "styled-components";
import {ViewButton, ViewOption} from "../../../AllNFTs/AllNFTs.styles";
import BgImg from "../../assets/bg-img.png"
import BgImgRotate from "../../assets/bg-img-rotate.png"

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
  padding: 4px 20px;
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
//RewardMenu
export const RewardMenuWrap = styled.div`
  padding: 40px 0 120px;
`;
export const ContentWrap = styled.div`
  &.top-table{
    margin-top: -40px;
  }
`;
export const ButtonsBlock = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #232428;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #232428;
`;
export const Button = styled.button`
  padding: 10px;
  background: #FFFFFF;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  margin-left: 20px;
  min-width: 40px;
  &:hover{
    background: #FBF5FF;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  }
  &.active{
    background: #FBF5FF;
  }
`;
export const ContentTableWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
  background-color: #FBF5FF;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: left bottom;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.5), inset 0px 0px 1px #7C7C7C;
  margin: 40px 0;
  padding: 0 50px;
  &.central-table{
    background-image: url(${BgImgRotate});
  }
`;
export const ImageBlock = styled.div`
  padding: 60px 40px 0 0;
`;
export const MainBlock = styled.div`
  width: 400px;
  padding: 40px 10px;
`;
export const CentralBlock = styled.div`
  padding: 45px 20px 75px;
  background: #FFFFFF;
  border: 1px solid rgba(124, 124, 124, 0.25);
`;
export const RightBlock = styled.div`
  padding: 40px 10px 20px;
  text-align: center;
`;
export const BlockTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #7C7C7C;
`;
export const BlockTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
`;
export const BlockValue = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const TextValue = styled.span`
  font-size: 24px;
  line-height: 35px;
  font-weight: 600;
  text-align: right;
  color: #7C7C7C;
  & .number{
    font-size: 48px;
    line-height: 50px;
  }
`;
export const InformButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;
export const BlockContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const BlockContentTotal = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7C7C7C;
`;
export const CentralBlockHead = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #5D3F92;
  text-align: center;
`;
export const RightBlockHead = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #873DC1;
`;
export const RightBlockButton = styled.button`
  padding: 8px 35px;
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background: #873DC1;
  border-radius: 10px;
  border: 1px solid transparent;
  outline: none;
  margin-top: 20px;
  transition: all .3s;
  &:hover{
    background: #ffffff;
    color: #873DC1;
    border: 1px solid #873DC1;
  }
`;

