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
                    <MenuImage src={AllNFTsIcon} />
                    All NFTs
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={NewIcon} />
                    New
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={ArtIcon} />
                    Art
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={SportIcon} />
                    Sport
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={GirlsIcon} />
                    Girls
                  </MenuItem>
                  <MenuItem>
                    <MenuImage src={FurnitureIcon} />
                    Furniture
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
