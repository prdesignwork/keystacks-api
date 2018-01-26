const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/', routes)

app.listen(port, (req, res) => {
  console.log(port, 'listeninggggg')
})
