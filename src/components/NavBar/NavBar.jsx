import { Link } from 'react-router-dom'
import React from 'react'
import { useWallet } from 'use-wallet'
import './NavBar.css'
import { connect } from 'react-redux'

const UnconnectedNavbar = ({ eth_price }) => {
  const wallet = useWallet()
  return (
    <nav className="navbar navbar-dark bg-dark">
      {wallet.status === 'connected' ? (
        <div>
          <p className="wallet-address">{wallet.account}</p>
          <button onClick={() => wallet.reset()}>disconnect</button>
        </div>
      ) : (
        <p> Wallet Not Connected </p>
      )}
      <Link to="/">Home</Link>
      <p>
        Your Portfolio: {0} ETH / {0} USD
      </p>
      <p>Current ETH Price: {eth_price} USD</p>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  eth_price: state.eth_price,
})

const Navbar = connect(mapStateToProps)(UnconnectedNavbar)
export default Navbar
