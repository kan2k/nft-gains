import './MainScreen.css'
import { useEffect, useState } from 'react'
import { NftList } from '../components/nftListItem/nftListItem'
import { ethers } from 'ethers'

function MainScreen() {
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
    // if (userAddress != undefined) {
    //   fetchData(userAddress)
    // }
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

export default MainScreen
