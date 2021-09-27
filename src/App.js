import './App.css'
import { useEffect, useState } from 'react'
import { NftList, NftListItem } from './components/nftListItem/nftListItem'

function App() {
  const [nftItems, setNftItems] = useState([])
  const [test, setTest] = useState('')

  const options = { method: 'GET' }

  useEffect(() => {
    fetchData('0xBDa5baFAA1776d0c8ea849b35B1E50Bf988E3B03')
    async function fetchData(address) {
      const response = await fetch(
        `https://api.opensea.io/api/v1/assets?owner=${address}&limit=50`,
        options,
      )
        .then((response) => response.json())
        .then((response) => {
          setNftItems(response.assets)
          console.log('fetchData Response: ', response)
        })
        .catch((err) => console.error(err))
    }
  }, [])
  // console.log(nftItems.assets[0].name)
  // console.log(nftItems.assets[0].last_sale.total_price)
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
