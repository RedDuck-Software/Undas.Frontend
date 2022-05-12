import styled from "styled-components";

import { ReactComponent as Search } from "../../icons/search.svg";
import {Container} from "../../globalStyles";
import {Link} from "react-router-dom";
import { Wrapper } from "../CategoriesPage/Categories.styles";

export const AccountWrapper = styled(Wrapper) `
  width: 100%;
  ${Wrapper}
`

export const AccountContainer = styled(Container) `
  display: flex;
  ${Container}
`

export const TabsMenu = styled.ul `
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;
  max-width: 765px;
  //margin-left: 335px;
`

export const Tab = styled.li `
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 17vw;
  max-height: 36px;
  background: #FFFFFF;
  box-shadow: 0 0 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 20px;
  cursor: pointer;
  color: #232428;
`

export const SmallNumber = styled.span `
  font-weight: 500;
  font-size: 10px;
  color: #232428;
  margin-left: auto;
`;
export const FavouriteWrap = styled.div`
  padding-bottom: 120px;
`;