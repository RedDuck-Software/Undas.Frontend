import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Burger from "./Burger";
import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  PhotoIco,
  CelebrityIco,
  RwaNFT,
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
import {
  Header,
  HeaderWrap,
  SearchWrapper,
  SearchIcon,
  Input,
  Navigation,
  NavigationMenu,
  StyledUl,
  IconsUl,
  StyledList,
  StyledLink,
  LanguageTitle,
  Favorite,
  DropdownMenu,
  MenuList,
  MenuListSocial,
  SocialLink,
} from "./Navbar.styles";

import { ReactComponent as Logo } from "../../icons/logo.svg";
import { Wrapper } from "../../pages/CategoriesPage/Categories.styles";
import Context from "../../utils/Context";

const Navbar = () => {
  const [hovered, setHovered] = useState<any>({
    explore: false,
    activity: false,
    community: false,
    create: false,
    profile: false,
  });

  const value = useContext(Context);
  const web3Current = useWeb3React();

  useEffect(() => {
    if (web3Current.account) {
      const { connector } = web3Current;
      if (connector) {
        value.setConnectorFun(connector);
      }
    }
  });

  return (
    <Header>
      <HeaderWrap>
        <Wrapper disp="flex" alignItems="center" marg="0 15px 0 0" w="100%">
          <Link to="/">
            <Logo />
          </Link>
          <SearchWrapper>
            <SearchIcon />
            <Input placeholder="Collection, item or user" type="text" />
          </SearchWrapper>
        </Wrapper>
        <Burger />
        <Navigation>
          <NavigationMenu>
            <StyledUl gap="10px">
              <StyledList
                onMouseLeave={() => setHovered({ explore: false })}
                onMouseEnter={() => setHovered({ explore: true })}
              >
                <StyledLink
                  to="/"
                  className={
                    hovered && hovered.explore ? "hovered-explore" : ""
                  }
                >
                  Explore
                </StyledLink>
                <DropdownMenu>
                  <MenuList to="/all">
                    <AllNFTsIcon />
                    All NFTs
                  </MenuList>
                  <MenuList to="/categories">
                    <NewIcon />
                    New
                  </MenuList>
                  <MenuList to="/categories">
                    <ArtIcon />
                    Artwork
                  </MenuList>
                  <MenuList to="/categories">
                    <SportIcon />
                    Sport
                  </MenuList>
                  <MenuList to="/categories">
                    <PhotoIco />
                    Photography
                  </MenuList>
                  {/* <MenuList to="/categories">
                    <MetaversesIcon/>
                    Metaverses
                  </MenuList> */}
                  <MenuList to="/categories">
                    <CelebrityIco />
                    Celebrity
                  </MenuList>
                  <MenuList to="/categories">
                    <RwaNFT />
                    rwa NFT
                  </MenuList>
                </DropdownMenu>
              </StyledList>
              <StyledList
                onMouseLeave={() => setHovered({ activity: false })}
                onMouseEnter={() => setHovered({ activity: true })}
              >
                <StyledLink
                  to="/topcollection"
                  className={
                    hovered && hovered.activity ? "hovered-activity" : ""
                  }
                >
                  Activity
                </StyledLink>
                <DropdownMenu setWidth="146px" xlWidth="160px">
                  <MenuList to="/topcollection">
                    <TopCollectionIco />
                    Top Collection
                  </MenuList>
                  <MenuList to="/activity">
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
                  className={
                    hovered && hovered.community ? "hovered-community" : ""
                  }
                >
                  Community
                </StyledLink>
                <DropdownMenu setWidth="150px" left="-1.5rem">
                  <MenuList to="/about-us">
                    <AboutIco />
                    About
                  </MenuList>
                  <MenuList to="/blog">
                    <BlogIco />
                    Blog
                  </MenuList>
                  <MenuList to="/faq">
                    <FAQIco />
                    FAQ
                  </MenuList>
                  <MenuListSocial>
                    <SocialLink to="/">
                      <TwitterIco />
                    </SocialLink>
                    <SocialLink to="/">
                      <TelegramIco />
                    </SocialLink>
                    <SocialLink to="/">
                      <DiscordIco />
                    </SocialLink>
                    <SocialLink to="/">
                      <InstagramIco />
                    </SocialLink>
                  </MenuListSocial>
                </DropdownMenu>
              </StyledList>
              <StyledList
                onMouseLeave={() => setHovered({ create: false })}
                onMouseEnter={() => setHovered({ create: true })}
              >
                <StyledLink
                  to="/create-nft"
                  className={hovered && hovered.create ? "hovered-create" : ""}
                >
                  Create
                </StyledLink>
                <DropdownMenu setWidth="170px" left="-3rem" xlWidth="160px">
                  <MenuList to="/create-nft">
                    <AddNFTIco />
                    Add NTF
                  </MenuList>
                  <MenuList to="/create-collection">
                    <AddCollectionIco />
                    Add Collection
                  </MenuList>
                </DropdownMenu>
              </StyledList>
            </StyledUl>
          </NavigationMenu>
          <IconsUl
            justifyContent="space-between"
            mw="100px"
            gap="10px"
            className="icons"
          >
            <StyledList>
              <StyledLink to="/account">
                <Favorite />
              </StyledLink>
            </StyledList>
            <StyledList
              onMouseLeave={() => setHovered({ profile: false })}
              onMouseEnter={() => setHovered({ profile: true })}
            >
              <StyledLink
                to="/login"
                className={hovered && hovered.profile ? "hovered-profile" : ""}
              >
                <ProfileIco />
              </StyledLink>
              <DropdownMenu setWidth="155px" xlWidth="160px" left="-3rem" top="2rem">
                <MenuList to="/account">
                  <ProfileMenuIco />
                  Profile
                </MenuList>
                <MenuList to="/account">
                  <MyCollectionIco />
                  My Collections
                </MenuList>
                <MenuList to="/">
                  <WatchlistIco />
                  Watchlist
                </MenuList>
                <MenuList to="/settings">
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
          </IconsUl>
        </Navigation>
      </HeaderWrap>
    </Header>
  );
};

export default Navbar;
