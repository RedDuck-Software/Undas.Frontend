import React, { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";

import { useWeb3React } from "@web3-react/core";

import { MdOutlineMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import { ReactComponent as Logo } from '../../icons/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from "../../globalStyles";

import {
  /*Nav,
  NavbarContainer,
  NavLinkContainer,
  NavLinkDropdownMenu,
  MenuMobileContainer,
  MenuMobileTitle,
  MenuItem,
  MenuItemLink,
  MenuImage,
  NavLink,
  NavLinkExplore,
  NavLinkActivity,
  LeftLinks,
  RightLinks,
  NavIcon,
  Input,
  MenuContainer,
  MenuMobile,
  ProfileIcon,
  MenuItemLinkDisabled,
  NavLinkActivityDisabled,*/
  Header,
  HeaderWrap,
  SearchWrapper,
  SearchIcon,
  SeoHeading,
  Input,
  Navigation,
  StyledUl,
  StyledList,
  StyledLink,
  LanguageTitle,
  Favorite
} from "./Navbar.styles";

import {Wrapper} from "../../pages/CollectionsPage/Collections.styles";

import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  GirlsIcon,
  FurnitureIcon,
  ArrowUp,
  FavoriteIco, ProfileIco
} from "./imports";

const Navbar = () => {
  const [hoveredExplore, setHoveredExplore] = useState(false);
  const [hoveredActivity, setHoveredActivity] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [showExplore, setShowExplore] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const [showSearch] = useState(true);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  const toggleHoverExplore = () => {
    setHoveredActivity(false);
    setHoveredExplore(!hoveredExplore);
  };

  const toggleHoverActivity = () => {
    setHoveredExplore(false);
    // setHoveredActivity(!hoveredActivity);
  };

  const toogleShowExplore = () => {
    setShowActivity(false);
    setShowExplore(!showExplore);
  };

  const toogleShowActivity = () => {
    setShowExplore(false);
    // setShowActivity(!showActivity);
  };

  const value = useContext(Context);
  let web3Current = useWeb3React();

  useEffect(() => {
    if (web3Current.account) {
      let { connector } = web3Current;
      if (connector) {
        value.setConnectorFun(connector);
      }
    }
  });

  return (
    <Header>
      <HeaderWrap>
        <Wrapper disp="flex" alignItems="center" marg="0 30px 0 0">
          <Link to="/">
            <Logo />
          </Link>
          <SearchWrapper>
            <SearchIcon />
            <Input placeholder="Collection, item or user" type="text"/>
          </SearchWrapper>
        </Wrapper>
        <Navigation>
          <StyledUl>
            <StyledList>
              <StyledLink to="/">Explore</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="/">Activity</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="/">Community</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="/">Create</StyledLink>
            </StyledList>
          </StyledUl>
        </Navigation>
        <Wrapper disp='flex' gap="15px" marg="0 0 0 auto" alignItems="center">
          <StyledLink to="/">
            <Favorite />
          </StyledLink>
          <StyledLink to="/">
            <ProfileIco />
          </StyledLink>
          <StyledLink to="/">
            <LanguageTitle>en</LanguageTitle>
          </StyledLink>
        </Wrapper>
      </HeaderWrap>
      <SeoHeading>Undas</SeoHeading>
    </Header>
  );
};

export default Navbar;
