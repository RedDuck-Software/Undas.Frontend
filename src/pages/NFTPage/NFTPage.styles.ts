import styled from "styled-components";
import {Container} from "../../globalStyles";


export const NFTPageWrap = styled(Container) `
  background-color: #E2D1FF;
  position: relative;
  overflow: hidden;
  ${Container}
`

export const NavigationWrap = styled.div `
  margin: 80px 0 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Name = styled.h1 `
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
`

export const NavMenu = styled.ul `
  list-style: none;
  background: #FFFFFF;
  box-shadow: 0 0 1px #7C7C7C, inset 0 0 1px #7C7C7C;
  border-radius:  10px;
  overflow: hidden;
`

export const NavElement = styled.li `
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 10px;
  width: 36px;
  height: 36px;
  box-shadow: 0px 0px 1px #7C7C7C;
`


export const MainInfoWrap = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`

export const ImageWrap = styled.div `
  filter: drop-shadow(0px 5px 5px rgba(124, 124, 124, 0.25));
  border-radius: 10px;
`

export const Info = styled.ul `
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  display: flex;
  gap: 20px;
`

export const InfoElement = styled.li `
  display: flex;
  align-items: center;
  gap: 5px;
`
export const PurpleText = styled.span `
  color: #873DC1;
`

export const SaleBlock = styled.ul `
  
`

export const TopBar = styled.li `
  padding: 16px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5D3F92;
`