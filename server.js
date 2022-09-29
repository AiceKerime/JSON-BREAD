const express = require('express')
const fs = require('fs')
const path = require('path')

const dataPath = './json/data.json'
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
const dataFile = data

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { dataFile })
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.get('/edit', (req, res) => {
  res.render('edit')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})