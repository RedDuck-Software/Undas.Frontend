import React, { useEffect, useState, useContext } from 'react';
import Context from '../../utils/Context';

import { useWeb3React } from '@web3-react/core';

import { MdOutlineMenu } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowBack } from 'react-icons/io';

import { Button } from '../../globalStyles';

import {
  Nav,
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
  SearchWrapper,
  SearchIcon,
  Input,
  MenuContainer,
  MenuMobile,
  ProfileIcon,
} from './Navbar.styles';

import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  GirlsIcon,
  FurnitureIcon,
  ArrowUp,
} from './imports';

const Navbar = () => {
  const [hoveredExplore, setHoveredExplore] = useState(false);
  const [hoveredActivity, setHoveredActivity] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const [showExplore, setShowExplore] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  const toggleHoverExplore = () => {
    setHoveredActivity(false);
    setHoveredExplore(!hoveredExplore);
  };

  const toggleHoverActivity = () => {
    setHoveredExplore(false);
    setHoveredActivity(!hoveredActivity);
  };

  const toogleShowExplore = () => {
    setShowActivity(false);
    setShowExplore(!showExplore);
  };

  const toogleShowActivity = () => {
    setShowExplore(false);
    setShowActivity(!showActivity);
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
    <>
      <Nav>
        <NavbarContainer>
          <LeftLinks>
            <NavLink nopadding="Left" to="/">
              <NavIcon />
            </NavLink>
            <SearchWrapper>
              <SearchIcon />
              <Input type="text" placeholder="Collection, item or user" />
            </SearchWrapper>
          </LeftLinks>
          <RightLinks>
            <MenuContainer>
              <NavLinkExplore to="/listing">Listing</NavLinkExplore>
              <NavLinkExplore to="/staking">Staking</NavLinkExplore>
              <NavLinkContainer onMouseLeave={toggleHoverExplore}>
                <NavLinkExplore
                  to="/"
                  onMouseEnter={toggleHoverExplore}
                  className={hoveredExplore ? 'hovered-explore' : ''}
                >
                  Explore
                </NavLinkExplore>
                <NavLinkDropdownMenu>
                  <MenuItem>
                    <MenuItemLink to="/assets">
                      <MenuImage src={AllNFTsIcon} />
                      All NFTs
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink to="/assets/new">
                      <MenuImage src={NewIcon} />
                      New
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink to="/explore/art">
                      <MenuImage src={ArtIcon} />
                      Art
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink to="/explore/sport">
                      <MenuImage src={SportIcon} />
                      Sport
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink to="/explore/girls">
                      <MenuImage src={GirlsIcon} />
                      Girls
                    </MenuItemLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLink to="/explore/furniture">
                      <MenuImage src={FurnitureIcon} />
                      Furniture
                    </MenuItemLink>
                  </MenuItem>
                </NavLinkDropdownMenu>
              </NavLinkContainer>
              <NavLinkContainer onMouseLeave={toggleHoverActivity}>
                <NavLinkActivity
                  to="/"
                  onMouseEnter={toggleHoverActivity}
                  className={hoveredActivity ? 'hovered-activity' : ''}
                >
                  Activity
                </NavLinkActivity>
                <NavLinkDropdownMenu>
                  <MenuItem>
                    <MenuImage src={ArrowUp} />
                    Top collection
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={ArrowUp} />
                    Top buyers
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={ArrowUp} />
                    Top artists
                  </MenuItem>
                </NavLinkDropdownMenu>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink to="/">Community</NavLink>
              </NavLinkContainer>
              <NavLinkContainer>
                <NavLink to="/">Stats</NavLink>
              </NavLinkContainer>
              <NavLink nopadding="Right" to="/login">
                <ProfileIcon />
              </NavLink>
            </MenuContainer>

            <MenuMobileContainer>
              {showMenu ? (
                <MdOutlineMenu size={34} onClick={() => setShowMenu(false)} />
              ) : (
                <RiCloseFill size={34} onClick={() => setShowMenu(true)} />
              )}

              {!showMenu ? (
                <MenuMobile>
                  <NavLinkContainer>
                    <NavLink to="/listing">
                      <MenuMobileTitle>Listing</MenuMobileTitle>
                    </NavLink>
                  </NavLinkContainer>
                  <NavLinkContainer>
                    <NavLink to="/staking">
                      <MenuMobileTitle>Staking</MenuMobileTitle>
                    </NavLink>
                  </NavLinkContainer>
                  <NavLinkContainer onClick={toogleShowExplore}>
                    <MenuMobileTitle>Explore</MenuMobileTitle>

                    {showExplore ? (
                      <IoIosArrowDown size={20} />
                    ) : (
                      <IoIosArrowBack size={20} />
                    )}

                    {showExplore ? (
                      <MenuMobile>
                        <NavLinkContainer>
                          <NavLink to="/assets" onClick={toggleShowMenu}>
                            <MenuImage src={AllNFTsIcon} />
                            All NFTs
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/assets/new" onClick={toggleShowMenu}>
                            <MenuImage src={NewIcon} />
                            New
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/explore/art" onClick={toggleShowMenu}>
                            <MenuImage src={ArtIcon} />
                            Art
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/explore/sport" onClick={toggleShowMenu}>
                            <MenuImage src={SportIcon} />
                            Sport
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/explore/girls" onClick={toggleShowMenu}>
                            <MenuImage src={GirlsIcon} />
                            Girls
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink
                            to="/explore/furniture"
                            onClick={toggleShowMenu}
                          >
                            <MenuImage src={FurnitureIcon} />
                            Furniture
                          </NavLink>
                        </NavLinkContainer>
                      </MenuMobile>
                    ) : (
                      <></>
                    )}
                  </NavLinkContainer>

                  <NavLinkContainer onClick={toogleShowActivity}>
                    <MenuMobileTitle>Activity</MenuMobileTitle>

                    {showActivity ? (
                      <IoIosArrowDown size={20} />
                    ) : (
                      <IoIosArrowBack size={20} />
                    )}

                    {showActivity ? (
                      <MenuMobile>
                        <NavLinkContainer>
                          <NavLink to="/" onClick={toggleShowMenu}>
                            <MenuImage src={ArrowUp} />
                            Top collection
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/" onClick={toggleShowMenu}>
                            <MenuImage src={ArrowUp} />
                            Top buyers
                          </NavLink>
                        </NavLinkContainer>
                        <NavLinkContainer>
                          <NavLink to="/" onClick={toggleShowMenu}>
                            <MenuImage src={ArrowUp} />
                            Top artists
                          </NavLink>
                        </NavLinkContainer>
                      </MenuMobile>
                    ) : (
                      <></>
                    )}
                  </NavLinkContainer>

                  <NavLinkContainer>
                    <MenuMobileTitle>Community</MenuMobileTitle>
                    <IoIosArrowBack size={20} />
                  </NavLinkContainer>

                  <NavLinkContainer>
                    <MenuMobileTitle>Stats</MenuMobileTitle>
                    <IoIosArrowBack size={20} />
                  </NavLinkContainer>

                  <NavLinkContainer>
                    <NavLink to="/login" onClick={toggleShowMenu}>
                      <Button violet>Connect wallet</Button>
                    </NavLink>
                  </NavLinkContainer>
                </MenuMobile>
              ) : (
                <></>
              )}
            </MenuMobileContainer>
          </RightLinks>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
