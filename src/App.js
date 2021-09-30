import './App.css'
import { useEffect, useState } from 'react'
import { NftList } from './components/nftListItem/nftListItem'
import Navbar from './components/NavBar/NavBar'
import { ethers } from 'ethers'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { Switch, Route } from "react-router-dom";
import Connect from "./ConnectScreen/Connect";
import MainScreen from "./MainScreen/MainScreen";

function App() {
  const [userAddress, setUserAddress] = useState([])
  const [nftItems, setNftItems] = useState([])

  async function fetchData(address) {
    console.log('Fetching: ', address)
    const response = await fetch(`http://localhost:3001/opensea/${address}`)
      .then((response) => response.json())
      .then((response) => {
        setNftItems(response.assets)
        console.log('fetchData Response: ', response)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchData('0xBDa5baFAA1776d0c8ea849b35B1E50Bf988E3B03')
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path = "/connect" exact>
          <Connect />
        </Route>
        <Route path = "/" exact>
          <h1>This is nft items</h1>
          <div className="nft-items">
            <NftList list={nftItems} />
          </div>
        </Route>
    </Switch>
    </div>
  )
}

export default App
