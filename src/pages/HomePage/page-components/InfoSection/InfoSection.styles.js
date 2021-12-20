import styled from 'styled-components'
import { Button } from '../../../../globalStyles'
import OLetter from '../../../../icons/o-letter.svg'

export const InfoSec = styled.div`
  padding: 3.75rem 0;
`

export const InfoRow = styled.div`
  display: flex;
`

export const LeftColumn = styled.div`
  width: 50vw;

  @media (max-width: 1199px) {
    width: 50vw;
  }
`

export const RightColumn = styled.div`
  width: 50vw;

  @media (max-width: 1199px) {
    width: 60vw;
  }
`

export const TextWrapper = styled.div``

export const Tagline = styled.h1`
  font-size: ${(props) => (props.big ? '3.8rem' : '2.05rem')};
  font-weight: 400;
  word-spacing: 1rem;

  &:before {
    content: ${(props) => (props.icon ? `url('${OLetter}')` : 'none')};
    position: relative;
    top: 2px;
  }

  @media (max-width: 1009px) {
    font-size: ${(props) => (props.big ? '3.2rem' : '1.75rem')};
  }
`

export const ButtonsWrapper = styled.div`
  padding-top: 7rem;

  ${Button} {
    margin-right: 1.6rem;
  }
`

export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 1.5rem;

  @media (max-width: 1243px) {
    grid-gap: 0.8rem;
    margin-right: -0.4rem;
  }

  @media (max-width: 1169px) {
    grid-gap: 0.8rem;
    grid-template-columns: 42% 1fr 1fr;
  }

  @media (max-width: 984px) {
    grid-template-columns: 1.6fr 1fr 1fr;
  }
`

export const Image = styled.img`
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1119px) {
    width: 95%;
  }
`
