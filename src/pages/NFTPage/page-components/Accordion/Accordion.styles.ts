import styled from "styled-components";
import {Arrow} from "../../../AllNFTs/AllNFTs.styles";
import {Link} from "react-router-dom";
import { EthIco } from "../../imports";

export const AccordionWrap = styled.ul`
  margin-top: 20px;
  width: 100%;
  background: #FFFFFF;
  box-shadow: inset 0 0 1px #7C7C7C;
  border-radius: 10px;
  overflow: hidden;
  transition: all ease-in-out 0.15s;
  max-height: 49px;
  &.active {
    max-height: 310px;
    overflow-y: auto;
  }
  &.half-width{
    flex: 1 1 40%;
  }
  @media (max-width: 992px){
    &.half-width{
      flex: 0 0 100%;
    }
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
  @media (max-width: 576px) {
    padding: 10px;
  }
`
export const OffersTdText = styled.td `
  padding: 10px 30px;
  @media (max-width: 576px) {
    padding: 10px;
  }
`
export const OffersText = styled.span<{color?: string}> `
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.color || '#7C7C7C'};
  vertical-align: middle;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const EtherIcon = styled(EthIco)`
  vertical-align: middle;
`
// Staking
export const StakingWrap = styled.div`
`

export const StakingWrapMobile = styled.table `
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  display: none;
  @media (max-width: 576px){
    display: block;
  }
`
export const StakingHeadTdMobile = styled.td `
  flex: 0 0 50%;
  padding: 10px 30px;
  font-weight: 400;
  font-size: 12px;
  color: #7C7C7C;
  vertical-align: middle;
`
export const StakingTrMobile = styled.tr `
  display: flex;
  border-bottom: 1px solid rgba(124, 124, 124, 0.2);
`
export const StakingTdMobile = styled.td `
  flex: 0 0 50%;
  padding: 10px 30px;
  background: #FBF5FF;
  font-weight: 400;
  font-size: 12px;
  color: #7C7C7C;
  vertical-align: middle;
  @media (max-width: 400px) {
    &.center-right{
    padding-top: 17px;
  }
  }
  
`
export const StakingWrapDesktop = styled.table `
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  @media (max-width: 576px){
    display: none;
  }
`
export const StakingHeadTr = styled.tr `
  
`
export const StakingTr = styled.tr `
  background: #FBF5FF;
  box-shadow: inset 0 0 1px #7C7C7C;
`
export const StakingTd = styled.td `
  padding: 15px 30px;
  font-weight: 400;
  font-size: 14px;
  color: #7C7C7C;
`
export const StyledUnd = styled.span `
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: #873DC1;
`
//ItemActivity
export const ActivityWrap = styled.li`
`
export const ActivityTableWrap = styled.table`
width: 100%;
border-collapse: collapse;

@media (max-width: 640px){
  /* display: none; */
  display: block;
  max-width: fit-content;
  margin: 0 auto;
  overflow-x: auto;
  white-space: nowrap;
}
`
export const ActivityTopRow = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
padding: 20px 110px;
box-shadow: inset 0px 0px 1px #7C7C7C;
background: #FBF5FF;
@media (max-width: 768px){
  padding: 20px;
}
@media (max-width: 640px){
  padding: 10px;
  flex-wrap: wrap;
}
`
export const ActivityText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #232428;
  vertical-align: middle;
  @media (max-width: 640px){
    flex: 0 0 100%;
    text-align: center;
    margin-bottom: 10px;
    color: #7c7c7c;
  }
`
export const ActivityButton = styled.button`
  background: #EDD2FF;
  box-shadow: 0px 0px 5px rgba(135, 61, 193, 0.25);
  border-radius: 10px;
  padding: 10px;
  color: #232428;
  border: none;
  outline: none;
  width: 25%;
  margin-left: 1em;
  cursor: pointer;
  transition: all .3s linear;
    &:hover,
    &:active{
      background: #FFFFFF;
    }
  @media (max-width: 640px){
    width: 30%;
    &.left-btn{
      margin-left: 0;
    }
  }
`
export const ActivityHeadTr = styled.tr`
`
export const ActivityTr = styled.tr`
  background: #FBF5FF;
  box-shadow: inset 0 0 1px #7C7C7C;
  padding: 0 30px;
`
export const ActivityTd = styled.td`
  padding: 15px 30px;
  font-weight: 400;
  font-size: 14px;
  color: #7C7C7C;
  @media (max-width: 790px){
    padding: 15px;
}
`
export const ActivityColorText = styled.span<{color?: string}>`
  color: ${props => props.color || '#7C7C7C'};
