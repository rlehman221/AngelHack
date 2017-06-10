const express = require('express')
const app = express()
var path = require('path');

app.get('/', function (req, res) {
  res.send('Hello World2!')
})

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname+'/html/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})