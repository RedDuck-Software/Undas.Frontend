import React from 'react';

import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  PhotoIco,
  CelebrityIco,
  RwaNFT,
  TopCollectionIco,
  StatisticsIco,
  AboutIco,
  BlogIco,
  FAQIco,
  TwitterIco,
  TelegramIco,
  DiscordIco,
  /*InstagramIco,*/
  AddNFTIco,
  AddCollectionIco,
  ProfileMenuIco,
  MyCollectionIco,
  WatchlistIco,
  SettingsIco,
  LoginMenuIco,
  ExploreIco,
  ActivityIco,
  CommunityIco,
  CreateIco,
  MobileFavoriteIco,
  MobileAccountIco,
  ReddditIco,
} from './imports';
import { LanguageTitle, SocialLink } from './Navbar.styles';
import {
  Navigation,
  NavigationMenu,
  Blur,
  MobileUl,
  MobileStyledLink,
  MobileStyledList,
  HeaderDropdownButton,
  HeaderDropdownItem,
  IconInner,
  MobileMenuListSocial,
} from './NavBarMobile.styles';


const NavBarMobile = ({ open }) => {
  return (
    <Navigation open={open}>
      <Blur open={open} />
      <NavigationMenu>
        <MobileUl
          justifyContent="space-between"
          mw="100px"
          gap="10px"
          className="icons"
        >
          <MobileStyledList className="language">
            <MobileStyledLink to="/">
              <LanguageTitle>en</LanguageTitle>
            </MobileStyledLink>
            <MobileStyledLink to="/">
              <LanguageTitle>RU</LanguageTitle>
            </MobileStyledLink>
            <MobileStyledLink to="/">
              <LanguageTitle>中国人</LanguageTitle>
            </MobileStyledLink>
          </MobileStyledList>
          <MobileStyledList>
            <IconInner>
              <MobileFavoriteIco />
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Favorite">
              <HeaderDropdownItem href="account">
                <AllNFTsIcon />
                Favourite NFTs
              </HeaderDropdownItem>
              <HeaderDropdownItem href="account">
                <AllNFTsIcon />
                Favourite Collections
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>
          <MobileStyledList>
            <IconInner>
              <MobileAccountIco />{' '}
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Account">
              <HeaderDropdownItem href="account">
                <ProfileMenuIco />
                Profile
              </HeaderDropdownItem>
              <HeaderDropdownItem href="collection">
                <MyCollectionIco />
                Collections
              </HeaderDropdownItem>
              <HeaderDropdownItem href="#">
                <WatchlistIco />
                Watchlist
              </HeaderDropdownItem>
              <HeaderDropdownItem href="settings">
                <SettingsIco />
                Settings
              </HeaderDropdownItem>
              <HeaderDropdownItem href="login">
                <LoginMenuIco />
                Log in
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>

          <MobileStyledList>
            <IconInner>
              <ExploreIco />
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Explore">
              <HeaderDropdownItem href="all" className="dropdown-item">
                <AllNFTsIcon />
                All NFTs
              </HeaderDropdownItem>
              <HeaderDropdownItem href="assets/new">
                <NewIcon />
                New
              </HeaderDropdownItem>
              <HeaderDropdownItem href="explore/art">
                <ArtIcon />
                Artwork
              </HeaderDropdownItem>
              <HeaderDropdownItem href="categories">
                <SportIcon />
                Sport
              </HeaderDropdownItem>
              <HeaderDropdownItem href="categories">
                <PhotoIco />
                Photography
              </HeaderDropdownItem>
              <HeaderDropdownItem href="categories">
                <CelebrityIco />
                Celebrity
              </HeaderDropdownItem>
              <HeaderDropdownItem href="categories">
                <RwaNFT />
                rwaNFT
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>
          <MobileStyledList>
            <IconInner>
              <ActivityIco />
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Activity">
              <HeaderDropdownItem href="topcollection">
                <TopCollectionIco />
                Top collection
              </HeaderDropdownItem>
              <HeaderDropdownItem href="activity">
                <StatisticsIco />
                Statistics
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>
          <MobileStyledList>
            <IconInner>
              <CommunityIco />
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Community">
              <HeaderDropdownItem href="about-us">
                <AboutIco />
                About
              </HeaderDropdownItem>
              <HeaderDropdownItem href="blog">
                <BlogIco />
                Blog
              </HeaderDropdownItem>
              <HeaderDropdownItem href="faq">
                <FAQIco />
                FAQ
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>

          <MobileStyledList>
            <IconInner>
              <CreateIco />
            </IconInner>
            <HeaderDropdownButton id="header-dropdown-button" title="Create">
              <HeaderDropdownItem href="create-nft">
                <AddNFTIco />
                Add NTF
              </HeaderDropdownItem>
              <HeaderDropdownItem href="create-collection">
                <AddCollectionIco />
                Add Collection
              </HeaderDropdownItem>
            </HeaderDropdownButton>
          </MobileStyledList>
          <MobileStyledList>
            <MobileMenuListSocial>
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
                <ReddditIco />
              </SocialLink>
              {/*<SocialLink to="/">
                <InstagramIco />
               </SocialLink>*/}
            </MobileMenuListSocial>
          </MobileStyledList>
        </MobileUl>
      </NavigationMenu>
    </Navigation>
  );
};

export default NavBarMobile;
