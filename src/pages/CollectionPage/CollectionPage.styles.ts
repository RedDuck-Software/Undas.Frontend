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
  background-color: #fff;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #873dc1;
  padding: 6px 18px;
  border: 1px solid #873dc1;
  margin-top: 44px;
  max-height: 36px;
  display: flex;
  align-items: center;
  gap: 18px;
  align-self: end;
  min-width: 200px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #873dc1;
    color: #fff;
  }
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
  justify-content: space-around;

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
export const ContainerCollection = styled.div``;
export const ContainerNFT = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;
  padding-bottom: 40px;
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
`;

export const InputTextArea = styled.textarea`
  width: 320px;
  border: none;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
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
