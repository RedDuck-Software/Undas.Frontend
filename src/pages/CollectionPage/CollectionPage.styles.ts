import styled from "styled-components";

import { FilterImg } from "./imports";

interface IBanner {
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

export const InfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 740px;
  flex-wrap: wrap;
  margin-right: auto;
  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 100%;
  }
`;
export const Info = styled.ul`
  display: flex;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  overflow: hidden;
  max-height: 80px;
  margin-left: 20%;
  @media (max-width: 1200px) {
    margin: 0 auto;
  }
  @media (max-width: 576px) {
    max-height: unset;
    flex-wrap: wrap;
    max-width: 90%;
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
export const CollectionDescript = styled.div<{ opacity?: boolean }>`
  height: ${({ opacity }) => (opacity ? "auto" : "70px")};
  z-index: ${({ opacity }) => (opacity ? 4 : -100)};
  position: ${({ opacity }) => (opacity ? "absolute" : "relative")};
  transition: all 0.5s;
  max-width: 740px;
  overflow: hidden;
  top: ${({ opacity }) => (opacity ? "90px" : "0")};
  left: 0;
  background-color: ${({ opacity }) => (opacity ? "#fff" : "transparent")};
  padding: ${({ opacity }) => (opacity ? "0 15px 15px 15px" : "0")};
  border-radius: 10px;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff);
    content: "";
    display: ${({ opacity }) => (opacity ? "none" : "block")};
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;
export const DescriptBtn = styled.button`
  border: none;
  outline: none;
  color: #873dc1;
  background: transparent;
  margin-top: -20px;
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

export const SelectedFiltersCollection = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
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
