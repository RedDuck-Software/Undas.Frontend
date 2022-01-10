import Cookies from 'universal-cookie'
import { injected } from '../components/Wallets/Connectors'

async function useConnectOnLoad(web3Current: any) {
  let cookies = new Cookies()
  try {
    web3Current.activate(injected)
  } catch (ex) {
    console.log(ex)
  }
}

export default useConnectOnLoad
