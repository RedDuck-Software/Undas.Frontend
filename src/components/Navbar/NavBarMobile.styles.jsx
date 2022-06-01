import { DropdownButton, Dropdown } from "react-bootstrap";
import styled from "styled-components";

import {
  IconsUl,
  StyledList,
  StyledLink,
  MenuListSocial,
} from "./Navbar.styles";


export const BurgerWrap = styled.div `
  overflow: hidden;
`;

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 5px;
    right: 20px;
    z-index: 2;
    display: none;
    @media (max-width: 1024px){
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
        div{
            width: 2rem;
            height: 4px;
            background-color: ${({open}) => open ? "#873DC1" : "#873DC1" } ;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all .2s;

            &:first-child{
                transform: ${({open}) => open ? "rotate(45deg)" : ""};
            }
            &:nth-child(2){
                opacity: ${({open}) => open ? "0" : "1"};
            }
            &:last-child{
                transform: ${({open}) => open ? "rotate(-45deg)" : ""};
            }
        }
`;

export const Navigation = styled.div `
  display: none;
  @media (max-width: 1024px){
    display: flex;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
  }
`;
export const Blur = styled.div `
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px);
    position: absolute;
`;

export const NavigationMenu = styled.div`
  background-color: #fff;
  width: 30%;
  height: 100vh;
  align-self: flex-end;
  padding-top: 50px;
  text-align: center;
  @media (max-width: 768px){
    width: 50%;
  }
  @media (max-width: 576px){
    width: 100%;
  }
`;
export const MobileUl = styled(IconsUl)`
  flex-direction: column;
  max-width: 100%;
`;
export const MobileStyledLink = styled(StyledLink)`
    padding: 0 10px;
`;
export const MobileStyledList = styled(StyledList)`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    &.language{
      justify-content: center;
    }
    & .dropdown{
      width: 100%;
    }
`;
export const HeaderDropdownButton = styled(DropdownButton)`
  #header-dropdown-button{
    width: 100%;
    color: #7C7C7C;
      display: flex;
      justify-content: space-between;
      background: transparent;
      border: none;
      outline: none;
      border-radius: 0;
      align-items: center;
      &:focus{
        outline: none;
        box-shadow: none;
        color: #873DC1;
      }
      ::after{
        width: 10px;
        height: 10px;
        border-bottom: 1px solid #7C7C7C;;
        border-right: 1px solid #7C7C7C;;
        border-top: 0;
        transform: rotate(45deg);
        margin-top: -6px;
      }
  }  
  #header-dropdown-button + .dropdown-menu.show {
        position: static !important;
        transform: translate3d(0px, 0, 0px) !important;
        background: transparent;
        border: none;
      }
`;
export const HeaderDropdownItem = styled(Dropdown.Item)`
  width: 100%;
  color: #7C7C7C;
  border-bottom: 1px solid rgba(135, 61, 193, 0.25);
  padding: 0;
      svg{
        margin: 10px;
      }
`;
export const IconInner = styled.div`
  padding: 0.3rem 0 0.375rem 0.75rem; 
`;
export const MobileMenuListSocial = styled(MenuListSocial)`
  justify-content: space-around;
  background: #FBF5FF;
`;

