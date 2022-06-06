import styled from "styled-components";

import BgImgRotate from "../../assets/bg-img-rotate.png";
import BgImg from "../../assets/bg-img.png";

//RewardMenu
export const RewardMenuWrap = styled.div`
  padding: 60px 0;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const HeadWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ContentWrap = styled.div``;
export const ButtonsBlock = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #232428;
  @media (max-width: 992px) {
    text-align: left;
  }
  @media (max-width: 576px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;
export const IntervalInput = styled.input`
  border: none;
  outline: none;
  width: 55px;
  &:focus {
    background-color: #fbf5ff;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  margin-bottom: 0;
  @media (max-width: 992px) {
    font-size: 26px;
    line-height: 31px;
  }
  @media (max-width: 576px) {
    margin-top: 30px;
    font-size: 22px;
    line-height: 27px;
  }
`;
export const Button = styled.button`
  padding: 10px;
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  border-radius: 10px;
  margin-left: 20px;
  min-width: 40px;
  &:hover {
    background: #fbf5ff;
    box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  }
  &.active {
    background: #fbf5ff;
  }
  @media (max-width: 576px) {
    margin-left: 10px;
  }
`;
export const ContentTableWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
  background-color: #fbf5ff;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-position: left bottom;
  box-shadow: 0px 3px 10px rgba(124, 124, 124, 0.5), inset 0px 0px 1px #7c7c7c;
  margin: 40px 0;
  padding: 0 50px;
  &.central-table {
    background-image: url(${BgImgRotate});
  }
  @media (max-width: 1250px) {
    padding: 0 30px;
  }
  @media (max-width: 1100px) {
    gap: 10px;
  }
`;
export const ImageBlock = styled.div`
  padding: 60px 40px 0 0;
  flex: 0 0 7%;
  @media (max-width: 1200px) {
    padding: 60px 0 0;
  }
  @media (max-width: 992px) {
    padding: 0;
  }
`;

export const MainBlock = styled.div`
  width: 400px;
  padding: 40px 10px;
  flex: 1 0 28%;
  @media (max-width: 992px) {
    width: 100%;
    padding: 10px;
    background: url(${BgImg}) no-repeat left bottom;
  }
`;
export const CentralBlock = styled.div`
  padding: 45px 20px 75px;
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.25);
  flex: 0 0 28%;
  @media (max-width: 992px) {
    border: none;
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 20px 10px;
  }
`;
export const RightBlock = styled.div`
  padding: 40px 20px 20px 10px;
  text-align: center;
  flex: 0 0 28%;
  @media (max-width: 992px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 20px 10px;
  }
`;
export const BlockTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #7c7c7c;
`;
export const BlockTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  @media (max-width: 992px) {
    margin-right: auto;
    margin-left: 10px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const BlockValue = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 576px) {
    align-items: flex-end;
  }
`;
export const TextValue = styled.span`
  font-size: 24px;
  line-height: 35px;
  font-weight: 600;
  text-align: right;
  color: #7c7c7c;
  & .number {
    font-size: 48px;
    line-height: 50px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 0.5rem;
    & .number {
      font-size: 20px;
      line-height: 24px;
    }
  }
`;
export const InformButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;
export const BlockContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10px;
`;
export const BlockContentTotal = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7c7c7c;
  margin-right: 30px;
  @media (max-width: 576px) {
    margin-right: 15px;
  }
`;
export const CentralBlockHead = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #5d3f92;
  text-align: center;
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
export const RightBlockHead = styled.h4`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #873dc1;
`;
export const RightBlockButton = styled.button`
  padding: 8px 35px;
  color: #ffffff;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  background: #873dc1;
  border-radius: 10px;
  border: 1px solid transparent;
  outline: none;
  margin-top: 20px;
  transition: all 0.3s;
  &:hover {
    background: #ffffff;
    color: #873dc1;
    border: 1px solid #873dc1;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
`;
