import React from 'react'

import { Container, Background } from '../../globalStyles'
import {
  LoginSec,
  TextWrapper,
  LoginTitle,
  LoginText,
  VioletText,
  ButtonWrapper,
  LoginButton,
  ButtonIcon,
  ButtonText,
} from './LoginPage.styles'

import { MetaMask, Coinbase, WalletConnect, Fortmatic } from './imports'

const LoginPage = () => {
  return (
    <>
      <Background>
        <LoginSec>
          <Container>
            <TextWrapper>
              <LoginTitle>
                You need an Ethereum wallet to use{' '}
                <VioletText>OpenSea.</VioletText>
              </LoginTitle>
              <LoginText>
                Connect with one of our available{' '}
                <VioletText>wallet info</VioletText> providers or create a new
                one.
              </LoginText>
            </TextWrapper>
            <ButtonWrapper>
              <LoginButton>
                <ButtonIcon src={MetaMask} />
                <ButtonText>MetaMask</ButtonText>
              </LoginButton>
              <LoginButton>
                <ButtonIcon src={Coinbase} />
                <ButtonText>Coinbase</ButtonText>
              </LoginButton>
              <LoginButton>
                <ButtonIcon src={WalletConnect} />
                <ButtonText>WalletConnect</ButtonText>
              </LoginButton>
              <LoginButton>
                <ButtonIcon src={Fortmatic} />
                <ButtonText>Fortmatic</ButtonText>
              </LoginButton>
              <LoginButton>
                <ButtonText>Show more options</ButtonText>
              </LoginButton>
            </ButtonWrapper>
          </Container>
        </LoginSec>
      </Background>
    </>
  )
}

export default LoginPage
