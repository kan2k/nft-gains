import './MainScreen.css'
import { useEffect, useState } from 'react'
import { NftList } from '../components/NftListItem/NftListItem'
import { useWallet } from 'use-wallet'
import { render } from '@testing-library/react'

function MainScreen() {
  const wallet = useWallet()
  const [nftItems, setNftItems] = useState([])

  async function fetchAssetList(wallet_address) {
    var assets = []
    const assetList = await fetch(
      `http://localhost:3001/opensea_get_assets/${wallet_address}`,
    )
      .then((response) => response.json())
      .then((response) => {
        for (var i = 0; i < response.assets.length; i++) {
          var obj = response.assets[i]
          var assetData = {
            name: obj.name,
            image: obj.image_url,
            opensea_url: obj.permalink,
            contract_address: obj.asset_contract.address,
            token_id: obj.token_id,
            buy_price: null,
          }
          if (response.assets[i].last_sale != null) {
            assetData.buy_price = obj.last_sale.total_price
          }
          assets.push(assetData)
        }
        setNftItems(assets)
        return assets
      })
      .catch((err) => console.error(err))
    return assetList
  }

  useEffect(() => {
    fetchAssetList(wallet.account)
  }, [])

  return (
    <div className="nft-items">
      <NftList list={nftItems} />
    </div>
  )
}

export default MainScreen
