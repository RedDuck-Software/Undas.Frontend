import styled from "styled-components";

import BgImgRotate from "../../assets/bg-img-rotate.png";
import BgImg from "../../assets/bg-img.png";

//RewardMenu
export const RewardMenuWrap = styled.div`
  padding: 40px 0 120px;
`;
export const ContentWrap = styled.div`
  &.top-table {
    margin-top: -40px;
  }
`;
export const ButtonsBlock = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #232428;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #232428;
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
  @media (max-width: 1200px) {
    padding: 60px 0 0;
  }
`;

export const MainBlock = styled.div`
  width: 400px;
  padding: 40px 10px;
`;
export const CentralBlock = styled.div`
  padding: 45px 20px 75px;
  background: #ffffff;
  border: 1px solid rgba(124, 124, 124, 0.25);
`;
export const RightBlock = styled.div`
  padding: 40px 10px 20px;
  text-align: center;
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
`;
export const BlockValue = styled.div`
  display: flex;
  align-items: flex-start;
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
`;
export const BlockContentTotal = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #7c7c7c;
`;
export const CentralBlockHead = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #5d3f92;
  text-align: center;
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
`;