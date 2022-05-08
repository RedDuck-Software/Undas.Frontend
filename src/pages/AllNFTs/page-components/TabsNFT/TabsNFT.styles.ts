import styled from "styled-components";
import time from '../../../../images/image-AllNFTPage/time.svg'
import "./tabs-nft.css"

import {  
  ethereum,
  und, } from './imports';

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
export const FormButton = styled.button `
height: 36px;
width: 250px;
`
export const MakeOfferText = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
text-align: center;
color: #232428;
width: 100%;
`

export const ItemText = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #232428;
`

export const NameNFT = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #873DC1;
`
export const NumberText = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #7C7C7C;
margin-left: 375px;
`
export const NFTImg = styled.img `
margin-top:10px;
width: 80px;
height: 80px;
border-radius: 10px;

`
export const NFTImgCol = styled.img `
width: 100px;
height: 100px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
position: absolute;
right: 30px;
top: 60px;
z-index: 5;

&:hover {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
`
export const NFTImgCol1 = styled.img `
width: 100px;
height: 100px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
position: absolute;
right: 30px;
top: 60px;
z-index: 4;

&:hover {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
`
export const NFTImgCol2 = styled.img `
width: 100px;
height: 100px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
position: absolute;
right: 40px;
top: 60px;
z-index: 3;

&:hover {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
`
export const NFTImgCol3 = styled.img `
width: 100px;
height: 100px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
position: absolute;
right: 50px;
top: 60px;
z-index: 2;

&:hover {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
`
export const NFTImgCol4 = styled.img `
width: 100px;
height: 100px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 10px;
position: absolute;
right: 60px;
top: 60px;
z-index: 1;

&:hover {
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
}
`


export const AllNftUser = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
margin-top: 40px;
`
export const ButtonAddNFT = styled.button `
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
position: absolute;
width: 120px;
height: 36px;
background: rgba(255, 255, 255, 0.5);
border-radius: 10px;
right: 100px;
top: 190px;
border-color: #f0f0f0;

&:hover {
  background-color: #cccccc;
  color: white;
}
`
export const Plus = styled.span `
color: rgba(124, 124, 124, 0.5);;
font-size: 40px;
line-height: 36px;
font-weight: 1;
left: 10px;
top: -2px;
position: absolute;
color: #7C7C7C;
`
export const TextAllNFT = styled.span `
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
position: absolute;
left: 38px;
top: 7px;


`

export const ButtonClear = styled.button `
position: absolute;
width: 56px;
height: 17px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #5D3F92;
border: none;
background: transparent;
top: 200px;
right: 20px;

&:hover {
  color: #873DC1;
}
`
export const CollectionNFT = styled.div `
width: 290px;
height: 150px;
left: 471px;
top: 527px;
background: #EBDFFF;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-top: 15px;

&:hover {
box-shadow: 0px 13px 15px rgba(124, 124, 124, 0.25);
}
`
export const CollectionNFTTwo = styled.div `
width: 290px;
height: 150px;
left: 471px;
top: 527px;
background: #EBDFFF;
border-radius: 10px;
display: inline-block;
margin-left: 15px;
margin-top: 15px;

&:hover {
box-shadow: 0px 13px 15px rgba(124, 124, 124, 0.25);
}
`
export const CollectionNFTImg = styled.img `
width: 160px;
height: 140px;
border-radius: 10px;
margin-top: 5px;
margin-left: 5px;
`

export const CollectionNftText = styled.span `
position: absolute;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
top: 275px;
left: 205px;
`
export const UNDText = styled.div `
position: absolute;
font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
text-align: center;
color: #873DC1;
top: 305px;
left: 225px;

&:before {
  content: url(${und});
  right: 36px;
  width: 10px;
  position: absolute;
}
`
export const Name = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #873DC1;
position: absolute;
top: 330px;
left: 205px;
`
export const CollectionNftTextRight = styled.span `
position: absolute;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #7C7C7C;
top: 275px;
left: 510px;
`
export const UNDTextRight = styled.div `
position: absolute;
font-family: 'Jost';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 17px;
text-align: center;
color: #873DC1;
top: 305px;
left: 530px;

&:before {
  content: url(${und});
  right: 36px;
  width: 10px;
  position: absolute;
}
`
export const NameRight = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;
color: #873DC1;
position: absolute;
top: 330px;
left: 510px;
`
export const Slider = styled.div `
margin-top: 10px;
`
export const BtnRight = styled.img `
width:36px;
height:36px;

`
export const BtnLeft = styled.img `
width:36px;
height:36px;
margin-top: -40px;
margin-left: 585px;
`
export const SliderLine = styled.div `
width: 260px;
height: 3px;
background: rgba(124, 124, 124, 0.5);
margin-left: 60px;
margin-top: -17px;

`
export const OfferDiv = styled.div `
width: 595px;
height: 300px;
background: transparent;
margin-left: auto;
margin-right: auto;
border-top: 1px solid #e6e6e6;
`
export const PriceText = styled.span `

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #232428;
margin-top: 30px;
display: block;
`
export const BlockBtnAmmount = styled.div `
height: 36px;
background: #FFFFFF;
border-radius: 10px 10px 10px 10px;
border: 1px solid #e6e6e6;
width: 100%;

`

export const EthText = styled.div `
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #232428;
position: absolute;
top: 9px;

&:before {
  content: url(${ethereum});
  padding-right: 10px;

}
`