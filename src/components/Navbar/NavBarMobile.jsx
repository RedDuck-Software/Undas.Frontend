import React from "react";

import {
    Navigation,
    NavigationMenu
} from "./NavBarMobile.styles";
import {
    StyledUl,
    IconsUl,
    StyledList,
    StyledLink,
    LanguageTitle,
    Favorite,
    DropdownMenu,
    MenuList,
    MenuListSocial,
    SocialLink
  } from "./Navbar.styles";

  import {
    AllNFTsIcon,
    NewIcon,
    ArtIcon,
    SportIcon,
    PhotoIco,
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

const NavBarMobile = ({ open }) => {
    return (
        <Navigation open={open}>
          <NavigationMenu>
            <StyledUl gap="10px">
              <StyledList>
                <StyledLink
                    to="/"
                >Explore</StyledLink>
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
                    <ArtIcon/>
                    Artwork
                  </MenuList>
                  <MenuList to="/categories">
                    <SportIcon/>
                    Sport
                  </MenuList>
                  <MenuList to="/categories">
                    <PhotoIco/>
                    Photography
                  </MenuList>
                  <MenuList to="/categories">
                    <CelebrityIco/>
                    Celebrity
                  </MenuList>
                  <MenuList to="/categories">
                    <RwaNFT/>
                    rwa NFT
                  </MenuList>
                </DropdownMenu>
              </StyledList>
              <StyledList>
                <StyledLink
                    to="/topcollection"
                    
                >Activity</StyledLink>
                <DropdownMenu setWidth="146px">
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
              <StyledList>
                <StyledLink
                    to="/"
                   
                >Community</StyledLink>
                <DropdownMenu setWidth="150px" left="-1.5rem">
                  <MenuList to="/about-us">
                    <AboutIco />
                    About
                  </MenuList>
                  <MenuList to="/blog">
                    <BlogIco/>
                    Blog
                  </MenuList>
                  <MenuList to="/faq">
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
              <StyledList>
                <StyledLink
                    to="/create-nft"
                    
                >Create</StyledLink>
                <DropdownMenu setWidth="170px" left="-3rem">
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
          <IconsUl justifyContent="space-between" mw="100px" gap="10px" className="icons">
            <StyledList>
              <StyledLink to="/">
                <Favorite />
              </StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink
                  to="/login"
              >
                <ProfileIco />
              </StyledLink>
              <DropdownMenu setWidth="170px" left="-3rem" top="2.10rem">
                <MenuList to="/account">
                  <ProfileMenuIco />
                  Profile
                </MenuList>
                <MenuList to="/collection">
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
    )
}

export default NavBarMobile

