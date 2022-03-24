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
  Favorite,
  DropdownMenu,
  MenuList,
  MenuText
} from "./Navbar.styles";

import {Wrapper} from "../../pages/CollectionsPage/Collections.styles";

import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  PhotoIco,
  MetaversesIcon,
  CelebrityIco,
  RwaNFT,
  FavoriteIco,
  ProfileIco,
  TopCollectionIco,
  StatisticsIco,
  AboutIco,
  BlogIco,
  FAQIco,
  TwitterIco,
  TelegramIco,
  DiscordIco,
  InstagramIco,
  AddNFTIco,
  AddCollectionIco,
} from "./imports";
import {array} from "yup";



const Navbar = () => {

  const [hovered, setHovered] = useState<any>({
    explore: false,
    activity: false,
    community: false,
    create: false
  })

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
            <StyledList
                onMouseLeave={() => setHovered({explore: false})}
                onMouseEnter={() => setHovered({explore: true})}
            >
              <StyledLink
                  to="/"
                  className={hovered.explore! ? "hovered-explore" : ""}
              >Explore</StyledLink>
              <DropdownMenu>
                <MenuList to="/">
                    <AllNFTsIcon />
                    All NFTs
                </MenuList>
                <MenuList to="/">
                  <NewIcon />
                  New
                </MenuList>
                <MenuList to="/">
                  <ArtIcon/>
                  Artwork
                </MenuList>
                <MenuList to="/">
                  <SportIcon/>
                  Sport
                </MenuList>
                <MenuList to="/">
                  <PhotoIco/>
                  Photography
                </MenuList>
                <MenuList to="/">
                  <MetaversesIcon/>
                  Metaverses
                </MenuList>
                <MenuList to="/">
                  <CelebrityIco/>
                  Celebrity
                </MenuList>
                <MenuList to="/">
                  <RwaNFT/>
                  rwa NFT
                </MenuList>
              </DropdownMenu>
            </StyledList>
            <StyledList
                onMouseLeave={() => setHovered({ activity: false })}
                onMouseEnter={() => setHovered({ activity: true })}
            >
              <StyledLink
                  to="/"
                  className={hovered.activity! ? "hovered-activity" : ""}
              >Activity</StyledLink>
              <DropdownMenu setWidth="146px">
                <MenuList to="/">
                  <TopCollectionIco />
                  Top Collection
                </MenuList>
                <MenuList to="/">
                  <StatisticsIco />
                  Statistics
                </MenuList>
              </DropdownMenu>
            </StyledList>
            <StyledList
                onMouseLeave={() => setHovered({ community: false })}
                onMouseEnter={() => setHovered({ community: true })}
            >
              <StyledLink
                  to="/"
                  className={hovered.community! ? "hovered-community" : ""}
              >Community</StyledLink>
              <DropdownMenu setWidth="150px" left="-1.5rem">
                <MenuList to="/">
                  <AboutIco />
                  About
                </MenuList>
                <MenuList to="/">
                  <BlogIco/>
                  Blog
                </MenuList>
                <MenuList to="/">
                  <FAQIco/>
                  FAQ
                </MenuList>
              </DropdownMenu>
            </StyledList>
            <StyledList
                onMouseLeave={() => setHovered({ create: false })}
                onMouseEnter={() => setHovered({ create: true })}
            >
              <StyledLink
                  to="/"
                  className={hovered.create! ? "hovered-create" : ""}
              >Create</StyledLink>
              <DropdownMenu setWidth="170px" left="-3rem">
                <MenuList to="/">
                  <AddNFTIco />
                  Add NTF
                </MenuList>
                <MenuList to="/">
                  <AddCollectionIco />
                  Add Collection
                </MenuList>
              </DropdownMenu>
            </StyledList>
          </StyledUl>
        </Navigation>
        <Wrapper disp='flex' gap="15px" marg="0 0 0 auto" alignItems="center">
          <StyledLink to="/">
            <Favorite />
          </StyledLink>
          <StyledLink to="/login">
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
