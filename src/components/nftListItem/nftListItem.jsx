import React from 'react'
import { Button, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NftListItem.css'

function NftList({ list }) {
  {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button> Connect To Wallet </button>
          <p>
            Your Profile: {0} ETH / {0} USD
          </p>
          <p>
            Current Price: {0} ETH / {0} USD
          </p>
        </nav>
        <div className="nft-items">
          {/* display books from the API */}
          {list && (
            <div className="nft-item">
              {/* loop over the books */}
              {list.map((nft, index) => (
                <div key={index}>
                  <NftListItem
                    name={nft.name}
                    icon={nft.image_url}
                    openseaLink={nft.permalink}
                  />
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

function NftListItem({ name, icon, openseaLink }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img variant="top" src={icon} height="200px" />
        </div>
        <div className="col">{name}</div>
        <div className="col">
          You bought at: {0} ETH / {0} USD
          <br />
          Current Floor Price: {0} ETH / {0} USD
          <br />
          Profit/Loss: {0} ETH / {0} USD
        </div>
        <div className="col">
          <Button variant="primary" href={openseaLink}>
            View on OpenSea
          </Button>
        </div>
      </div>
    </div>
  )
}

export { NftList }
