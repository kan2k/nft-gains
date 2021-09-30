import React from 'react'
import { useWallet } from 'use-wallet'

const Connect = () => {
  const wallet = useWallet()
  return (
    <>
      <h1>Please connect to your wallet.</h1>
      Connect:
      <button onClick={() => wallet.connect()}>MetaMask</button>
      <button onClick={() => wallet.connect('frame')}>Frame</button>
      <button onClick={() => wallet.connect('portis')}>Portis</button>{' '}
    </>
  )
}

export default Connect
