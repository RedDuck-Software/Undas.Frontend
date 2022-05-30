import styled from "styled-components";

export const LineWrap = styled.div`
  @media (max-width: 992px) {
    position: absolute;
    margin-left: auto;
    margin-top: 30px;
  }
  @media (max-width: 576px) {
    margin-top: 15px;
  }
`;

export const Line = styled.div`
  width: 5px;
  height: 65px;
  background: #e5e5e5;
  position: relative;
  margin: 0 auto;
  &.done {
    background-color: #ccb7f2;
  }

  @media (max-width: 992px) {
    height: 62px;
    &.secondLine {
      height: 133px;
    }
    &.lastLine {
      height: 44px;
    }
  }
  @media (max-width: 576px) {
    height: 100px;
    &.secondLine {
      height: 189px;
    }
    &.lastLine {
      height: 79px;
    }
    &.thirLine {
      height: 188px;
    }
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5d3f92;
  position: absolute;
  bottom: 0;
  left: calc(50% - 5px);
  border: 2px solid #e2d1ff;
  &.done {
    width: 14px;
    height: 14px;
    background-color: #7c7c7c;
    border: 3px solid #e5e5e5;
    left: calc(50% - 7px);
  }
`;
