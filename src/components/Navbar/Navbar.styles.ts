import styled from 'styled-components';
import { ReactComponent as LogoIco } from '../../icons/logo.svg';
import { ReactComponent as Search } from '../../icons/search.svg';
import { ReactComponent as Profile } from '../../icons/profile.svg';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import { FavoriteIco, ProfileIco } from './imports'

export const Header = styled.header `
  height: 40px;
  position: fixed;
  //overflow: auto;
  width: 100%;
  background-color: #fff;
  box-shadow: inset 0px -1px 1px rgba(124, 124, 124, 0.2);
  backdrop-filter: blur(50px);
  z-index: 999;
`

export const HeaderWrap = styled(Container) `
  display: flex;
  align-items: center;
  height: 100%;
  ${Container}
`
export const SeoHeading = styled.h1 `
  text-indent: -3333px;
`

export const SearchWrapper = styled.div`
  padding-left: 10px;
  margin-left: 10px;
  //cursor: not-allowed;
  display: flex;
  align-items: center;
  width: 36vw;
  max-width: 525px;
  height: 26px;
  background: #EBDFFF;
  border-radius: 5px;


  /* @media (max-width: 1119px) {
     margin-left: 0rem;
     max-width: 400px;
   }
 
   @media (max-width: 1009px) {
     width: 100%;
     max-width: 909px;
   }*/
`;

export const SearchIcon = styled(Search)`
  width: 15px;
  height: auto;
  margin-right: 10px;
`;

export const Input = styled.input`
  //cursor: not-allowed;

  color: #7c7c7c;
  border: transparent;
  //font-size: 1.055rem;
  font-size: 14px;
  background: transparent;
  padding-right: 0.5rem;
  outline: none;
  width: 100%;

  /*&:focus::placeholder {
    color: transparent;
  }

  @media (max-width: 584px) {
    &::placeholder {
      visibility: hidden;
    }
  }*/
`;


export const Navigation = styled.nav `
  width: 38vw;
  margin-right: 30px;
`
export const StyledUl = styled.ul `
  display: flex;
  justify-content: space-between;
  //gap: 30px;
  width: 100%;
  list-style: none;
`

export const StyledList = styled.li `
  padding-right: 10px;
  position: relative;
`
export const DropdownMenu = styled.ul `
  position: absolute;
  border-radius: 0 0 10px 10px;
  top: 1.9rem;
  left: -2rem;
  background-color: #fff;
  width: 133px;
  list-style: none;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
`

export const StyledLink = styled(Link) `
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #7C7C7C;
  text-decoration: none;
  transition: all ease-in-out 0.25s;
  padding: 1.2rem 0;
  &:hover {
    color: #873DC1;
  }
  &.hovered-explore + ${DropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`


export const MenuList = styled(Link) `
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.15s;
  font-weight: 400;
  font-size: 14px;
  color: #7C7C7C;
  text-decoration: none;
  box-shadow: inset 0px 0px 1px rgba(135, 61, 193, 0.5);
  &:hover {
    box-shadow: inset 0px -3px 4px rgba(124, 124, 124, 0.25);
    font-weight: 500;
    color: #873DC1;
  }
`

export const MenuText = styled.span `
  font-weight: 400;
  font-size: 14px;
  color: #7C7C7C;
`

export const Favorite = styled(FavoriteIco) `
  fill: none;
  &:hover {
    fill: aqua;
  }
`

export const LanguageTitle = styled.span `
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #7C7C7C;
`

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
