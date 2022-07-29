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
  background-color: #ebdfff;
  @media (max-width: 576px) {
    height: 60px;
  }
`;
export const HeadWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 1200px) {
    display: block;
    margin-top: 50px;
  }
`;
export const BodyWrapper = styled.div`
  display: flex;
`;
export const ContentWrap = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
export const InfoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 740px;
  flex-wrap: wrap;
  margin: 0 auto;

  @media (max-width: 1200px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 100%;
  }
`;
export const Info = styled.ul`
  position: relative;
  display: flex;
  border-radius: 0 0 20px 20px;
  background-color: #fff;
  overflow: hidden;
  height: 110px;
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
  justify-content: space-around;
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  text-align: center;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-right: none;
  &:last-child {
    border-right: 1px solid rgba(124, 124, 124, 0.25);
  }
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
export const SocialWrap = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  svg {
    cursor: pointer;
  }

  & svg:hover path {
    fill: #873dc1;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    gap: 20px;
  }
  @media (max-width: 576px) {
    gap: 10px;
  }
`;
export const MoreInfo = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  display: none;
  padding: 9px 16px;
  margin-left: auto;
  @media (max-width: 576px) {
    display: inline-block;
  }
`;
export const MakeComplaint = styled.button`
  background-color: #fff;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 5px 15px;
  border: 1px solid #873dc1;
  margin-top: 18px;
  width: 100%;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    font-size: 14px;

    margin-top: 10px;
  }
`;
export const ContainerPopUp = styled.div`
  height: 160px;
  width: 350px;
  background: #ffffff;
  border: 1px solid #7c7c7c;
  transform: matrix(1, 0, 0, -1, 0, 0);
  margin-left: -75px;
  margin-top: 11px;
  border-radius: 10px;
  z-index: 500;
  &::before {
    content: "";
    position: absolute;
    left: 270px;
    top: -20px;
    border: 10px solid transparent;
    border-top: 10px solid #7c7c7c;
    transform: rotate(180deg);
  }
  &::after {
    content: "";
    position: absolute;
    left: 270px;
    top: -20px;
    border: 10px solid transparent;
    border-top: 10px solid #7c7c7c;
    transform: rotate(180deg);
  }
  &::after {
    border-top: 10px solid white;
    top: -18.5px;
  }
  @media (max-width: 576px) {
    width: 95%;
    margin-left: unset;
  }
`;
export const InputTextArea = styled.textarea`
  width: 320px;
  border: none;
  margin: 20px 15px 0px;
  padding: 8px;
  height: 90px;
  resize: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #232428;
  &:focus {
    box-shadow: 0px 0px 5px rgb(135 61 193 / 50%);
    border: none;
    outline: none;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const SendButton = styled.button`
  width: 90px;
  height: 36px;
  background: #873dc1;
  border-radius: 5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  margin-right: 15px;
  float: right;
  border: none;
  &:hover {
    color: #873dc1;
    background: #ffffff;
    border: 1px solid #873dc1;
  }
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
`;
export const CollectionDescript = styled.div<{ opacity?: boolean }>`
  display: flex;
  flex-direction: column;
  height: ${({ opacity }) => (opacity ? "auto" : "70px")};
  //z-index: ${({ opacity }) => (opacity ? 4 : -100)};
  position: ${({ opacity }) => (opacity ? "" : "relative")};
  //transition: all 0.5s;
  width: 100%;
  overflow: hidden;
  top: ${({ opacity }) => (opacity ? "90px" : "0")};
  left: 0;
  background-color: ${({ opacity }) => (opacity ? "#fff" : "transparent")};
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
`;
export const MyWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  align-self: center;
`;
