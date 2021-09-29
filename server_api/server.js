const express = require('express')
const cors = require('cors')
const fetch = require('cross-fetch')
const app = express()
const port = 3001
const options = { method: 'GET' }

app.use(cors())

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.get('/opensea')

app.get('/opensea/:address/', async (req, res) => {
  return_datas = { nft_name: '', buy_price: '', nft_floorprice: '' }
  var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1 //months from 1-12
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()
  var hour = dateObj.getUTCHours()
  var min = dateObj.getUTCMinutes()
  var sec = dateObj.getUTCSeconds()
  newdate =
    '[UTC ' +
    year +
    '/' +
    month +
    '/' +
    day +
    '|' +
    hour +
    ':' +
    min +
    ':' +
    sec +
    ']'
  console.log(newdate, 'Address is requesting:', req.params.address)
  const response = await fetch(
    `https://api.opensea.io/api/v1/assets?owner=${req.params.address}&order_direction=desc&offset=0&limit=50`,
    options,
  )
    .then((response) => response.json())
    .then((response) => {
      res.json(response)
      console.log(response)
    })
    .catch((err) => console.error(err))
})
