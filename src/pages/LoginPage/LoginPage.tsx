import { useEffect, useState, useContext } from "react";
import Context from "../../utils/Context";

import { AbstractConnector } from "@web3-react/abstract-connector";

import { Navigate } from "react-router-dom";
import { Container, Background } from "../../globalStyles";
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
} from "./LoginPage.styles";

import { isMobile, isAndroid, osVersion } from "react-device-detect";
import { MetaMask, Coinbase, WalletConnect, Fortmatic, Trust } from "./imports";
import { useWeb3React } from "@web3-react/core";
import {
  injected,
  walletconnect,
  fortmatic,
  walletlink,
  resetWalletConnect,
} from "../../components/Wallets/Connectors";

const LoginPage = () => {
  const value = useContext(Context);

  const [disabled, setDisabled] = useState(false);
  let web3Current = useWeb3React();

  if (web3Current.account) {
    let { connector } = web3Current;

    if (connector) {
      value.setConnectorFun(connector);
      return <Navigate to={"/account"} replace={true} />;
    }
  }

  async function connect(walletConnector: AbstractConnector) {
    setDisabled(true);
    resetWalletConnect(walletConnector);
    try {
      await web3Current.activate(walletConnector);
      return <Navigate to={"/account"} replace={true} />;
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
                Connect with one of our available{" "}
                <VioletText>wallet info</VioletText> providers or create a new
                one.{" "}
              </LoginText>
            </TextWrapper>
            <ButtonWrapper>
              <LoginButton
                onClick={() => {
                  localStorage.setItem("connector", "injected");
                  isMobile ? connect(walletconnect) : connect(injected);
                }}
                disabled={disabled}
              >
                <ButtonIcon src={MetaMask} />
                <ButtonText>{"MetaMask" + (disabled ? "..." : "")}</ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => {
                  localStorage.setItem("connector", "walletlink");
                  connect(walletlink);
                }}
                disabled={isMobile ? true : disabled}
              >
                <ButtonIcon src={Coinbase} />
                <ButtonText>
                  {isMobile
                    ? "Coinbase (desktop only)"
                    : "Coinbase" + (disabled ? "..." : "")}
                </ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => {
                  localStorage.setItem("connector", "walletconnect");
                  connect(walletconnect);
                }}
                disabled={disabled}
              >
                <ButtonIcon src={WalletConnect} />
                <ButtonText>
                  {"WalletConnect" + (disabled ? "..." : "")}
                </ButtonText>
              </LoginButton>
              <LoginButton
                onClick={() => {
                  localStorage.setItem("connector", "fortmatic");
                  connect(fortmatic);
                }}
                disabled={disabled}
              >
                <ButtonIcon src={Fortmatic} />
                <ButtonText>{"Fortmatic" + (disabled ? "..." : "")}</ButtonText>
              </LoginButton>
              <LoginButton
                onClick={
                  isAndroid && osVersion === "11"
                    ? () =>
                        window.open(
                          "https://link.trustwallet.com/open_url?coin_id=60&url=https://reverent-allen-ae7346.netlify.app",
                          "_blank"
                        )
                    : () => {
                        localStorage.setItem("connector", "walletconnect");
                        connect(walletconnect);
                      }
                }
                disabled={disabled}
              >
                <ButtonIcon src={Trust} />
                <ButtonText>{"Trust" + (disabled ? "..." : "")}</ButtonText>
              </LoginButton>
            </ButtonWrapper>
          </Container>
        </LoginSec>
      </Background>
    </>
  );
};

export default LoginPage;
