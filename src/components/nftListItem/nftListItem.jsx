import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './nftListItem.css'

function NftList({ list }) {
  {
    console.log(list)
    return (
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
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

function NftListItem({ name, icon, openseaLink }) {
  return (
    <>
      <Card >
          <Card.Img variant="top" src={icon} height="200px" />
          <Card.Body >
            <Card.Title >{name}</Card.Title>
            <Card.Text >
              You bought at: {0} ETH / {0} USD
            <br />
            Current Floor Price: {0} ETH / {0} USD
            <br />
            Profit/Loss: {0} ETH / {0} USD
          </Card.Text>
            <Button variant="primary" href={openseaLink} >
              View on OpenSea
          </Button>
          </Card.Body>
      </Card>
    </>
  )
}

export { NftList }
