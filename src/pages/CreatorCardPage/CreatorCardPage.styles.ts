import styled from "styled-components";

import { back } from "./imports";

export const Back = styled.div`
  width: 100%;
  height: 50px;
  background: #fbf5ff;
  box-shadow: inset 0px 0px 2px #7c7c7c;
`;
export const BackText = styled.div`
  width: 100%;
  max-width: 80rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #873dc1;
  max-width: 80rem;
  margin: 0 auto;
  padding: 14px 3rem;

  &::before {
    content: url(${back});
    vertical-align: middle;
    padding-right: 12px;
  }
`;
export const ListOnMarket = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #232428;
  display: block;
  margin-top: 40px;
  text-align: left;
`;
