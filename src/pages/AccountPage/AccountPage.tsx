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

import { Container, Background, Button } from '../../globalStyles';

import {
  AccoutBackground,
  AccountSec,
  AccountInformation,
  AccountImage,
  AccountName,
  AccountAddress,
  AccountJoined,
  AccountMenu,
  AccountMenuWrapper,
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
import { useWeb3React } from '@web3-react/core';
import Cookies from 'universal-cookie';

const AccountPage = () => {
  const cookies = new Cookies();
  let { account, deactivate } = useWeb3React();

  cookies.set('account', account, {
    path: '/',
    maxAge: 3600,
    sameSite: 'lax',
    // secure: true,
  });

  console.log(`your account on account page is ${account}`);

  function disconnect() {
    cookies.set('account', '');
    cookies.set('active', '');
    cookies.set('customConnector', '');
    deactivate();
  }
  return (
    <Background>
      <AccoutBackground src={GreyBackground} />
      <AccountSec>
        <Container>
          <AccountInformation>
            <AccountImage src={ProfileImage} />
            <AccountName>Unnamed</AccountName>
            <AccountAddress
              onClick={() => {
                navigator.clipboard.writeText(account as string);
              }}
            >
              {account}
            </AccountAddress>
            <AccountJoined>Joined September 2019</AccountJoined>
            <Button onClick={() => disconnect()}>Sign out</Button>
          </AccountInformation>
        </Container>
        <AccountMenu>
          <Container>
            <AccountMenuWrapper>
              <AccountMenuItem>
                <MdOutlineApps />
                Collected 0
              </AccountMenuItem>
              <AccountMenuItem>
                <RiPaintBrushFill />
                <span>Created</span> 0
              </AccountMenuItem>
            </AccountMenuWrapper>
          </Container>
        </AccountMenu>
        <Container>
          <AccountPageContent>
            <AccountPageContentHeader>
              <AccountSearchWrapper>
                <SearchIcon />
                <SearchInput type="text" placeholder="Search" />
              </AccountSearchWrapper>
              {/* <AccountDropdown>
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
              </ButtonsWrapper> */}
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
