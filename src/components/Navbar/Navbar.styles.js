import styled from 'styled-components'
import { ReactComponent as Logo } from '../../icons/logo.svg'
import { ReactComponent as Search } from '../../icons/search.svg'
import { ReactComponent as Profile } from '../../icons/profile.svg'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
  height: 4rem;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  border: 2px solid #edd2ff;
  background: #fff;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 984px) {
    justify-content: center;
  }

  ${Container}
`

export const NavLinkContainer = styled.div`
  display: inline-block;
  position: relative;
`

export const NavLinkDropdownMenu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: -1rem;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 99;
`

export const NavLink = styled(Link)`
  padding: ${({ nopadding }) =>
    (nopadding === 'Left' && '1.15rem 1rem 1rem 0') ||
    (nopadding === 'Right' && '1.2rem 0 1rem 1rem') ||
    '1.2rem 1rem'};
  text-decoration: none;
  font-size: 1.1rem;
  color: #7c7c7c;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #5d3f92;
  }
`

export const MenuItemLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;

  &:visited {
    color: #7c7c7c;
  }
`

export const NavLinkExplore = styled(NavLink)`
  &.hovered-explore + ${NavLinkDropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`

export const NavLinkActivity = styled(NavLink)`
  &.hovered-activity + ${NavLinkDropdownMenu} {
    opacity: 1;
    visibility: visible;
    cursor: pointer;
  }
`

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

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:hover {
    box-shadow: inset rgba(0, 0, 0, 0.19) 0px 1px 2px,
      rgba(0, 0, 0, 0.23) 0px 3px 3px;
  }
`

export const MenuContainer = styled.div`
  visibility: visible;

  @media (max-width: 1009px) {
    visibility: hidden;
  }
`

export const MenuMobileContainer = styled.div`
  display: none;

  @media (max-width: 1009px) {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
    color: #5d3f92;
  }
`

export const MenuMobile = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  text-align: end;
  background: #fff;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 40px;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`

export const MenuImage = styled.img`
  max-width: 24px;
  max-height: 24px;
  margin-right: 0.5rem;
`

export const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  @media (max-width: 1009px) {
    flex: 3;
  }
`

export const NavIcon = styled(Logo)`
  display: flex;
  align-items: center;
  cursor: pointer;

  position: relative;
  left: -4px;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
  height: 40px;
  background: #ebdfff;
  border-radius: 8px;
  margin-left: 4rem;

  @media (max-width: 1119px) {
    max-width: 400px;
  }

  @media (max-width: 1069px) {
    margin-left: 0rem;
  }

  @media (max-width: 1009px) {
    width: 100%;
    max-width: 909px;
  }
`

export const SearchIcon = styled(Search)`
  width: 18px;
  height: 17px;
  margin: 0.625rem 0.625rem 0.625rem 1rem;
`

export const Input = styled.input`
  color: #7c7c7c;
  border: transparent;
  font-size: 1.055rem;
  background: transparent;
  padding-top: 0.3rem;
  outline: none;

  &:focus::placeholder {
    color: transparent;
  }
`

export const RightLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1009px) {
    flex: 1;
  }
`

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
`
