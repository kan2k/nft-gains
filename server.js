const express = require('express')
const cors = require('cors')
const fetch = require('cross-fetch')
const path = require('path')
const app = express()
const port = 3001
const options = { method: 'GET' }

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.get('/opensea')

app.get('/opensea_get_assets/:wallet_address', async (req, res) => {
  console.log(new Date(), 'Address is requesting:', req.params.wallet_address)
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?owner=${req.params.wallet_address}&order_direction=desc&offset=0&limit=50`,
    options,
  )
    .then((response) => response.json())
    .then((response) => {
      res.json(response)
    })
    .catch((err) => console.error(err))
})

app.get(
  '/opensea_get_single_asset/:contract_address/:token_id',
  async (req, res) => {
    console.log(
      new Date(),
      'Requesting this contract:',
      req.params.contract_address,
      req.params.token_id,
    )
    const response = await fetch(
      `https://api.opensea.io/api/v1/asset/${req.params.contract_address}/${req.params.token_id}/`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        res.json(response)
      })
      .catch((err) => console.error(err))
  },
)
