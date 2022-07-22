import styled from "styled-components";

import { FilterImg } from "./imports";

interface IBanner{
  src: string;
}
export const Banner = styled.div<IBanner>`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  @media (max-width: 576px) {
    height: 60px;
  }
`;
export const Info = styled.ul`
  display: flex;
  border-radius: 0 0 20px 20px;
  box-shadow: inset 0px 0px 3px rgba(135, 61, 193, 0.25);
  background-color: #fff;
  overflow: hidden;
  max-height: 80px;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    max-height: unset;
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
  border: 1px solid rgba(124, 124, 124, 0.25);
  &.small-vol {
    border-radius: 0 0 20px 0;
  }
  &.large-items {
    border-radius: 0 0 0 20px;
  }
  @media (max-width: 576px) {
    width: 50%;
    &.small-floor {
      border-radius: 0 0 0 20px;
    }
    &.large-items {
      border-radius: 0px;
    }
  }
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

export const InfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 740px;
  flex-wrap: wrap;
  margin-right: auto;
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: max-content;
  }
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
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: block;
    margin-top: 50px;
  }
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
export const ContainerCollection = styled.div``;
export const ContainerNFT = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  padding-bottom: 40px;
`;
export const MyWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  align-self: center;
`;
