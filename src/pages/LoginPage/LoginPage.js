import { useEffect, useState, useContext } from 'react'
import Context from '../../utils/Context'

import { Navigate } from 'react-router-dom'
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

import { isMobile, isAndroid, osVersion } from 'react-device-detect'
import { MetaMask, Coinbase, WalletConnect, Fortmatic, Trust } from './imports'
import { useWeb3React } from '@web3-react/core'
import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
  resetWalletConnect,
} from '../../components/Wallets/Connectors'
import { useDispatch } from 'react-redux'
import { setWalletState } from '../../utils/reduxSlices'
import Cookies from 'universal-cookie'

const cookieOptions = {
  path: '/',
  maxAge: 3600,
  sameSite: 'lax',
  // secure: true,
}

const LoginPage = () => {
  const value = useContext(Context)

  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(false)
  let web3Current = useWeb3React()
  let cookies = new Cookies()
  useEffect(() => {
    if (cookies.get('account')) {
      console.log(injected)
      connectOnLoad(injected)
    }
  }, [])

  async function connectOnLoad(walletConnector) {
    try {
      cookies.set(
        'customConnector',
        Object.assign({}, walletConnector),
        cookieOptions
      )
      await web3Current.activate(walletConnector)
    } catch (ex) {
      console.log(ex)
    }
  }

  if (web3Current.account) {
    let { account, active, chainId, connector } = web3Current
    dispatch(
      setWalletState({
        account,
        active,
        chainId,
      })
    )
    value.setConnectorFun(connector)

    return <Navigate to={'/account'} replace={true} />
  }

  async function connect(walletConnector) {
    setDisabled(true)
    resetWalletConnect(walletConnector)
    try {
      await web3Current.activate(walletConnector)
      return <Navigate to={'/account'} replace={true} />
    } catch (ex) {
      console.log(ex)
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
                    : () => {
                        connect(injected)
                      }
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
                <ButtonText>{'Trust' + (disabled ? '...' : '')}</ButtonText>
              </LoginButton>
            </ButtonWrapper>
          </Container>
        </LoginSec>
      </Background>
    </>
  )
}

export default LoginPage
