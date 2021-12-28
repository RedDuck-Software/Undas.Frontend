import { solidityKeccak256 } from 'ethers/lib/utils'
import styled from 'styled-components'

import { Container } from '../../globalStyles'

export const RentNFTHeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  ${Container}
`

export const RentNFTContentContainer = styled(Container)`
  max-width: 1000px;

  ${Container}
`

export const RentNFTHeading = styled.div`
  max-height: 155px;
  background: #f2f2f2;
`

export const RentNFTBackground = styled.img``

export const RentNFTContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f2f2f2;
`

export const RentNFTTitle = styled.h2`
  padding: 3.75rem 0;

  font-weight: 400;
  font-size: 2.5rem;
  word-spacing: 0.8rem;

  @media (max-width: 801px) {
    font-size: 2rem;
  }

  @media (max-width: 619px) {
    padding: 3rem 0 0;
  }
`

export const BlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;

  @media (max-width: 619px) {
    flex-direction: column;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  @media (max-width: 619px) {
    margin-bottom: 1rem;
    align-self: flex-end;
    order: 1;

    &:nth-child(1) {
      align-self: flex-start;
    }
  }
`

export const BlackLayer = styled.div`
  &::after {
    position: absolute;
    bottom: 0.05rem;
    left: 0;
    content: '';
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 35%;
    position: absolute;
    z-index: 1;
    border-radius: 0px 0px 10px 10px;
`

export const TextOnImage = styled.span`
  font-size: 1.45rem;
  position: absolute;
  z-index: 2;
  margin-bottom: 8%;
  color: #fff;

  @media (max-width: 641px) {
    font-size: 1rem;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  font-size: 1.125rem;
  line-height: 28px;
  background: #f0f0f3;
  box-shadow: -10px -10px 30px #ffffff, 10px 10px 30px rgba(174, 174, 192, 0.4);
  border-radius: 12px;
  max-width: 600px;

  padding: 1rem 2.5rem;

  @media (max-width: 801px) {
    font-size: 0.9rem;
  }

  @media (max-width: 619px) {
    padding: 4% 6%;
    width: 80%;
    order: 2;
    align-self: flex-start;

    &:nth-child(2) {
      align-self: flex-end;
    }
  }

  @media (max-width: 519px) {
    font-size: 0.8rem;
  }
`

export const BlockTitle = styled.span`
  display: block;
  color: #5d3f92;
`

export const RentNFTImage = styled.img`
  width: 285px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 801px) {
    width: 196px;
    height: 139px;
  }

  @media (max-width: 641px) {
    width: 135px;
    height: 96px;
  }
`

export const RentNFTSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.8rem;
  word-spacing: 0.8rem;
  padding: 1rem 0 3rem;

  @media (max-width: 801px) {
    font-size: 1.5rem;
  }

  @media (max-width: 619px) {
    display: flex;
    justify-content: center;
    padding: 1rem 0 2rem;
  }
`

export const DoubleCurveContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media (max-width: 619px) {
    justify-content: flex-end;

    &:nth-child(5) {
      justify-content: flex-start;
    }
  }
`

export const DoubleCurve = styled.img`
  width: 60%;
  ${(props) =>
    props.mirrored
      ? '-webkit-transform: scaleX(-1); transform: scaleX(-1);'
      : ''}

  @media (max-width: 641px) {
    width: 80%;
    margin: -3rem 0;
  }

  @media (max-width: 619px) {
    display: none;
  }
`

export const DoubleCurveMobile = styled.img`
  ${(props) =>
    props.mirrored
      ? '-webkit-transform: scaleX(-1); transform: scaleX(-1);'
      : ''}

  display: none;

  @media (max-width: 619px) {
    display: block;
    margin: -60% 5% -30%;
  }

  @media (max-width: 469px) {
    margin: -70% 10% -30%;
  }
`

export const ButtonsContainer = styled.div`
  padding: 3.75rem 0 12rem;

  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 469px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 3.75rem 0;

    button {
      width: 80%;
    }
  }
`
