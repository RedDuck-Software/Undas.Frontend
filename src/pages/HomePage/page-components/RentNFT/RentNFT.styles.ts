import styled from "styled-components";

import violetLine from "../../../../icons/violet-line.svg";

export const TitleInner = styled.div`
  display: flex;
  align-items: center;
`;
export const TitleLink = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #873DC1;
  margin-left: 20px;
  &:hover{
    color: #873DC1;
    text-shadow: 0 0 1px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const RentNFTSec = styled.div`
  padding: 4rem 0 8rem;

  @media (max-width: 801px) {
    padding: 0;
  }
`;

export const RentNFTTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 400;
  color: #000000;
  margin-left: 0.5rem;

  &:before {
    content: url("${violetLine}");
    position: relative;
    right: 8px;
    top: 3px;
  }

  @media (max-width: 1009px) {
    font-size: 2.4rem;
  }

  @media (max-width: 801px) {
    font-size: 1.4rem;

    &:before {
      right: 8px;
      top: 0.6rem;
    }
  }

  @media (max-width: 574px) {
    &:before {
      content: none;
    }

    display: flex;
    justify-content: center;
    margin-left: 0;
  }

  @media (max-width: 369px) {
    font-size: 1.15rem;
  }
`;

export const RentNFTWrapper = styled.div`
  padding: 3.75rem 0;

  @media (max-width: 801px) {
    padding: 2rem 0;
  }
`;

export const RentNFTItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 93%;
  height: 93%;
  border-radius: 10px;
  position: relative;
  border: 1px solid #edd2ff;
  box-shadow: 0px 4px 10px rgba(93, 63, 146, 0.5);
  margin-bottom: 1rem;

  @media (max-width: 574px) {
    max-width: 275px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const BlackLayer = styled.div`
  &::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 35%;
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 10px 10px;
  }
`;

export const RentNFTItemText = styled.span`
  color: #fff;
  font-size: 1rem;
  position: absolute;
  z-index: 2;
  margin-bottom: 10%;

  @media (max-width: 1009px) {
    margin-bottom: 6%;
  }

  @media (max-width: 680px) {
    margin-bottom: 10%;
    font-size: 0.85rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  @media (max-width: 574px) {
    margin-top: 0rem;
    margin-bottom: 2rem;
  }
`;
