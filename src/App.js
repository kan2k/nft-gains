import './App.css'

import Navbar from './components/NavBar/NavBar'
import { Switch, Route } from 'react-router-dom'
import ConnectScreen from './ConnectScreen/ConnectScreen'
import MainScreen from './MainScreen/MainScreen'
import { useWallet, UseWalletProvider } from 'use-wallet'
import { UpdateEthPrice } from './redux/action'
import { store } from './redux/store'

function App() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  // todo: fetch from api
  store.dispatch(UpdateEthPrice(300))
  return (
    <>
      <Navbar />
      <h1> announcement bar </h1>
      {wallet.status === 'connected' ? (
        <div>
          <Switch>
            <Route path="/connect" exact>
              <ConnectScreen />
            </Route>
            <Route path="/" exact>
              <MainScreen />
            </Route>
          </Switch>
        </div>
      ) : (
        <ConnectScreen />
      )}
    </>
  )
}

export default () => (
  <UseWalletProvider
    chainId={1}
    connectors={{
      // This is how connectors get configured
      portis: { dAppId: 'my-dapp-id-123-xyz' },
    }}
  >
    <App />
  </UseWalletProvider>
)
