import styled from "styled-components";

import CheckMark from "../../icons/check-mark.svg";
import RhombusWhite from "../../icons/rhombus-white.svg";

export const CardItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 10px;
`;

export const CardItemImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 6px 9px, rgba(0, 0, 0, 0.23) 0px 6px 9px;
    border-radius: 12px;
  }
`;

export const TransparentLayer = styled.div`
  &::after {
    bottom: 1px;
    left: 0;
    content: "";
    background: #edd2ff;
    opacity: 0.2;
    width: 100%;
    height: 20%;
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 10px 10px;
  }

  @media (max-with: 533px) {
    &::after {
      bottom: 5px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7% 7% 8%;

  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const CardTitle = styled.span`
  color: #c4c4c4;
  font-size: 0.75rem;

  &:after {
    content: url("${CheckMark}");
    position: relative;
    left: 7px;
    bottom: 3px;
  }
`;

export const CardNumber = styled.span`
  color: #ffffff;
  font-size: 0.75rem;
`;

export const CardPrice = styled.span`
  &:before {
    content: url("${RhombusWhite}");
    position: relative;
    top: 4px;
    right: 5%;
  }
`;

export const CardETH = styled.span`
  position: absolute;
  bottom: 20%;
  right: 4%;
  word-spacing: 0.5rem;

  color: #ffffff;
  font-size: 0.75rem;
`;
