import styled from "styled-components";
import {CloseIco} from "../imports";

export const WindowWrap = styled.div `
  max-width: 560px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
`

export const Title = styled.div `
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  color: #232428;
  background-color: #FBF5FF;
`

export const Close = styled(CloseIco) `
  right: 30px;
  cursor: pointer;
  position: absolute;
`
export const CheckoutWrap = styled.div `
  padding: 20px 30px;
  background-color: #fff;
`
export const NFTWrap = styled.div <{marg?: string}> `
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  margin: ${props => props.marg || ''};
  color: #232428;
`

export const ImageWrap = styled.div `
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
`
