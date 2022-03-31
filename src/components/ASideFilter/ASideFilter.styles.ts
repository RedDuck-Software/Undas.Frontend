import styled from "styled-components";

export const ASideWrap = styled.div `
  min-width: 30px;
  max-width: 30px;
  //max-width: 255px;
  //max-width: 255px;
  //box-sizing: content-box;
  //width: 255px;
  height: auto;
  background: rgba(251, 245, 255, 0.7);
  box-shadow: inset 0 0 3px rgba(124, 124, 124, 0.5);
  margin-right: 15px;
  overflow: hidden;
  position: relative;
  transition: all ease-in-out 0.10s;
  &.active {
    min-width: 255px;
  }
`

export const Holder = styled.ul `
  width: 100%;
  margin-top: 60px;
  list-style: none;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
  border-radius: 0px 10px 10px 0px;
  overflow: hidden;
`

export const HolderElement = styled.li `
  width: 255px;
  padding: 10px 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    path {
      transition: all ease-in-out 0.15s; 
    }
  }
  &:hover {
      svg path {
        fill: #5D3F92;
      }  
    }
`

export const ElementText = styled.span `
  margin-left: 10px;
  color: #7C7C7C;
`

export const Arrow = styled.span `
  margin-top: 4px;
  margin-left: auto;
  border-top: 1px solid #5D3F92;
  border-left: 1px solid #5D3F92;
  transform: rotate(-45deg);
  justify-self: end;
  width: 10px;
  height: 10px;
  transition: all ease-in-out 0.15s;
`