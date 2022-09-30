const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const dataPath = './json/data.json'
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const app = express()
const port = 3000

// USE
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// SET
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// GET
app.get('/', (req, res) => {
  res.render('index', { data })
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.get('/edit', (req, res) => {
  res.render('edit')
})

app.get('/delete/:id', (req, res) => {
  const id = req.params.id
  data.splice(id, 1)
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 3))
  res.redirect('/')
})

// POST
app.post('/add', (req, res) => {
  data.push({ string: req.body.string, integer: parseInt(req.body.integer), float: parseFloat(req.body.float), date: req.body.date, boolean: JSON.parse(req.body.boolean) })
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 3))
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})