`
// export const ActivityTableWrapMobile = styled.table`
// display: none;
// @media (max-width: 640px){
//   display: block;
// }
// `
// export const ActivityHeadTrMobile = styled.tr`
//   display: flex;
//   background-color: #F2F2F2;
// `
// export const ActivityTrMobile = styled.tr`
//   display: flex;
//   border-bottom: 1px solid rgba(124, 124, 124, 0.2);
// `
// export const ActivityTdMobile = styled.td`
//   flex: 0 0 50%;
//   font-family: 'Montserrat';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 17px;
//   color: #7C7C7C;
//   padding: 10px 15px;
//   &.text-right{
//     text-align: right;
//     background-color: #FBF5FF;
//   }
//   &.table-head{
//     padding: 5px 15px;
//     color: #232428;
//     font-size: 10px;
//     line-height: 12px;
//     background-color: #F2F2F2;
//   }
// `

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
  @media (max-width: 576px){
   flex: 0 0 100%;
   padding: 15px;
  }
`

export const Title = styled.span<{color?: string}> `
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.color || '#7C7C7C'};
  margin-bottom: 5px;
  @media (max-width: 576px){
    font-size: 14px;
  }
`
export const WrapperDescript = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
  margin: 15px 0 0 0;
  justify-content: space-between;
  @media (max-width: 576px){
    flex-wrap: wrap;
    gap: 10px;
  }
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
  transition: all .4s;
  &:hover{
    background: #873DC1;
    color: #FFFFFF;
  }
  @media (max-width: 576px){
    flex: 0 0 100%;
  }
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
  height: calc(100% - 49px);
  @media (max-width: 576px){
    padding: 15px;
  }
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

export const ColoredText = styled.span<{color?: string, fs?: string, fw?: string, cursor?: string}> `
  color: ${props => props.color || ''};
  font-size: ${props => props.fs || ''};
  font-weight: ${props => props.fw || ''};
  cursor: ${props => props.cursor || ''};
`

//About
export const AboutWrap = styled.ul<{padd?: string}> `
  box-shadow: inset 0px 0px 1px #7C7C7C;
  background-color: #FBF5FF;
  padding: ${props => props.padd || '15px 30px'};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  height: calc(100% - 49px);
  @media (max-width: 576px){
    padding: 0;
  }
`
export const ImageWrap = styled.div `
  width: 50px;
  height: 40px;
  border-radius: 10px;
  filter: drop-shadow(0px 5px 5px rgba(124, 124, 124, 0.25));
  @media (max-width: 576px){
    float: left;
    display: block;
    margin: 0 10px 5px 0;
  }
`
export const WrapperAbout = styled.div `
  display: flex;
  gap: 14px; 
  margin: 0 0 10px 0;
  @media (max-width: 576px){
    display: block;
    padding: 15px 15px 0 15px;
    max-height: 195px;
    overflow-y: auto;
  }
`
export const AboutImage = styled.img `
  width: 100%;
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
  margin-top: 30px;
  @media (max-width: 576px){
    margin: 0 auto;
    margin-top: 15px;
    max-width: 100%;
    justify-content: center;
    border-radius: 0;
  }
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

//Properties
export const PropertiesWrap = styled(DetailsWrap) `
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: calc(100% - 49px);
  
  @media (max-width: 576px){
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
  }
  ${DetailsWrap}
`
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
  @media (max-width: 576px){
   flex-wrap: wrap;
   text-align: center;
   flex: 0 0 31%;
  }
  @media (max-width: 520px){
    flex: 0 0 45%;
  }
`
export const PropertiesElementItem = styled.span`
  @media (max-width: 576px){
   flex: 0 0 100%;
  }
`
export const CompleteWrap = styled.div<{complete?: number}> `
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #232428;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: #FFF;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  &:before {
    margin-left: -20px;
    content: '';
    position: absolute;
    height: 100%;
    width: ${props =>
            props.complete === 0 && '' ||
            props.complete === 1 && '20%' ||
            props.complete === 2 && '40%' ||
            props.complete === 3 && '60%' ||
            props.complete === 4 && '80%' ||
            props.complete === 5 && '100%'
    };
    background-color: #E2D1FF;
    z-index: 1;
  }
  span {
    z-index: 2;
  }
`
export const AccordionText = styled.span`
  line-height: 20px;
  @media (max-width: 576px){
    font-size: 12px;
  }
`