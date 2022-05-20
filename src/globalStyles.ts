import styled, { createGlobalStyle } from 'styled-components';

import LRBackground from './images/LRBackground.png';
import LRBackground2 from './images/LRBackground.png';
import RBackground from './images/RBackground.png';
import 'bootstrap/dist/css/bootstrap.min.css';

interface GlobalStylesProps {
  violet?: boolean;
  big?: boolean;
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat'
  }
  ol, ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

`;

export const Container = styled.div`
  z-index: 99;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 469px) {
    padding: 0 1rem;
  }
`;

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
    padding: ${({ big }) => (big ? '0.8rem 6rem' : '0.8rem 4rem')};
  }

  @media (max-width: 1009px) {
    padding: ${({ big }) => (big ? '0.8rem 4rem' : '0.8rem 3.6rem')};
  }

  @media (max-width: 801px) {
    padding: ${({ big }) => (big ? '0.8rem 3.6rem' : '0.8rem 3rem')};
  }

  @media (max-width: 661px) {
    padding: ${({ big }) => (big ? '0.6rem 2.4rem' : '0.6rem 2rem')};
  }

  @media (max-width: 539px) {
    font-size: 0.85rem;
    padding: ${({ big }) => (big ? '0.6rem 2.4rem' : '2% 8%')};
  }
`;

export const Background = styled.div`
  width: 100%;
  background: url(${LRBackground}), url(${RBackground}), url(${LRBackground2});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: left 0 top 150px, right 0 top 1450px, left 0 top 2150px;

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
`;

export const VioletText = styled.span`
  color: #5d3f92;
`;

export const Overlay = styled.div`
  opacity: 0;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-image: linear-gradient(hsl(233, 26%, 24%), transparent);
  z-index: 1;
`;

export const ComingSoonImage = styled.img`
  max-width: 180px;
  width: 100%;

  position: relative;
  top: 1rem;
  left: 1rem;

  @media (max-width: 574px) {
    left: 0;
  }
`;
export const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  color: #232428;
  margin: 40px 0 20px;
  @media (max-width: 992px) {
    font-size: 32px;
    line-height: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin: 30px 0 10px;
  }
  @media (max-width: 576px) {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #232428;
  &.align-center {
    text-align: center;
  }
`;
export const FormButtonsWrap = styled.div`
    @media (max-width: 992px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    @media (max-width: 576px) {
        flex-wrap: wrap;
    }
`;
export const FormButton = styled.button`
    background: #FFFFFF;
    border: 1px solid #873DC1;
    border-radius: 10px;
    color: #873DC1;
    padding: 7px 37px;
    margin-left: 25px;
    transition: all .3s;
    &:hover{
        color: #FFFFFF;
        background: #873DC1;
        border: 1px solid transparent;
    }
    @media (max-width: 992px) {
        flex: 0 0 45%;
        &.left-btn{
            border: 1px solid transparent;
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #873DC1;
            color: #fff;
            margin-left: 0;
        }
    }
    @media (max-width: 576px) {
        flex: 0 0 100%;
        margin: 0;
        &.left-btn{
            margin-bottom: 15px;
        }
    }
`;
export default GlobalStyle;
