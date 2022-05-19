import styled from 'styled-components';

import { ethereum, und, hourglass } from './imports';

export const ButtonOffer = styled.button`
  position: absolute;
  background: #ffffff;
  border: 1px solid #873dc1;
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
  color: #873dc1;
`;
export const FormButton = styled.button`
  height: 36px;
  width: 250px;
`;
export const MakeOfferText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #232428;
  width: 100%;
`;
export const ItemText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
`;
export const NameNFT = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
`;
export const NumberText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  margin-left: 375px;
`;
export const NFTImg = styled.img`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;
export const NFTImgCol = styled.img`
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
`;
export const NFTImgCol1 = styled.img`
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
`;
export const NFTImgCol2 = styled.img`
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
`;
export const NFTImgCol3 = styled.img`
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
`;
export const NFTImgCol4 = styled.img`
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
`;
export const AllNftUser = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-top: 40px;
`;
export const ButtonAddNFT = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
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
`;
export const Plus = styled.span`
  color: rgba(124, 124, 124, 0.5);
  font-size: 40px;
  line-height: 36px;
  font-weight: 1;
  left: 10px;
  top: -2px;
  position: absolute;
  color: #7c7c7c;
`;
export const TextAllNFT = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  position: absolute;
  left: 38px;
  top: 7px;
`;
export const ButtonClear = styled.button`
  position: absolute;
  width: 56px;
  height: 17px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
  border: none;
  background: transparent;
  top: 200px;
  right: 20px;

  &:hover {
    color: #873dc1;
  }
`;
export const CollectionNFT = styled.div`
  width: 290px;
  height: 150px;
  left: 471px;
  top: 527px;
  background: #ebdfff;
  border-radius: 10px;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;

  &:hover {
    box-shadow: 0px 13px 15px rgba(124, 124, 124, 0.25);
  }
`;
export const CollectionNFTTwo = styled.div`
  width: 290px;
  height: 150px;
  left: 471px;
  top: 527px;
  background: #ebdfff;
  border-radius: 10px;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;

  &:hover {
    box-shadow: 0px 13px 15px rgba(124, 124, 124, 0.25);
  }
`;
export const CollectionNFTImg = styled.img`
  width: 160px;
  height: 140px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 5px;
`;
export const CollectionNftText = styled.span`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  top: 275px;
  left: 205px;
`;
export const UNDText = styled.div`
  position: absolute;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  top: 305px;
  left: 225px;

  &:before {
    content: url(${und});
    right: 36px;
    width: 10px;
    position: absolute;
  }
`;
export const Name = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  position: absolute;
  top: 330px;
  left: 205px;
`;
export const CollectionNftTextRight = styled.span`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  top: 275px;
  left: 510px;
`;
export const UNDTextRight = styled.div`
  position: absolute;
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  color: #873dc1;
  top: 305px;
  left: 530px;

  &:before {
    content: url(${und});
    right: 36px;
    width: 10px;
    position: absolute;
  }
`;
export const NameRight = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #873dc1;
  position: absolute;
  top: 330px;
  left: 510px;
`;
export const Slider = styled.div`
  margin-top: 10px;
`;
export const BtnRight = styled.img`
  width: 36px;
  height: 36px;
`;
export const BtnLeft = styled.img`
  width: 36px;
  height: 36px;
  margin-top: -40px;
  margin-left: 585px;
`;
export const SliderLine = styled.div`
  width: 260px;
  height: 3px;
  background: rgba(124, 124, 124, 0.5);
  margin-left: 60px;
  margin-top: -17px;
`;
export const OfferDiv = styled.div`
  width: 595px;
  height: 300px;
  background: transparent;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px solid #e6e6e6;
`;
export const PriceText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  margin-top: 30px;
  display: block;
`;
export const BlockBtnAmmount = styled.div`
  height: 36px;
  background: #ffffff;
  border-radius: 10px 10px 10px 10px;
  border: 1px solid #e6e6e6;
  width: 100%;
  margin-top: 20px;
`;
export const EthText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  position: absolute;
  top: 8px;

  &:before {
    content: url(${ethereum});
    padding-right: 10px;
  }
`;
export const AmmountInput = styled.input`
  width: 60%;
  height: 36px;
  background: #ffffff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border: 1px solid #e6e6e6;
  margin-top: -1px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  padding-left: 20px;

  &:focus {
    outline: none !important;
    border: 3px solid #e6e6e6;
    box-shadow: none;
  }
`;
export const SumUSD = styled.div`
  width: 15%;
  height: 36px;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  border: none;
  display: contents;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
`;
export const USDText = styled.span`
  padding-left: 30px;

  &:before {
    content: '$';
    padding-right: 10px;
  }
`;
export const DayText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  position: absolute;
  left: 20px;
  top: 8px;
`;
export const PmAmText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  padding-left: 220px;
`;
export const TimeText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  position: relative;
  padding-left: 45px;

  &:before {
    content: url(${hourglass});
    left: 20px;
    position: absolute;
    top: 0px;
  }
`;
export const CheckboxInput = styled.input`
  margin-right: 5px;

  &.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &.custom-checkbox + label {
    margin-top: 40px;
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
  }
  &.custom-checkbox + label::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #5d3f92;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::before {
    background-color: #ffffff;
  }
  &.custom-checkbox:checked + label::after {
    content: '';
    width: 6px;
    height: 8px;
    border-bottom: 1px solid #5d3f92;
    border-right: 1px solid #5d3f92;
    transform: skew(-10deg) rotate(45deg);
    position: absolute;
    top: 6px;
    left: 5px;
  }

  &.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
    box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  }
`;
export const CheckboxLabel = styled.label`
  width: 100%;
  &:hover {
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
  }
`;
export const LinkAgreement = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #893ac2;
  text-decoration: none;
  padding-left: 4px;

  &:hover {
    color: #893ac2;
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
  }
`;
export const BtnMakeOffer = styled.button`
  width: 160px;
  height: 36px;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    #873dc1;
  border-radius: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;

  &:hover {
    color: #893ac2;
    text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
  }
`;
export const ModalNftDiv = styled.div``;
