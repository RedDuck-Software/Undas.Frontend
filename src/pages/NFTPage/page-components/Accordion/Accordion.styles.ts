import styled from "styled-components";
import {Arrow} from "../../../AllNFTs/AllNFTs.styles";
import {Link} from "react-router-dom";

export const AccordionWrap = styled.ul<{flex?: string}> `
  margin-top: 20px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: inset 0 0 1px #7C7C7C;
  border-radius: 10px;
  overflow: hidden;
  transition: all ease-in-out 0.15s;
  max-height: 49px;
  flex: ${props => props.flex || ''};
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

//Offers
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


//Description
export const DescriptionWrap = styled.li `
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0px 0px 1px #7C7C7C;
  background-color: #FBF5FF;
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

//Details
export const DetailsWrap = styled.ul<{padd?: string}> `
  box-shadow: inset 0px 0px 1px #7C7C7C;
  background-color: #FBF5FF;
  padding: ${props => props.padd || '15px 30px'};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
`

export const DetailsElement = styled.li `
  padding: 5px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`

export const ColoredText = styled.span<{color?: string, fs?: string, fw?: string}> `
  color: ${props => props.color || ''};
  font-size: ${props => props.fs || ''};
  font-weight: ${props => props.fw || ''};
`

//About

export const ImageWrap = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 10px;
  filter: drop-shadow(0px 5px 5px rgba(124, 124, 124, 0.25));
`

export const AboutImage = styled.img `
  
`

export const AboutSocial = styled.ul `
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px rgba(135, 61, 193, 0.25);
  backdrop-filter: blur(50px);
  border-radius: 10px;
  max-width: 150px;
  overflow: hidden;
  display: flex;
  gap: 15px;
  padding: 10px;
`

export const SocialElement = styled(Link) `
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  svg {
    path {
      transition: all ease-in-out 0.15s;
    }
  }
  &:hover {
    svg {
      path {
        fill: #873DC1;
      }
    }
  }
`

export const PropertiesWrap = styled(DetailsWrap) `
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${DetailsWrap}
`

//Properties
export const PropertiesElement = styled.li `
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  background: #FFFFFF;
  box-shadow: inset 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px 20px;
`