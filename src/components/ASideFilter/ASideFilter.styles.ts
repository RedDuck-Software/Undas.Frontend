import styled from "styled-components";

export const ASideWrap = styled.div `
  width: 30px;
  height: auto;
  background: rgba(251, 245, 255, 0.7);
  box-shadow: inset 0 0 3px rgba(124, 124, 124, 0.5);
  margin-right: 15px;
  position: relative;
`

export const Holder = styled.ul `
  margin-top: 60px;
  list-style: none;
  background: #FFFFFF;
  width: 100%;
  
  box-shadow: 0px 0px 2px rgba(135, 61, 193, 0.25);
  border-radius: 0px 10px 10px 0px;
  overflow: hidden;
`

export const HolderElement = styled.li `
  padding: 10px 6px;
  cursor: pointer;
  svg path {
    transition: all ease-in-out 0.15s; 
  }
  &:hover {
      svg path {
        fill: #5D3F92;
      }  
    }
`