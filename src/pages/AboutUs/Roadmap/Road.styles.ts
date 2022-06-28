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
  height: 100px;
  background: #e5e5e5;
  position: relative;
  margin: 0 auto;
  &.done {
    background-color: #ccb7f2;
  }
  &.second {
    height: 100px;
  }
  &.lastLine {
    height: 50px;
  }
  &.three {
    height: 70px;
  }
  &.four {
    height: 70px;
  }
  &.five {
    height: 70px;
  }
  @media (max-width: 1135px) {
    &.four {
      height: 100px;
    }
    &.five {
      height: 60px;
    }
  }
  @media (max-width: 992px) {
    height: 90px;
    &.second {
      height: 176px;
    }
    &.lastLine {
      height: 44px;
    }
    &.three {
      height: 146px;
    }
    &.four {
      height: 136px;
    }
    &.five {
      height: 132px;
    }
  }
  @media (max-width: 670px) {
    &.three {
      height: 162px;
    }
    &.four {
      height: 152px;
    }
  }
  @media (max-width: 648px) {
    &.second {
      height: 183px;
    }
    &.three {
      height: 172px;
    }
    &.four {
      height: 152px;
    }
  }
  @media (max-width: 638px) {
    &.five {
      height: 150px;
    }
    &.lastLine {
      height: 58px;
    }
  }
  @media (max-width: 627px) {
    height: 100px;
    &.second {
      height: 189px;
    }
  }
  @media (max-width: 601px) {
    &.second {
      height: 205px;
    }
    &.three {
      height: 193px;
    }
  }
  @media (max-width: 576px) {
    height: 152px;
    &.second {
      height: 270px;
    }
    &.lastLine {
      height: 79px;
    }
    &.three {
      height: 220px;
    }
    &.four {
      height: 176px;
    }
    &.five {
      height: 176px;
    }
    &.lastLine {
      height: 74px;
    }
  }
  @media (max-width: 348px) {
    &.three {
      height: 226px;
    }
    &.four {
      height: 186px;
    }
  }
  @media (max-width: 336px) {
    &.second {
      height: 276px;
    }
    &.lastLine {
      height: 79px;
    }
    &.three {
      height: 236px;
    }
    &.four {
      height: 186px;
    }
  }
  @media (max-width: 331px) {
    &.five {
      height: 184px;
    }
    &.lastLine {
      height: 88px;
    }
  }
    @media (max-width: 325px) {
      height: 158px;
      &.second {
        height: 288px;
      }
      &.lastLine {
        height: 79px;
      }
      &.three {
        height: 236px;
      }
      &.four {
        height: 186px;
      }
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
