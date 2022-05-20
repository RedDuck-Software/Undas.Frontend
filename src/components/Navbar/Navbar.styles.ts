import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FavoriteIco } from './imports';

import { Container } from '../../globalStyles';
import { ReactComponent as Search } from '../../icons/search.svg';

export const Header = styled.header`
  height: 40px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: inset 0px -1px 1px rgba(124, 124, 124, 0.2);
  /* backdrop-filter: blur(50px); */
  z-index: 1000;
  @media (max-width: 1024px) {
    overflow: hidden;
  }
`;

export const HeaderWrap = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 576px) {
    padding-left: 10px;
    padding-right: 3em;
  }
  ${Container}
`;
export const SeoHeading = styled.h1`
  text-indent: -3333px;
`;

export const SearchWrapper = styled.div`
  padding-left: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 36vw;
  max-width: 525px;
  height: 26px;
  background: #ebdfff;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const SearchIcon = styled(Search)`
  width: 15px;
  height: auto;
  margin-right: 10px;
`;

export const Input = styled.input`
  color: #7c7c7c;
  border: transparent;
  font-size: 14px;
  background: transparent;
  padding-right: 0.5rem;
  outline: none;
  width: 100%;
`;

export const Navigation = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const NavigationMenu = styled.nav`
  width: 38vw;
  max-width: 390px;
  margin-right: 15px;
`;
interface IStyledUl {
  justifyContent?: string;
  gap?: string;
  mw?: string;
}

export const StyledUl = styled.ul<IStyledUl>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  gap: ${(props) => props.gap || ''};
  width: 100%;
  max-width: ${(props) => props.mw || ''};
  list-style: none;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const IconsUl = styled.ul<IStyledUl>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'space-between'};
  gap: ${(props) => props.gap || ''};
  width: 100%;
  max-width: ${(props) => props.mw || ''};
  list-style: none;
`;
export const StyledList = styled.li`
  position: relative;
`;

interface IDropdown {
  setWidth?: string;
  left?: string;
  top?: string;
}

export const DropdownMenu = styled.ul<IDropdown>`
  position: absolute;
  border-radius: 0 0 10px 10px;
  top: ${(props) => props.top || '1.9rem'};
  left: ${(props) => props.left || '-2rem'};
  background-color: #fff;
  overflow: hidden;
  width: ${(props) => props.setWidth || '134px'};
  list-style: none;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7c7c7c;
  text-decoration: none;
  transition: all ease-in 0.25s;
  padding: 1.2rem 0;
  &:hover {
    color: #873dc1;
  }

  &.hovered-explore + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
  &.hovered-activity + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
  &.hovered-community + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
  &.hovered-create + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
  &.hovered-profile + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

export const MenuList = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.15s;
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  text-decoration: none;
  box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5);
  &:hover {
    box-shadow: inset 0px -3px 4px rgba(124, 124, 124, 0.25);
    font-weight: 500;
    color: #873dc1;
  }
`;

export const MenuListSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.15s;
  font-weight: 400;
  font-size: 14px;
  color: #7c7c7c;
  text-decoration: none;
  box-shadow: inset 0 0 1px rgba(135, 61, 193, 0.5);
  &:hover {
    box-shadow: inset 0px -3px 4px rgba(124, 124, 124, 0.25);
    font-weight: 500;
    color: #873dc1;
  }
`;

export const SocialLink = styled(Link)`
  svg {
    path {
      transition: all ease-in-out 0.15s;
    }
  }
  &:hover {
    svg {
      path {
        fill: #873dc1;
      }
    }
  }
`;

export const Favorite = styled(FavoriteIco)`
  fill: none;
  &:hover {
    fill: aqua;
  }
`;

export const LanguageTitle = styled.span`
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #7c7c7c;
`;

/*
interface NavbarStylesProps {
  nopadding?: string;
}

export const Nav = styled.nav`
  height: 2.5rem;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: inset 0px -1px 1px rgba(124, 124, 124, 0.2);
  backdrop-filter: blur(50px);
  background: #fff;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  
  ${Container}
`;

export const NavLinkContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const NavLinkDropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: -1rem;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
`;


export const MenuItemLinkDisabled = styled.div`
  display: flex;
  align-items: center;

  color: #7c7c7c;
  text-decoration: none;

  &:visited {
    color: #7c7c7c;
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;

  color: #7c7c7c;
  text-decoration: none;

  &:visited {
    color: #7c7c7c;
  }
`;

export const NavLinkExplore = styled(NavLink)`
  &.hovered-explore + ${NavLinkDropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

export const NavLinkActivity = styled(NavLink)`
  &.hovered-activity + ${NavLinkDropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`;

export const NavLinkActivityDisabled = styled.div`
  cursor: not-allowed;
  font-size: 1.1rem;
  color: #7c7c7c;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0px 0px 10px 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.1rem;
  background: #ffffff;
  border: 1px solid #edd2ff;
  box-sizing: border-box;
  min-width: 166px;
  padding: 0.8rem 0 0.8rem 1rem;

  color: #7c7c7c;

  &:first-child {
    cursor: pointer;
    opacity: 1;
  }

  cursor: not-allowed;
  opacity: 0.4;

  /!* &:last-child {
    border-radius: 0px 0px 10px 10px;
  } *!/

  &:hover {
    box-shadow: inset rgba(0, 0, 0, 0.19) 0px 1px 2px,
      rgba(0, 0, 0, 0.23) 0px 3px 3px;
  }
`;

export const MenuContainer = styled.div`
  visibility: visible;

  @media (max-width: 1009px) {
    visibility: hidden;
    display: none;
  }
`;

export const MenuMobileContainer = styled.div`
  display: none;

  svg {
    cursor: pointer;
    color: #5d3f92;
  }

  @media (max-width: 1009px) {
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  text-align: end;
  background: #fff;
  position: absolute;
  right: 16px;
  top: 46px;
  margin-top: 1rem;
  padding: 1rem;
  min-height: 8rem;
  min-width: 12rem;
  border-radius: 5px;
  border: 2px solid #5d3f92;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  z-index: 99;

  ${NavLinkContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;

    a {
      font-size: 1.2rem;
      color: #5d3f92;
    }

    svg {
      color: #5d3f92;
    }
  }

  ${NavLink} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0;

    button {
      padding: 0.85rem 1.25rem;
      margin: 2rem 0 0 0;
    }
  }
`;

export const MenuMobileTitle = styled.span`
  color: #5d3f92;
  margin: 0.5rem 1rem;
`;

export const MenuImage = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin-right: 0.5rem;
`;

export const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  @media (max-width: 1009px) {
    width: 80%;
  }

  @media (max-width: 641px) {
    width: 100%;
  }
`;

export const NavIcon = styled(Logo)`
  display: flex;
  align-items: center;
  cursor: pointer;

  position: relative;
  left: -4px;
`;



export const RightLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled(Profile)`
  width: 24px;
  height: 24px;
  position: relative;
  top: 0.2rem;
  transition: hover 0.2s ease-in-out;

  &:hover {
    path:nth-child(2) {
      stroke: #5d3f92;
    }
  }
`;
*/
