import styled from 'styled-components'

import { Container } from '../../globalStyles'

export const RentNFTContainer = styled(Container)`
  display: flex;
  justify-content: center;

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
`

export const BlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
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
`

export const RentNFTSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.8rem;
  word-spacing: 0.8rem;
  padding: 1rem 0 3rem;
  margin-left: 8%;
`

export const DoubleCurveContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

export const DoubleCurve = styled.img`
  width: 60%;
  ${(props) =>
    props.mirrored
      ? '-webkit-transform: scaleX(-1); transform: scaleX(-1);'
      : ''}
`

export const ButtonsContainer = styled.div`
  padding: 3.75rem 0 12rem;

  display: flex;
  justify-content: center;
  gap: 3rem;
`
