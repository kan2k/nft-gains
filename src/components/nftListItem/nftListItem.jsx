import React from 'react'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NftListItem.css'
import { connect } from 'react-redux'

// TODO: calculate royality fee
// TODO: calculate gas
// TODO: total profit
// TODO: to show graph of daily gains

function weiToETH(wei) {
  return strip(wei * 10e-19)
}

function strip(number) {
  return parseFloat(number).toPrecision(3)
}

function NftList({ list }) {
  {
    return (
      <div>
        <div className="nft-items">
          {/* display books from the API */}
          {list && (
            <div className="nft-item">
              {/* loop over the books */}
              {list.map((_item, index) => (
                <div key={index}>
                  <NftListItem item={_item} />
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

function UnconnectedNftListItem({ item, eth_price }) {
  const [assetData, setAssetData] = useState({})

  async function fetchSingleAsset(item) {
    const assetList = await fetch(
      `http://localhost:3001/opensea_get_single_asset/${item.contract_address}/${item.token_id}`,
    )
      .then((response) => response.json())
      .then((response) => {
        var asset = {
          floor_price: response.collection.stats.floor_price,
        }
        setAssetData(asset)
        console.log(assetData)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    if (item.buy_price != null) {
      fetchSingleAsset(item)
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img variant="top" src={item.image} height="200px" />
        </div>
        <div className="col">{item.name}</div>
        {item.buy_price != null ? (
          <div className="col">
            You bought at: {weiToETH(item.buy_price)} ETH /{' '}
            {Math.floor(weiToETH(item.buy_price) * eth_price)} USD
            <br />
            Current Floor Price: {strip(assetData.floor_price)} ETH /{' '}
            {Math.floor(assetData.floor_price * eth_price)} USD
            <br />
            Profit/Loss:{' '}
            {strip(assetData.floor_price - weiToETH(item.buy_price))} ETH /{' '}
            {Math.floor(
              (assetData.floor_price - weiToETH(item.buy_price)) * eth_price,
            )}
            USD
          </div>
        ) : (
          <div className="col"> No Data </div>
        )}
        <div className="col">
          <Button variant="primary" href={item.opensea_url}>
            View on OpenSea
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  eth_price: state.eth_price,
})

const NftListItem = connect(mapStateToProps)(UnconnectedNftListItem)
export { NftList }
