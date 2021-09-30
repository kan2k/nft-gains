import './MainScreen.css'
import { useEffect, useState } from 'react'
import { NftList } from '../components/NftListItem/NftListItem'
import { useWallet } from 'use-wallet'

function MainScreen() {
  const wallet = useWallet()
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
    fetchData(wallet.account)
  }, [])

  return (
    <div className="nft-items">
      <NftList list={nftItems} />
    </div>
  )
}

export default MainScreen
