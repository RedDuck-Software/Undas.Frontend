import styled from "styled-components";
import {Arrow} from "../../../AllNFTs/AllNFTs.styles";

export const AccordionWrap = styled.ul `
  margin-top: 20px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: inset 0 0 1px #7C7C7C;
  border-radius: 10px;
  overflow: hidden;
  transition: all ease-in-out 0.15s;
  max-height: 49px;
  &.active {
    max-height: 254px;
  }
`

export const AccordionArrow = styled(Arrow) `
  &.active {
    margin-top: -4px;
    transform: rotate(-135deg);
  }
  ${Arrow}
`
export const OffersWrap = styled.table `
  width: 100%;
  border-collapse: collapse;
`

export const OffersHeadTr = styled.tr `
`

export const OffersTr = styled.tr `
  padding: 0 30px;
  background: #FBF5FF;
  box-shadow: inset 0 0 1px #7C7C7C;
`


interface IOffersTd {
    padd?: string,
    textAlign?: string
}

export const OffersTd = styled.td<IOffersTd> `
  padding: ${props => props.padd || '10px 30px'};
  text-align: ${props => props.textAlign || ''};
  font-weight: 400;
  font-size: 14px;
  color: #7C7C7C;
`

export const OffersTdText = styled.td `
  padding: 10px 30px;
  width: 80px;
`

export const OffersText = styled.span<{color?: string}> `
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.color || '#7C7C7C'};
`

export const DescriptionWrap = styled.li `
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 1px #7C7C7C;
  background-color: #FBF5FF;
  padding: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
`

export const Title = styled.span<{color?: string}> `
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.color || '#7C7C7C'};
  margin-bottom: 5px;
`

export const MoreBtn = styled.button `
  cursor: pointer;
  padding: 10px 50px;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #873DC1;
  background: #FFFFFF;
  border: 1px solid #873DC1;
  border-radius: 10px;
`
