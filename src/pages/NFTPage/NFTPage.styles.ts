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
  width: 540px;
  height: 515px;
`

export const Image = styled.img `
  object-fit: cover;
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
  list-style: none;
  border-radius: 10px;
  overflow: hidden;
`

export const TopBar = styled.li <{justifyContent?: string, cursor?: string}>`
  display: flex;
  align-items: center;
  box-shadow: inset 0px 0px 1px #7C7C7C;
  justify-content: ${props => props.justifyContent || ''};
  gap: 10px;
  width: 100%;
  background-color: #fff;
  padding: 16px 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #5D3F92;
  cursor: ${props => props.cursor || ''};
`
export const BuyBar = styled.li `
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7C7C7C;
  background: #FBF5FF;
  box-shadow: inset 0px 0px 1px #7C7C7C;
`

export const PriceText = styled.span `
  margin: 0 12px 0 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #232428;
`

export const PriceInUSD = styled.span `
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #232428;
`

export const ButtonWrap = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`

interface IButton {
  bg?: string
  fc?: string
  flex?: string
}

export const InfoButton = styled.button<IButton> `
  cursor: pointer;
  border: 1px solid #873DC1;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px 80px;
  font-size: 14px;
  background-color: ${props => props.bg || '#fff'};
  color: ${props => props.fc || '#fff'};
  flex: ${props => props.flex || ''};
`

//Rent Bar

export const RentElement = styled.li<{h?: string}> `
  gap: 30px;
  height: ${props => props.h || '50px'};
  padding: 0 30px;
  background: #FBF5FF;
  box-shadow: inset 0px 0px 1px #7C7C7C;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7C7C7C;
`

export const RentalPeriod = styled.input `
  width: 170px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  padding: 10px 36px;
  background: #FFFFFF;
  box-shadow: inset 0px 0px 2px #7C7C7C;
  border-radius: 10px;
  color: #7C7C7C;
  border: none;
`
