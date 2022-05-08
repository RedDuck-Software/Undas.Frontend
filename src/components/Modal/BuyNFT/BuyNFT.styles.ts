import styled from "styled-components";
import {CloseIco, InfoIco} from "../imports";

export const WindowWrap = styled.div `
  max-width: 560px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  width: 560px;
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
  overflow: hidden;
`

export const PaymentElement = styled.li <{padd?: string}>`
  border-top: 1px solid #DEDEDE;
  margin-top: -1px;
  display: flex;
  justify-content: space-between;
  padding: ${props => props.padd || '15px 0'};
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

//Rent

export const InputWrap = styled.div `
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7C7C7C;
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    padding: 10px 20px;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 5px rgba(124, 124, 124, 0.5);
    border-radius: 10px;
    border: none;
    max-width: 132px;
  }
`
export const CheckboxInput = styled.input`
    margin-right: 5px;
    
    &.custom-checkbox{
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    &.custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
    }
    &.custom-checkbox+label::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #5D3F92;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    background-color: #ffffff;
    }
    &.custom-checkbox:checked+label::before{
        background-color: #ffffff;
    }
    &.custom-checkbox:checked+label::after {
        content: '';
        width: 6px;
        height: 8px;
        border-bottom: 1px solid #5D3F92;
        border-right: 1px solid #5D3F92;
        transform: skew(-10deg) rotate(45deg);
        position: absolute;
        top: 7px;
        left: 5px;
    }
    
    &.custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
        box-shadow: 0px 0px 5px rgba(124, 124, 124, 0.5);
    }
`;
export const CheckboxLabel = styled.label`
    display: -webkit-inline-flex !important;
    &:hover{
        text-shadow: 0px 0px 2px rgba(124, 124, 124, 0.5);
    }
`
export const CheckboxBlock = styled.form`
    max-width: 500px;
`;

export const TextPay = styled.span`
    
`

export const ColoredTextAgreement = styled.span<{color?: string, fs?: string, fw?: string, cursor?: string}> `
  color: ${props => props.color || ''};
  font-size: ${props => props.fs || ''};
  font-weight: ${props => props.fw || ''};
  cursor: ${props => props.cursor || ''};
  padding-left: 6px;
`