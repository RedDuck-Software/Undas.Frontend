import styled from "styled-components";

import { Button } from "../../../../globalStyles";
import Rhombus from "../../../../icons/rhombus.svg";

export const ForSaleWrapper = styled.div`
  position: relative;

  @media (max-width: 589px) {
    max-width: 100%;
  }
`;

export const ForSaleButton = styled(Button)`
  height: 100%;
  width: 100%;

  ${Button};
`;

export const ForSaleDropdown = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #5d3f92;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  position: absolute;
  margin-top: 2%;

  display: flex;
  flex-direction: column;

  z-index: 99;

  @media (max-width: 539px) {
    font-size: 0.85rem;
    padding: 5%;
  }

  @media (max-width: 389px) {
    width: 187px;

    div {
      &:nth-child(3) {
        button {
          width: 167px;
        }
      }
    }
  }
`;

export const DropdownLine = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
  gap: 1rem;

  &:nth-child(1) {
    @media (max-width: 539px) {
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 389px) {
    margin-bottom: 0;
  }
`;

export const DropdownPrice = styled.span`
  &:after {
    content: url("${Rhombus}");
    position: relative;
    top: 6px;
    left: 4px;
  }
`;

export const DropdownInput = styled.input`
  max-width: 60px;

  background: #ffffff;
  border: 1px solid #5d3f92;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;

  text-align: center;
  font-size: 1rem;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: #000000;

    @media (max-width: 539px) {
      font-size: 0.85rem;
    }
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 539px) {
    max-width: 40px;
  }
`;

export const DropdownButton = styled(Button)`
  width: 100%;
  margin-top: 6%;

  padding: 0.4rem 4.6rem;

  ${({ disabled }) =>
    disabled
      ? `background: #D8D8D8;
          border: 1px solid #5D3F92;
          box-sizing: border-box;
          border-radius: 5px;
          cursor: auto; 
          
          &:hover {
            background: #D8D8D8;
          }
          `
      : ""}

  ${Button}
`;

export const ForSaleMenu = styled.div`
  position: fixed;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);

  background: #ffffff;
  border: 1px solid #5d3f92;
  box-sizing: border-box;
  border-radius: 20px;

  max-width: 730px;
  max-height: 429px;
  padding: 2.25rem;
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.5);

  z-index: 99;

  @media (max-width: 999px) {
    padding: 3%;
  }

  @media (max-width: 899px) {
    min-width: 320px;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
`;

export const ItemImage = styled.img`
  flex: 1;
  display: flex;

  width: 40%;

  border-radius: 10px;

  @media (max-width: 374px) {
    display: none;
  }
`;

export const AuctionDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MenuLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6% 0;
  margin-right: 0%;

  font-size: 1.25rem;

  &:nth-child(3) {
    padding: 0% 0 6%;
  }

  &:nth-child(4) {
    @media (max-width: 729px) {
      display: flex;
      align-items: center;

      span {
        max-width: 60%;
      }
    }
  }

  @media (max-width: 954px) {
    font-size: 1.1rem;
  }

  @media (max-width: 539px) {
    font-size: 1rem;
  }
`;

export const MenuPrice = styled.span`
  display: flex;

  &:before {
    content: url("${Rhombus}");
    position: relative;
    top: 3px;
    right: 6px;
    padding-left: 1rem;
  }
`;

export const MenuAgreementLine = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;

  @media (max-width: 539px) {
    padding: 6% 0 2%;
  }

  @media (max-width: 531px) {
    font-size: 0.85rem;
  }
`;

export const MenuInput = styled.input`
  margin-right: 2%;

  width: 1.5rem;
  height: 1.5rem;
  color: dodgerblue;
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: #ffffff;
  transition: background 300ms;
  cursor: pointer;

  &::before {
    content: "";
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 0;
    background-color: transparent;
    background-size: contain;
    box-shadow: inset 0 0 0 1px #ccd3d8;
  }

  &:checked {
    background-color: #893ac2;
  }

  &:checked::before {
    box-shadow: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  }

  @media (max-width: 539px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const AgreementLink = styled.a`
  cursor: pointer;
  padding: 0 1%;
  color: #0051ca;
  border-bottom: 1.5px solid #0051ca;
`;

export const MenuButtonsWrapper = styled.div`
  display: flex;
  gap: 4%;

  ${Button} {
    width: 100%;

    &.disabled {
      cursor: auto;
      background: #c4c4c4;
      box-shadow: inset 0px 4px 4px rgba(53, 53, 53, 0.31);
      border-color: #c4c4c4;
      color: #fff;
    }
  }

  @media (max-width: 539px) {
    margin-top: 5%;
  }
`;
