import React, { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";

import { useWeb3React } from "@web3-react/core";

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { Link } from 'react-router-dom';

import {
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
  MenuListSocial,
  SocialLink
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
  ProfileMenuIco,
  MyCollectionIco,
  WatchlistIco,
  SettingsIco,
  LoginMenuIco,
} from "./imports";



const Navbar = () => {

  const [hovered, setHovered] = useState<any>({
    explore: false,
    activity: false,
    community: false,
    create: false,
    profile: false,
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
        <Wrapper disp="flex" alignItems="center" marg="0 15px 0 0">
          <Link to="/">
            <Logo />
          </Link>
          <SearchWrapper>
            <SearchIcon />
            <Input placeholder="Collection, item or user" type="text"/>
          </SearchWrapper>
        </Wrapper>
        <Navigation>
          <StyledUl gap="10px">
            <StyledList
                onMouseLeave={() => setHovered({explore: false})}
                onMouseEnter={() => setHovered({explore: true})}
            >
              <StyledLink
                  to="/"
                  className={hovered.explore! ? "hovered-explore" : ""}
              >Explore</StyledLink>
              <DropdownMenu>
                <MenuList to="/all">
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
                <MenuListSocial>
                  <SocialLink to="/"><TwitterIco /></SocialLink>
                  <SocialLink to="/"><TelegramIco /></SocialLink>
                  <SocialLink to="/"><DiscordIco /></SocialLink>
                  <SocialLink to="/"><InstagramIco /></SocialLink>
                </MenuListSocial>
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
        <StyledUl justifyContent="space-between" mw="100px" gap="10px">
          <StyledList>
            <StyledLink to="/">
              <Favorite />
            </StyledLink>
          </StyledList>
          <StyledList
              onMouseLeave={() => setHovered({ profile: false })}
              onMouseEnter={() => setHovered({ profile: true })}
          >
            <StyledLink
                to="/login"
                className={hovered.profile! ? "hovered-profile" : ""}
            >
              <ProfileIco />
            </StyledLink>
            <DropdownMenu setWidth="170px" left="-3rem" top="2.10rem">
              <MenuList to="/">
                <ProfileMenuIco />
                Profile
              </MenuList>
              <MenuList to="/">
                <MyCollectionIco />
                My Collections
              </MenuList>
              <MenuList to="/">
                <WatchlistIco />
                Watchlist
              </MenuList>
              <MenuList to="/">
                <SettingsIco />
                Settings
              </MenuList>
              <MenuList to="/login">
                <LoginMenuIco />
                Log in
              </MenuList>
              </DropdownMenu>
          </StyledList>
          <StyledList>
            <StyledLink to="/">
              <LanguageTitle>en</LanguageTitle>
            </StyledLink>
          </StyledList>
        </StyledUl>
      </HeaderWrap>
      <SeoHeading>Undas</SeoHeading>
    </Header>
  );
};

export default Navbar;
