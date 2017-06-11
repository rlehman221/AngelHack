const express = require('express')  
const app = express()  
const port = 5000
const loopback_url = 'http://0.0.0.0:3000/api'
var request = require('request')
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {  

  request(loopback_url + '/students', function (error, response, body) {
    if(error)
      throw error;
    console.log('error:', error); // Print the error if one occurred 
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    console.log('body:', body); // Print the HTML for the Google homepage. 
    //res.render('index',body);
  });
})

app.get('/usertype', (req, res) => {  
  res.send('user type button');
})

app.get('/ownersignup', (req, res) => {  
  res.send('owner signs up');
})

app.get('/studentsignup', (req, res) => {  
  res.send('student signs up');
})

app.get('/jobprofile', (req, res) => {  
  res.send('job profile');
})

app.get('/studentprofile', (req, res) => {  
  res.send('student profile');
})

app.get('/questionnaire', (req, res) => {  
  res.send('questionnaire');
})

app.get('/addjob', (req, res) => {  
  res.send('add job');
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('An error has occurred', err)
  }

  console.log(`server is listening on ${port}`)
})