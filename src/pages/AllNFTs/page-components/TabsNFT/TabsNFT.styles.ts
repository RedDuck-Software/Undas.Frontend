import styled from "styled-components";

import "./tabs-nft.css"

import {  
  ethereum,
  time,
} from './imports';

export const InputTypeYourBid = styled.input `
position: absolute;
background: #FFFFFF;
border: 1px solid #873DC1;
border-radius: 10px;
width: 170px;
height: 36px;
bottom: 50px;
left: 150px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 17px;
color: #873DC1;
padding-left: 10px;

&:focus {
  outline: none !important;
  border:3px solid #873DC1;;
  box-shadow: 0 0 10px #719ECE;
}
`
export const ReturneText = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #232428;
margin-left: 20px;
display: inline-block;
padding-top: 10px;
`
export const ButtonRent = styled.button `
position: absolute;
background: #873DC1;
border-radius: 10px;
width: 120px;
height: 36px;
bottom: 50px;
left: 15px;
border: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`
export const ButtonRentSale = styled.button `
position: absolute;
background: #873DC1;
border-radius: 10px;
width: 120px;
height: 36px;
bottom: 50px;
left: 15px;
border: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
`
export const ButtonOffer = styled.button `
position: absolute;
background: #FFFFFF;
border: 1px solid #873DC1;
border-radius: 10px;
width: 120px;
height: 36px;
bottom: 50px;
left: 150px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #873DC1;
`
export const ButtonBid = styled.button `
position: absolute;
background: #FFFFFF;
border: 1px solid #873DC1;
border-radius: 10px;
width: 120px;
height: 36px;
bottom: 50px;
left: 333px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #873DC1;
`
export const SpanSale = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
position: absolute;
top: 40px;
left: 48px;

&:before {
  content: url(${time});
  position: absolute;
  left: -30px;
}
`
export const RowDown = styled.div `
height: 36px;
position: absolute;
background-color: #ffffff;
width: 101.16%;
padding-right: 10px;
bottom: 0;
border-radius: 0px 0px 10px 0px;
`
export const DivDeposit = styled.div `
height: 36px;
width: 25%;
position: absolute;
background-color: #ffffff;
border-left-color: #E2D1FF;
border-left-style: solid;
border-left-width: 1px;
`
export const DepositText = styled.span `
position: absolute;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #232428;
margin-left: 15px;
margin-top: 11px;
`
export const EthereumText = styled.div `
position: absolute;
right: 10px;
top: 11px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #232428;

&:before {
  content: url(${ethereum});
  position: absolute;
  left: -15px;
}
`
export const DivPrice = styled.div `
height: 36px;
width: 25%;
position: absolute;
background-color: #ffffff;
border-left-color: #E2D1FF;
border-left-style: solid;
border-left-width: 1px;
left: 25%;
`
export const DivPeriod = styled.div `
height: 36px;
width: 25%;
position: absolute;
background-color: #ffffff;
border-left-color: #E2D1FF;
border-left-style: solid;
border-left-width: 1px;
left: 50%;
`
export const PeriodText = styled.div `
position: absolute;
right: 10px;
top: 11px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #232428;
`
export const DivLastSales = styled.div `
height: 36px;
width: 25%;
position: absolute;
background-color: #ffffff;
border-left-color: #E2D1FF;
border-left-style: solid;
border-left-width: 1px;
left: 75%;
border-radius: 0px 0px 10px 0px;
`
export const BtnMakeOffer = styled.button`
width: 160px;
height: 36px;
background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #873DC1;
border-radius: 10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #FFFFFF;

&:hover{
  color: #893AC2;
  text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
}
`
