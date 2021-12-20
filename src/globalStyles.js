import styled, { createGlobalStyle } from 'styled-components'
import background from './images/background-image.png'
import backgroundRotated from './images/background-image-rotated.png'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    
  }

`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 3rem;
`

export const Button = styled.button`
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
    padding: ${({ big }) => (big ? '0.8rem 6rem' : '4% 14%')};
  }
`

export const Background = styled.div`
  width: 100%;
  background: url(${backgroundRotated}), url(${background}),
    url(${backgroundRotated});
  background-position: right 50rem top 12rem, left 60rem top 58rem,
    right 60rem top 112rem;
  background-repeat: no-repeat;
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
