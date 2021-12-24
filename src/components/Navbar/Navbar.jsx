import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import {
  Nav,
  NavbarContainer,
  NavLinkContainer,
  NavLinkDropdownMenu,
  MenuMobileContainer,
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
} from './Navbar.styles'

import {
  AllNFTsIcon,
  NewIcon,
  ArtIcon,
  SportIcon,
  GirlsIcon,
  FurnitureIcon,
  ArrowUp,
} from './imports'

const Navbar = () => {
  const [hoveredExplore, setHoveredExplore] = useState(false)
  const [hoveredActivity, setHoveredActivity] = useState(false)
  const [toogleMenu, setToggleMenu] = useState(false)

  const toggleHoverExplore = () => {
    setHoveredActivity(false)
    setHoveredExplore(!hoveredExplore)
  }

  const toggleHoverActivity = () => {
    setHoveredExplore(false)
    setHoveredActivity(!hoveredActivity)
  }

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
              <NavLink to="/login">
                <ProfileIcon />
              </NavLink>

              {toogleMenu ? (
                <GiHamburgerMenu
                  size={32}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <AiOutlineClose size={32} onClick={() => setToggleMenu(true)} />
              )}

              {!toogleMenu ? (
                <MenuMobile>
                  <NavLinkContainer>
                    <NavLink to="/">Community</NavLink>
                  </NavLinkContainer>
                  <NavLinkContainer>
                    <NavLink to="/">Stats</NavLink>
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
  )
}

export default Navbar
