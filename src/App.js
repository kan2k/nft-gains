import './App.css'
import { useEffect, useState } from 'react'
import { NftList } from './components/NftListItem/NftListItem'
import { ethers } from 'ethers'
import Web3 from 'web3'
import Web3Modal from 'web3modal'

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
      <header className="App-header">
        <div className="nft-items">
          <NftList list={nftItems} />
        </div>
      </header>
    </div>
  )
}

export default App
