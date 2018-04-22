const express = require('express')
const app = express()

const VERSION = '2.0.0'

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HOSTNAME || 'World'}!`)
})

app.get('/version', (req, res) => {
  res.send(VERSION)
})

app.get('/health', (req, res) => {
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
