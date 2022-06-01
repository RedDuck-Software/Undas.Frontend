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

export const TitleText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #232428;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const TabsMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 40px;
`;

export const Tab = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 30%;
  max-height: 36px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px 0 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #5d3f92;
  max-width: 160px;
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
`;

export const TabCastom = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  width: 30%;
  max-height: 36px;
  background: #ffffff;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 0 10px 10px 0;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #5d3f92;
  max-width: 160px;
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
`;

export const TextOffer = styled.span`
  margin-left: auto;
  margin-right: auto;
`;
