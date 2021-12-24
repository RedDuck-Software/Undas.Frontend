import React, { useState, useEffect } from 'react';
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

import { isMobile, isAndroid, osVersion } from 'react-device-detect';
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
import { setWalletState } from '../../utils/reduxSlices';
import Cookies from 'universal-cookie';

const cookieOptions = {
  path: '/',
  maxAge: 3600,
  sameSite: 'lax',
  // secure: true,
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const web3State = useWeb3React();
  let cookies = new Cookies();
  let cookieAccount = cookies.get('web3State')?.account;
  async function connectOnLoad(walletConnector) {
    try {
      await web3State.activate(walletConnector);
      cookies.set('active', cookies.get('active'), cookieOptions);
      cookies.set('account', cookies.get('account'), cookieOptions);
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    cookies.set('active', web3State.active, cookieOptions);
    cookies.set('account', web3State.account, cookieOptions);
  }, [web3State]);
  console.log(`Your address is ${web3State.account}`);
  if (cookieAccount) {
    // TODO: pass a connector into function
    connectOnLoad();
    const active = cookies.get('web3State')?.active;
    const chainId = cookies.get('web3State')?.active;
    dispatch(
      setWalletState({
        cookieAccount,
        active,
        chainId,
      })
    );
    return <Navigate to={'/account'} replace={true} />;
  }
  if (web3State.account) {
    let { account, active, chainId } = web3State;
    dispatch(
      setWalletState({
        account,
        active,
        chainId,
      })
    );
    return <Navigate to={'/account'} replace={true} />;
  }

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

  return (
    <>
      <Background>
        <LoginSec>
          <Container>
            <TextWrapper>
              <LoginTitle>
                You need an Ethereum wallet to use
                <VioletText>OpenSea.</VioletText>
              </LoginTitle>
              <LoginText>
                Connect with one of our available{' '}
                <VioletText>wallet info</VioletText> providers or create a new
                one.{' '}
              </LoginText>
            </TextWrapper>
            <ButtonWrapper>
              <LoginButton
                onClick={
                  isMobile
                    ? () => connect(walletconnect)
                    : () => connect(injected)
                }
                disabled={disabled}
              >
                <ButtonIcon src={MetaMask} />
                <ButtonText>{'MetaMask' + (disabled ? '...' : '')}</ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => connect(walletlink)}
                disabled={isMobile ? true : disabled}
              >
                <ButtonIcon src={Coinbase} />
                <ButtonText>
                  {isMobile
                    ? 'Coinbase (desktop only)'
                    : 'Coinbase' + (disabled ? '...' : '')}
                </ButtonText>
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
                onClick={
                  isAndroid && osVersion === '11'
                    ? () =>
                        window.open(
                          'https://link.trustwallet.com/open_url?coin_id=60&url=https://reverent-allen-ae7346.netlify.app',
                          '_blank'
                        )
                    : () => connect(walletconnect)
                }
                disabled={disabled}
              >
                <ButtonIcon src={Trust} />
                <ButtonText>{'Trust' + disabled ? '...' : ''}</ButtonText>
              </LoginButton>
            </ButtonWrapper>
          </Container>
        </LoginSec>
      </Background>
    </>
  );
};

export default LoginPage;
