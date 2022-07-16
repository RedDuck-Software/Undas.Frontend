import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Burger from "./Burger";
import {
  AllNFTsIcon,
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
  ReddditIco,
  AddNFTIco,
  AddCollectionIco,
  ProfileMenuIco,
  AchievementsIco,
  SettingsIco,
  LoginMenuIco,
  Ico18,
  ReferralIco,
  GameFi,
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
    lang: false,
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
                  to="/all"
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
                  <MenuList to="/categories-art">
                    <ArtIcon />
                    Artwork
                  </MenuList>
                  <MenuList to="/categories-sport">
                    <SportIcon />
                    Sport
                  </MenuList>
                  <MenuList to="/categories-photo">
                    <PhotoIco />
                    Photography
                  </MenuList>
                  <MenuList to="/categories-gimefi">
                    <GameFi />
                    GameFi
                  </MenuList>
                  {/* <MenuList to="/categories">
                    <MetaversesIcon/>
                    Metaverses
                  </MenuList> */}
                  <MenuList to="/categories-celebrity">
                    <CelebrityIco />
                    Celebrity
                  </MenuList>
                  <MenuList to="/categories-rwa">
                    <RwaNFT />
                    rwa NFT
                  </MenuList>
                  <MenuList to="/categories-18plus" className="last">
                    <Ico18 />
                    18+ NFTs
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
                  <MenuList to="/activity" className="last">
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
                  to="/about-us"
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
                    {/*<SocialLink to="/">
                      <InstagramIco />
                      </SocialLink>*/}
                    <SocialLink to="/">
                      <ReddditIco />
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
                <DropdownMenu setWidth="170px" left="-3rem" xlWidth="170px">
                  <MenuList to="/create-nft">
                    <AddNFTIco />
                    Add NTF
                  </MenuList>
                  <MenuList to="/create-collection" className="last">
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
              <StyledLink to={"/account"} state={{ tab: "favourite" }}>
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
              <DropdownMenu
                setWidth="165px"
                xlWidth="180px"
                left="-4rem"
                top="2rem"
              >
                <MenuList to="/account">
                  <ProfileMenuIco />
                  Profile
                </MenuList>
                <MenuList to="/referral">
                  <ReferralIco />
                  Referral
                </MenuList>
                <MenuList to="/achievements">
                  <AchievementsIco />
                  Achievements
                </MenuList>
                <MenuList to="/settings">
                  <SettingsIco />
                  Settings
                </MenuList>
                <MenuList to="/login" className="last">
                  <LoginMenuIco />
                  Log in
                </MenuList>
              </DropdownMenu>
            </StyledList>
            <StyledList
              onMouseLeave={() => setHovered({ lang: false })}
              onMouseEnter={() => setHovered({ lang: true })}
            >
              <StyledLink
                to="/"
                className={hovered && hovered.lang ? "hovered-lang" : ""}
              >
                <LanguageTitle>en</LanguageTitle>
              </StyledLink>
              <DropdownMenu
                setWidth="65px"
                left="-1rem"
                top="2rem"
                xlWidth="90px"
              >
                <MenuList to="/">RU</MenuList>
                <MenuList to="/" className="last">
                  中国人
                </MenuList>
              </DropdownMenu>
            </StyledList>
          </IconsUl>
        </Navigation>
      </HeaderWrap>
    </Header>
  );
};

export default Navbar;
