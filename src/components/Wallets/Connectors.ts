import { AbstractConnector } from '@web3-react/abstract-connector'

import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

export const injected = new InjectedConnector({
  //metamask
  supportedChainIds: [4, 1337, 31337], //Rinkeby, local
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: process.env.REACT_APP_ALCHEMY as string, // // ATTENTION! WalletConnect doesn't always work on testnet so this is a mainnet
  },
})
export const resetWalletConnect = (connector: AbstractConnector) => {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined
  }
}

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.REACT_APP_FORTMATIC as string,
  chainId: 4, //Rinkeby
})

export const walletlink = new WalletLinkConnector({
  //coinbase
  url: process.env.REACT_APP_ALCHEMY as string,
  appName: 'OnlyOne',
  supportedChainIds: [1], //ATTENTION! CoinBase Wallet doesn't work on testnet so this is a mainnet
})
