import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useContext } from "react";
import { isMobile, isAndroid, osVersion } from "react-device-detect";
import { Navigate } from "react-router-dom";

import { MetaMask, Coinbase, WalletConnect, Fortmatic, Trust } from "./imports";
import {
  LoginSec,
  TextWrapper,
  LoginTitle,
  LoginText,
  VioletText,
  ButtonWrapper,
  LoginButton,
  ButtonIcon,
  ButtonToggle,
  Circle,
  ButtonText,
  ShowMore,
  UNDAS,
} from "./LoginPage.styles";

import {
  injected,
  walletconnect,
  fortmatic,
  resetWalletConnect,
} from "../../components/Wallets/Connectors";
import { Container } from "../../globalStyles";
import Context from "../../utils/Context";

const LoginPage: React.FC = () => {
  const value = useContext(Context);

  const [length, setLength] = useState<number>(4);
  const [disabled, setDisabled] = useState(false);
  const web3Current = useWeb3React();

  if (web3Current.account) {
    const { connector } = web3Current;

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

  const ethereumWallets = [
    {
      icon: MetaMask,
      text: "MetaMask" + (disabled ? "..." : ""),
      handleClick: function () {
        localStorage.setItem("connector", "injected");
        isMobile ? connect(walletconnect) : connect(injected);
      },
      disabled: disabled,
    },
    {
      icon: Coinbase,
      text: isMobile ? "Coinbase" : "Coinbase" + (disabled ? "..." : ""),
      handleClick: function () {
        localStorage.setItem("connector", "walletconnect");
        connect(walletconnect);
      },
      disabled: isMobile ? true : disabled,
    },
    {
      icon: WalletConnect,
      text: "WalletConnect" + (disabled ? "..." : ""),
      handleClick: function () {
        localStorage.setItem("connector", "walletconnect");
        connect(walletconnect);
      },
      disabled: disabled,
    },
    {
      icon: Fortmatic,
      text: "Fortmatic" + (disabled ? "..." : ""),
      handleClick: function () {
        localStorage.setItem("connector", "fortmatic");
        connect(fortmatic);
      },
      disabled: disabled,
    },
    {
      icon: Trust,
      text: "Trust" + (disabled ? "..." : ""),
      handleClick: function () {
        isAndroid && osVersion === "11"
          ? window.open(
              "https://link.trustwallet.com/open_url?coin_id=60&url=https://reverent-allen-ae7346.netlify.app",
              "_blank",
            )
          : localStorage.setItem("connector", "walletconnect");
        connect(walletconnect);
      },
      disabled: disabled,
    },
  ];

  return (
    <>
      <LoginSec>
        <Container>
          <TextWrapper>
            <LoginTitle>
              You need an Ethereum wallet to use <UNDAS>UNDAS</UNDAS>
            </LoginTitle>
            <LoginText>
              Connect with one of our available <VioletText>wallet</VioletText>{" "}
              providers or create a new one{" "}
            </LoginText>
          </TextWrapper>
          <ButtonWrapper>
            {ethereumWallets.map((wallet, idx) => {
              return (
                idx < length && (
                  <LoginButton
                    onClick={wallet.handleClick}
                    disabled={wallet.disabled}
                  >
                    <ButtonIcon src={wallet.icon} />
                    <ButtonToggle>
                      <Circle />
                    </ButtonToggle>
                    <ButtonText>{wallet.text}</ButtonText>
                  </LoginButton>
                )
              );
            })}
          </ButtonWrapper>
          {length !== ethereumWallets.length && (
            <ShowMore
              onClick={() => {
                setLength(ethereumWallets.length);
              }}
            >
              Show more options
            </ShowMore>
          )}
        </Container>
      </LoginSec>
    </>
  );
};

export default LoginPage;
