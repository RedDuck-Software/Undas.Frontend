import { AbstractConnector } from '@web3-react/abstract-connector'

export type ConnectorState = {
  connector: AbstractConnector | null
  setConnectorFun: (connector: AbstractConnector) => void
}
