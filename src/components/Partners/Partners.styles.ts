import styled from "styled-components";

import {
  Partner1,
  Partner1Colored,
  Partner2,
  Partner2Colored,
} from "./imports";

export const Wrap = styled.div`
  width: 100%;
  background-color: #e2d1ff;
  height: 100px;
`;

export const PartnersWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const FirstPartner = styled.a`
  margin-top: 10px;
  display: block;
  background: url(${Partner1}) no-repeat center/contain;
  height: 80px;
  width: 60px;
  transition: all 0.5s ease-in;
  &:hover {
    background: url(${Partner1Colored}) no-repeat center/contain;
  }
  @media (max-width: 576px) {
    width: 40px;
  }
`;
export const SecondPartner = styled.a`
  margin-top: 10px;
  display: block;
  background: url(${Partner2}) no-repeat center/contain;
  height: 30px;
  width: 120px;
  transition: all 0.5s ease-in;
  &:hover {
    background: url(${Partner2Colored}) no-repeat center/contain;
  }
  @media (max-width: 576px) {
    width: 80px;
  }
`;
