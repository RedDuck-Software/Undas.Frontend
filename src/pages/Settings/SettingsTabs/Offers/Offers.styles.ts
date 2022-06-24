import styled from "styled-components";

import { InformIco } from "./imports";

export const OffersWrap = styled.div`
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
  @media (max-width: 576px) {
    padding-top: 20px;
  }
`;

export const OffersTitleWrap = styled.div``;

export const OffersHeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const DescriptionTextWrap = styled.div`
  display: flex;
`;

export const InformationButton = styled.button`
  width: 16px;
  height: 16px;
  background: url(${InformIco}) center / cover;
  border: none;
  outline: none;
  margin-left: 10px;
`;

export const OffersContentWrap = styled.div`
  height: 480px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 1px #7c7c7c;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0;
  @media (max-width: 768px) {
    height: 380px;
  }
  @media (max-width: 576px) {
    height: 200px;
  }
`;

export const OffersContentText = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
