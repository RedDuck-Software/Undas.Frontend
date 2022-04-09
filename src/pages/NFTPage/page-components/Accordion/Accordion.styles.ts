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
