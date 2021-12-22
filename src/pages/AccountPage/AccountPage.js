import React from 'react';

import { MdOutlineApps, MdOutlineGridView } from 'react-icons/md';
import { RiPaintBrushFill } from 'react-icons/ri';
import {
  BsHeart,
  BsEyeSlash,
  BsClockHistory,
  BsFillTagFill,
} from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

import { CardItem } from '../../components';

import { card01, card02, card03, card04 } from './imports';

import GreyBackground from '../../images/image-account/account01.png';
import ProfileImage from '../../images/image-account/profile-image.png';

import { Container, Background } from '../../globalStyles';

import {
  AccoutBackground,
  AccountSec,
  AccountInformation,
  AccountImage,
  AccountName,
  AccountAddress,
  AccountJoined,
  AccountMenu,
  AccountMenuItem,
  AccountPageContent,
  AccountPageContentHeader,
  AccountSearchWrapper,
  SearchIcon,
  SearchInput,
  AccountDropdown,
  ButtonsWrapper,
  ButtonView2x2,
  ButtonView3x3,
  AccountCardsWrapper,
} from './AccountPage.styles';
import { useLocation } from 'react-router-dom';

const AccountPage = () => {
  const location = useLocation();
  return (
    <Background>
      <AccoutBackground src={GreyBackground} />
      <AccountSec>
        <Container>
          <AccountInformation>
            <AccountImage src={ProfileImage} />
            <AccountName>Unnamed</AccountName>
            <AccountAddress>{location.state}</AccountAddress>
            <AccountJoined>Joined September 2019</AccountJoined>
            <button>Sign out</button>
          </AccountInformation>
        </Container>
        <AccountMenu>
          <Container>
            <AccountMenuItem>
              <MdOutlineApps />
              Collected 0
            </AccountMenuItem>
            <AccountMenuItem>
              <RiPaintBrushFill />
              Created 0
            </AccountMenuItem>
            <AccountMenuItem>
              <BsHeart />
              Favorited 0
            </AccountMenuItem>
            <AccountMenuItem>
              <BsEyeSlash />
              Hidden 2
            </AccountMenuItem>
            <AccountMenuItem>
              <BsClockHistory />
              Activity
            </AccountMenuItem>
            <AccountMenuItem>
              <BsFillTagFill />
              Offers
            </AccountMenuItem>
          </Container>
        </AccountMenu>
        <Container>
          <AccountPageContent>
            <AccountPageContentHeader>
              <AccountSearchWrapper>
                <SearchIcon />
                <SearchInput type="text" placeholder="Search" />
              </AccountSearchWrapper>
              <AccountDropdown>
                Single items <IoIosArrowDown />
              </AccountDropdown>
              <AccountDropdown>
                Recently Received <IoIosArrowDown />
              </AccountDropdown>
              <ButtonsWrapper>
                <ButtonView2x2>
                  <MdOutlineGridView />
                </ButtonView2x2>
                <ButtonView3x3>
                  <MdOutlineApps />
                </ButtonView3x3>
              </ButtonsWrapper>
            </AccountPageContentHeader>
            <AccountCardsWrapper>
              <CardItem image={card01} />
              <CardItem image={card02} />
              <CardItem image={card03} />
              <CardItem image={card04} />
              <CardItem image={card01} />
              <CardItem image={card02} />
              <CardItem image={card03} />
              <CardItem image={card04} />
            </AccountCardsWrapper>
          </AccountPageContent>
        </Container>
      </AccountSec>
    </Background>
  );
};

export default AccountPage;
