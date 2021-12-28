import React from 'react'

import { MdOutlineApps, MdOutlineGridView } from 'react-icons/md'
import { RiPaintBrushFill } from 'react-icons/ri'
import {
  BsHeart,
  BsEyeSlash,
  BsClockHistory,
  BsFillTagFill,
} from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

import { CardItem } from '../../components'

import { card01, card02, card03, card04 } from './imports'

import GreyBackground from '../../images/image-account/account01.png'
import ProfileImage from '../../images/image-account/profile-image.png'

import { Container, Background, Button } from '../../globalStyles'

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
} from './AccountPage.styles'
import { useDispatch, useSelector } from 'react-redux'
import { setWalletState } from '../../utils/reduxSlices'
import { useWeb3React } from '@web3-react/core'
import { Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const AccountPage = () => {
  const dispatch = useDispatch()
  let { deactivate } = useWeb3React()
  const reduxState = useSelector((state) => {
    return { ...state.wallet }
  })
  const cookies = new Cookies()
  const cookiesAccount = cookies.get('account')
  console.log(cookiesAccount)
  console.log(document.cookie)
  if (!reduxState.active && !cookiesAccount) {
    return <Navigate to={'/login'} replace={true} />
  }

  async function disconnect() {
    cookies.set('account', '')
    cookies.set('active', '')
    await deactivate()
    dispatch(setWalletState({ account: null, active: false, chainId: null }))
  }

  return (
    <Background>
      <AccoutBackground src={GreyBackground} />
      <AccountSec>
        <Container>
          <AccountInformation>
            <AccountImage src={ProfileImage} />
            <AccountName>Unnamed</AccountName>
            <AccountAddress>{cookiesAccount}</AccountAddress>
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
              <AccountMenuItem>
                <BsHeart />
                <span>Favorited</span> 0
              </AccountMenuItem>
              <AccountMenuItem>
                <BsEyeSlash />
                <span>Hidden</span> 2
              </AccountMenuItem>
              <AccountMenuItem>
                <BsClockHistory />
                <span>Activity</span>
              </AccountMenuItem>
              <AccountMenuItem>
                <BsFillTagFill />
                <span>Offers</span>
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
  )
}

export default AccountPage
