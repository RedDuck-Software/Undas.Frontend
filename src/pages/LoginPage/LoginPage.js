import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
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

import { isMobile } from 'react-device-detect';
import { MetaMask, Coinbase, WalletConnect, Fortmatic, Trust } from './imports';
import { useWeb3React } from '@web3-react/core';
import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
  resetWalletConnect,
} from '../../components/Wallets/Connectors';
import { useDispatch } from 'react-redux';
import { set } from '../../store';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const web3State = useWeb3React();
  if (web3State.account) {
    dispatch(set);
    return <Navigate to={'/account'} replace={true} />;
  }
  console.log(web3State);
  async function connect(walletConnector) {
    setDisabled(true);
    resetWalletConnect(walletConnector);
    try {
      await web3State.activate(walletConnector);
      setDisabled(false);
    } catch (ex) {
      console.log(ex);
    }
  }
  console.log(`Your address is ${web3State.account}`);

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
              <LoginButton
                onClick={
                  isMobile
                    ? () =>
                        window.open(
                          'https://metamask.app.link/dapp/https://reverent-allen-ae7346.netlify.app/', //it can work only for HTTPS links
                          '_blank'
                        )
                    : () => connect(injected)
                }
                disabled={disabled}
              >
                <ButtonIcon src={MetaMask} />
                <ButtonText>
                  {isMobile
                    ? 'will be available on mobile when we host on HTTPS'
                    : 'MetaMask' + (disabled ? '...' : '')}
                </ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => connect(walletlink)}
                disabled={disabled}
              >
                <ButtonIcon src={Coinbase} />
                <ButtonText>{'Coinbase' + (disabled ? '...' : '')}</ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => connect(walletconnect)}
                disabled={disabled}
              >
                <ButtonIcon src={WalletConnect} />
                <ButtonText>
                  {'WalletConnect' + (disabled ? '...' : '')}
                </ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => connect(fortmatic)}
                disabled={disabled}
              >
                <ButtonIcon src={Fortmatic} />
                <ButtonText>{'Fortmatic' + (disabled ? '...' : '')}</ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => connect(walletconnect)}
                disabled={disabled}
              >
                <ButtonIcon src={Trust} />
                <ButtonText>{'Trust' + (disabled ? '...' : '')}</ButtonText>
              </LoginButton>
            </ButtonWrapper>
          </Container>
        </LoginSec>
      </Background>
    </>
  );
};

export default LoginPage;
