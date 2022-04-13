import styled from "styled-components";
import {CloseIco, InfoIco} from "../imports";

export const WindowWrap = styled.div `
  max-width: 560px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  margin: 10% auto 0 auto;
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

export const PaymentInfo = styled.ul `
  list-style: none;
  border-top: 1px solid #DEDEDE;
  border-bottom: 1px solid #DEDEDE;
`

export const PaymentElement = styled.li `
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #232428;
  label {
    font-size: 14px;
    color: #7C7C7C;

  }
`

export const Info = styled(InfoIco) `
  cursor: pointer;
`

export const TotalBlock = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  font-weight: 400;
  font-size: 24px;
  color: #232428;
`

export const PrivacyPolicyBlock = styled.div `
  display: flex;
  align-items: center;
  gap: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #7C7C7C;
  margin-bottom: 30px;
`

export const ConfirmBtn = styled.button `
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #FFFFFF;
  background-color: #C39EE0;
  padding: 8px 42px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`