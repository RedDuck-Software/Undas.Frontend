import styled from "styled-components";

export const BlockTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  text-align: center;
`;
export const BlockWrap = styled.div`
  border-bottom: 1px solid rgba(124, 124, 124, 0.25);
  padding-bottom: 30px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DurationWrap = styled.div`
  margin-top: 20px;
`;
export const DurationRow = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;

export const ButtonsBlock = styled.div``;
export const DurationButton = styled.button`
  padding: 5px;
  background: #ffffff;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  margin-left: 20px;
  width: 36px;
  height: 36px;
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
export const BlockButton = styled.button`
  display: block;
  cursor: pointer;
  background: #fff;
  border: 1px solid #873dc1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 50px;
  margin: 0 auto;
  margin-top: 25px;
  color: #873dc1;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  &:hover {
    background: #873dc1;
    color: #fff;
  }
  @media (max-width: 576px) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;