import { MdCenterFocusStrong } from "react-icons/md";
import styled from "styled-components";


export const LineWrap = styled.div`
    
`

export const Line = styled.div `
  width: 5px;
  height: 65px;
  background: #E5E5E5;
  position: relative;
  margin: 0 auto;
  &.done{
      background-color: #CCB7F2;
  }
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5D3F92;
  position: absolute;
  bottom: 0;
  left: calc(50% - 5px);
  border: 2px solid #E2D1FF;
  &.done{
    width: 14px;
    height: 14px;
      background-color: #7C7C7C;
      border: 3px solid #E5E5E5;
      left: calc(50% - 7px);
  }
`;