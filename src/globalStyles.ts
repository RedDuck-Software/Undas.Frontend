import styled, { createGlobalStyle } from 'styled-components'
import background from './images/background-image.png'
import backgroundRotated from './images/background-image-rotated.png'

interface GlobalStylesProps {
  violet?: boolean
  big?: boolean
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

`

export const Container = styled.div`
  z-index: 99;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 469px) {
    padding: 0 1rem;
  }
`

export const Button = styled.button<GlobalStylesProps>`
  border-radius: 0.5rem;
  background: ${({ violet }) => (violet ? '#893AC2' : '#fff')};
  white-space: nowrap;
  font-size: 1.05rem;
  padding: ${({ big }) => (big ? '0.8rem 10rem' : '0.8rem 4.6rem')};
  color: ${({ violet }) => (violet ? '#fff' : '#000000')};
  outline: none;
  border: ${({ violet }) => (violet ? 'none' : '1px solid #893AC2')};
  box-shadow: ${({ violet }) =>
    violet
      ? 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
      : 'inset 0px 4px 4px rgba(93, 63, 146, 0.31)'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ violet }) => (violet ? '#6a358f' : '#f5f5f5')};
  }

  @media (max-width: 1169px) {
    grid-gap: 0.8rem;
    padding: ${({ big }) => (big ? '0.8rem 6rem' : '4% 10%')};
  }

  @media (max-width: 1009px) {
    padding: ${({ big }) => (big ? '0.8rem 4rem' : '4% 10%')};
  }

  @media (max-width: 801px) {
    padding: ${({ big }) => (big ? '0.8rem 3.6rem' : '4% 14%')};
  }

  @media (max-width: 661px) {
    padding: ${({ big }) => (big ? '0.6rem 2.4rem' : '2% 10%')};
  }

  @media (max-width: 539px) {
    font-size: 0.85rem;
    padding: ${({ big }) => (big ? '0.6rem 2.4rem' : '2% 8%')};
  }
`

export const Background = styled.div`
  width: 100%;
  background: url(${backgroundRotated}), url(${background}),
    url(${backgroundRotated});
  background-position: right 50rem top 12rem, left 60rem top 58rem,
    right 60rem top 112rem;
  background-repeat: no-repeat;

  @media (max-width: 1099px) {
    background-position: right 40rem top 12rem, left 40rem top 58rem,
      right 50rem top 112rem;
  }

  @media (max-width: 801px) {
    background-position: right 30rem top 12rem, left 20rem top 58rem,
      right 50rem top 112rem;
  }

  @media (max-width: 639px) {
    background-position: right 20rem top 12rem, left 20rem top 58rem,
      right 50rem top 112rem;
  }

  @media (max-width: 574px) {
    background-position: right 10rem top 12rem, left 10rem top 58rem,
      right 50rem top 112rem;
  }
`

export const VioletText = styled.span`
  color: #5d3f92;
`

export const Overlay = styled.div`
  opacity: 0;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: linear-gradient(hsl(233, 26%, 24%), transparent);
  z-index: 1;
`

export default GlobalStyle
