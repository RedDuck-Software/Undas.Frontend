import styled from 'styled-components';

import { FooterBg } from './imports';

import { Container } from '../../globalStyles';

export const FooterSec = styled.footer`
  background-color: rgba(135, 61, 193, 0.5);
  background-image: url(${FooterBg});
  background-repeat: no-repeat;
  background-position: right 10px;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  min-height: 100%;
  padding: 3rem;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    padding: 40px 55px;
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
  @media (max-width: 340px) {
    padding: 20px 10px;
  }
  ${Container};
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1 0 55%;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TopicColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopicTitle = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  margin-bottom: 1.6rem;
  color: #ffffff;

  @media (max-width: 1169px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1019px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 954px) {
    font-size: 1.25rem;
  }

  @media (max-width: 734px) {
    font-size: 1.15rem;
  }

  @media (max-width: 719px) {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
  }
`;

export const TopicText = styled.a`
  cursor: pointer;
  align-items: flex-start;
  font-size: 1.2rem;
  padding: 0.3rem 0;
  color: #232428;
  transition: all 0.3s;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    color: #232428;
  }

  @media (max-width: 1169px) {
    font-size: 1rem;
  }

  @media (max-width: 801px) {
    padding: 0.25rem 0;
  }

  @media (max-width: 734px) {
    font-size: 0.9rem;
  }
`;
export const RightSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 45%;

  @media (max-width: 992px) {
    flex: 0 0 100%;
    order: 1;
  }
`;

export const FooterText = styled.span`
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media (max-width: 1169px) {
    font-size: 1.3rem;
  }

  @media (max-width: 992px) {
    font-size: 18px;
    word-spacing: normal;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const RightSideTop = styled.div`
  align-self: end;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    ${FooterText} {
      display: inline-block;
      min-width: 300px;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    padding: 0;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;

export const CustomSearch = styled.div`
  position: relative;

  @media (max-width: 992px) {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  border: none;
  outline: none;
  box-shadow: inset 0px 0px 2px #232428;
  border-radius: 10px;
  outline: none;
  margin-top: 1rem;
  font-size: 1.25rem;
  padding: 20px;
  color: #7c7c7c;
  width: 100%;

  &::placeholder {
    font-size: 1.25rem;
    color: #7c7c7c;
  }

  @media (max-width: 1019px) {
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }
  @media (max-width: 992px) {
    margin-top: 0;
    padding: 10px;
  }
  @media (max-width: 869px) {
    font-size: 0.75rem;

    &::placeholder {
      font-size: 0.75rem;
    }
  }
`;

export const ButtonSubmit = styled.button`
  position: absolute;
  right: 5%;
  top: 2rem;
  width: 90px;
  height: 36px;
  background: #893ac2;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  color: #fff;
  z-index: 2;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #6a358f;
  }

  @media (max-width: 992px) {
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 0 10px 10px 0;
    height: auto;
    width: 20%;
  }

  @media (max-width: 869px) {
    font-size: 0.75rem;
  }
`;

export const FooterIconsWrapper = styled.div`
  margin-top: 1.625rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 576px) {
    align-self: center;
  }
`;

export const FooterIconLink = styled.a``;

export const FooterIcon = styled.img`
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
  width: 40px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  @media (max-width: 869px) {
    width: 30px;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 40px 40px 0 0;
  @media (max-width: 992px) {
    padding: 10px 0;
  }
`;

export const Year = styled.div`
  color: #232428;
  font-size: 16px;
`;

export const MobileMenuInner = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
    flex: 0 0 100%;
    order: 2;
    margin-top: 40px;

    #dropdown-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #232428;
      border-radius: 0;
      &:focus {
        outline: none;
        box-shadow: none;
      }
      ::after {
        width: 10px;
        height: 10px;
        border-bottom: 1px solid #232428;
        border-right: 1px solid #232428;
        border-top: 0;
        transform: rotate(45deg);
      }
    }
    #dropdown-button + .dropdown-menu.show {
      position: static !important;
      transform: translate3d(0px, 0, 0px) !important;
      background: transparent;
      border: none;
    }
  }
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
