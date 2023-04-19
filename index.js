const express = require('express')
const app = express()
const port = process.env.port || 5000
var cors = require('cors')

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Dragon News is Here')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon News API listening on port ${port}`)
})