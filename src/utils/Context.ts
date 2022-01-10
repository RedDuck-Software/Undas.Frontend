import { createContext } from 'react'
import { ConnectorState } from '../types/ConnectorState'

const Context = createContext<ConnectorState>({
  connector: null,
  setConnectorFun: () => {},
})

export default Context
