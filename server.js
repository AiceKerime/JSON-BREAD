const express = require('express')
const path = require('path')
const dataFile = [
  {
    string: "Testing Data",
    integer: 12,
    float: 1.45,
    date: "12 Desember 2017",
    boolean: true
  }
]

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