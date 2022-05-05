import styled from "styled-components";
import time from '../../../../images/image-AllNFTPage/time.svg'
import "./settings-tabs.css"

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