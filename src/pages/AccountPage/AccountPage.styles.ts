import styled from "styled-components";

import { Container } from "../../globalStyles";
import { Wrapper } from "../CategoriesPage/Categories.styles";

export const AccountWrapper = styled(Wrapper)`
  width: 100%;
  ${Wrapper}
`;

export const AccountContainer = styled(Container)`
  display: flex;
  ${Container}
`;

export const TabsMenu = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;
  max-width: 765px;
`;

export const Tab = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 17vw;
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
  &.active {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  }
`;

export const SmallNumber = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: #232428;
  margin-left: auto;
`;
export const FavouriteWrap = styled.div`
  padding-bottom: 120px;
`;
