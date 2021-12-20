import React from 'react';

import { Container, Background } from '../../globalStyles';
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
} from './LoginPage.styles';

import { MetaMask, Coinbase, WalletConnect, Fortmatic } from './imports';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../components/Wallets/Connectors';

const LoginPage = () => {
  const { activate, account } = useWeb3React();
  async function connectMetaMask() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  console.log(`Your address is ${account}`);

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
              <LoginButton onClick={connectMetaMask}>
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
  );
};

export default LoginPage;
