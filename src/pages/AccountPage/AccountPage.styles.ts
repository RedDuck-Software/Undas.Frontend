import styled from "styled-components";

import { Container } from "../../globalStyles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

export const AccountWrapper = styled(Wrapper)`
  width: 100%;
  ${Wrapper}
`;

export const AccountContainer = styled(Container)`
  display: flex;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${Container}
`;

export const TabsMenu = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;
  max-width: 70%;
  justify-content: flex-end;
  @media (max-width: 992px) {
    max-width: 100%;
    margin: 30px auto 0;
  }
  @media (max-width: 850px) {
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 576px) {
    margin-top: 15px;
  }
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
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 20px;
  cursor: pointer;
  color: #232428;
  transition: all 0.3s;
  &:hover{
    background: #fbf5ff;
  }
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 992px) {
    width: 32%;
  }
  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SmallNumber = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: #232428;
  margin-left: auto;
`;
export const FavouriteWrap = styled.div`
  padding-bottom: 80px;
  @media (max-width: 992px) {
    padding-bottom: 40px;
  }
  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
  @media (max-width: 576px) {
    padding-bottom: 0;
  }
`;
