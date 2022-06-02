import styled from "styled-components";

import { FilterImg } from "./imports";

export const Info = styled.ul`
  display: flex;
  border-radius: 0 0 20px 20px;
  box-shadow: inset 0px 0px 3px rgba(135, 61, 193, 0.25);
  background-color: #fff;
  overflow: hidden;
  max-height: 80px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const InfoBlock = styled.div`
  display: none;
  box-shadow: inset 0px 0px 3px rgba(135, 61, 193, 0.25);
  background-color: #fff;
  max-height: 80px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const InfoSmallBorder = styled.div`
  display: none;
  box-shadow: inset 0px 0px 3px rgba(135, 61, 193, 0.25);
  background-color: #fff;
  max-height: 80px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0 0 20px 20px;

  @media (max-width: 576px) {
    display: flex;
  }
`;

export const InfoElement = styled.li`
  padding: 16px 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  text-align: center;
`;

export const Amount = styled.span`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #232428;

  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const MakeComplaint = styled.button`
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  border: none;
  margin-top: 44px;
  max-height: 36px;
  cursor: pointer;
`;

export const AddToFav = styled.button`
  margin-top: 52px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  border: none;
  margin-top: 44px;
  max-height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 18px;
  max-height: 36px;
  cursor: pointer;
  align-self: end;
  min-width: 200px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const InfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 740px;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: max-content;
  }
`;

export const ViewOptionCollection = styled.div`
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

interface IMenuSearch {
  mw?: string;
  marginLeft?: string;
}

export const MenuSearchWrapSmall = styled.div<IMenuSearch>`
  padding-left: 20px;
  display: none;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #fff;
  box-shadow: inset 0px 0px 3px rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  border: none;
  margin-top: 20px;

  @media (max-width: 1200px) {
    display: flex;
  }
`;

export const DisplayNone = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SettingsBlockCollection = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  @media (max-width: 992px) {
    gap: 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    display: block;
  }
`;

export const FilterNewly = styled.ul`
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

  @media (max-width: 1200px) {
    margin-left: 30px;
  }
  @media (max-width: 768px) {
    width: 47%;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-left: unset;
    margin-top: 15px;
  }
`;

export const Results = styled.div`
  display: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  margin-top: 11px;
  position: absolute;
  right: 0;

  @media (max-width: 1200px) {
    display: inline-block;
  }
  @media (max-width: 768px) {
    margin-top: 68px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const TextResult = styled.span`
  text-align: right;
`;

interface IMenuWrap {
  marg?: string;
  justifyContent?: string;
}

export const MenuWrapCollection = styled.div<IMenuWrap>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent || ""};
  align-items: center;
  margin: ${(props) => props.marg || "64px 0 20px"};

  @media (max-width: 1200px) {
    margin: 20px 0 20px 0;
  }
`;

export const FilterSelected = styled.div`
  width: 180px;
  height: 36px;
  background: #fbf5ff;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.5);
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  display: inline-block;
`;

export const SelectedFiltersCollection = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const DispS = styled.div`
  min-width: 30px;
  max-width: 30px;
  height: auto;
  background: rgba(251, 245, 255, 0.7);
  box-shadow: inset 0 0 3px rgb(124 124 124 / 50%);
  margin-right: 15px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterPrice = styled.ul`
  width: 160px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
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
  @media (max-width: 768px) {
    width: 47%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const FilterButton = styled.div`
  height: 36px;
  width: 240px;
  background: #ccb7f2;
  box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
  border-radius: 10px;
  display: none;
  text-align: center;
  padding-top: 6px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 576px) {
    width: 120px;
  }
`;

export const FilterText = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  &::before {
    content: url(${FilterImg});
    vertical-align: middle;
    padding-right: 5px;
  }
`;

export const HeadWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1200px) {
    display: block;
    margin-top: 50px;
  }
`;

export const ItemsOwners = styled.div`
  width: 50%;
  height: 50px;
  text-align: center;
`;

export const TextInfo = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  text-align: center;
  color: #7c7c7c;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ContainerCollection = styled.div`
  margin-bottom: 40px;
`;

export const ResultsSmallSize = styled.div`
  display: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #7c7c7c;
  position: relative;
  margin-bottom: 5px;

  @media (max-width: 576px) {
    display: block;
  }
`;
