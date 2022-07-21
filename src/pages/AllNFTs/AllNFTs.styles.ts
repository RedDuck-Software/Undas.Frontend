import styled from "styled-components";

import { Container } from "../../globalStyles";
import Search from "../../pages/CollectionPage/assets/search.svg";

export const AllNFTContainer = styled(Container)`
  display: flex;
  ${Container}
`;
interface IMenuWrap {
  marg?: string;
  justifyContent?: string;
}

export const MenuWrap = styled.div<IMenuWrap>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: center;
  margin: ${(props) => props.marg || "60px 0 40px"};
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    margin: 40px 0 30px;
  }
  @media (max-width: 576px) {
    margin: 20px 0 20px;
  }
`;
export const TitleWrap = styled.div`
  padding-top: 60px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
  @media (max-width: 576px) {
    padding-top: 20px;
  }
`;
interface IMenuSearch {
  mw?: string;
  marginLeft?: string;
}
export const MenuSearchWrap = styled.input<IMenuSearch>`
  margin-left: ${(props) => props.marginLeft || "30px"};
  padding-left: 50px;
  display: flex;
  align-items: center;
  max-width: ${(props) => props.mw || "410px"};
  width: 33%;
  height: 36px;
  box-shadow: inset 0px 0px 5px rgb(124, 124, 124, 0.5);
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 12px;
  line-height: 15px;
  background: #fff url(${Search}) no-repeat 20px center;
  &:focus {
    box-shadow: inset 0px 0px 5px rgb(135, 61, 193);
  }
  @media (max-width: 1200px) {
    order: 1;
    flex: 0 0 100%;
    margin-bottom: 20px;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const ResultsTotal = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7c7c7c;
  @media (max-width: 1200px) {
    order: 3;
  }
  @media (max-width: 576px) {
    flex: 0 0 100%;
    text-align: right;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const SettingsBlock = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
  @media (max-width: 1200px) {
    order: 2;
    flex: 0 0 70%;
  }
  @media (max-width: 768px) {
    flex: 0 0 50%;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    flex: 0 0 100%;
  }
`;
export const ViewOption = styled.div`
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  height: 36px;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const ViewButton = styled.button`
  cursor: pointer;
  background: #ffffff;
  width: 36px;
  height: 36px;
  border: none;
  box-sizing: border-box;
  &:hover {
    background: #fbf5ff;
  }
  &.grid-active {
    background-color: #edd2ff;
  }
`;
export const Filter = styled.ul`
  width: 160px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
  //overflow: hidden;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7c7c7c;
  &.price-active {
    border-radius: 10px 10px 0 0;
  }
  &.event-active {
    border-radius: 10px 10px 0 0;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const FilterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: all ease-in-out 0.15s;
  &:hover {
    background: #fbf5ff;
  }
`;

interface IMenuItem {
  hover?: boolean;
}

export const MenuItem = styled(FilterItem)<IMenuItem>`
  &:hover {
    ${(props) =>
      props.hover
        ? "box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5), inset 0px -3px 4px rgba(124, 124, 124, 0.25);"
        : ""}
  }
`;
export const Arrow = styled.span`
  margin-top: 4px;
  border-top: 1px solid #5d3f92;
  border-left: 1px solid #5d3f92;
  transform: rotate(45deg);
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
  &.price-active {
    margin-top: -4px;
    transform: rotate(-135deg);
  }
  &.event-active {
    margin-top: -4px;
    transform: rotate(-135deg);
  }
`;
export const FilterMenu = styled.ul`
  position: absolute;
  z-index: 2;
  width: 160px;
  background: #ffffff;
  box-shadow: inset 0 0 1px rgba(135, 61, 193, 0.5);
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 0.15s;
  &.price-active {
    visibility: visible;
    opacity: 1;
  }
  &.event-active {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const FilterTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #5d3f92;
`;
export const SettingsElement = styled.li``;

export const GridLayout = styled.div`
  display: grid;
  grid-gap: 30px 15px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 786px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  }
`;

export const ContainerFilters = styled.div`
  width: 100%;
`;
