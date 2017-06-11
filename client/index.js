<<<<<<< HEAD


const express = require('express');
const app = express();
var path = require('path');
=======
const express = require('express')  
const app = express()  
const port = 5000
const loopback_url = 'http://0.0.0.0:3000/api'
var request = require('request')
var bodyParser = require('body-parser');
>>>>>>> 2db55d135fdfdd04695feb2ea260a4d093f88927

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

<<<<<<< HEAD
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



angular.module('buttonsDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});



function changeToBusiness(){

	document.getElementById('student').style.display = "none";
	document.getElementById('student').style.visibility = "hidden";

	document.getElementById('business').style.display = "block";
	document.getElementById('business').style.visibility = "visible";
}

function changeToStudent(){


	document.getElementById('business').style.display = "none";
	document.getElementById('business').style.visibility = "hidden";

	document.getElementById('student').style.display = "block";
	document.getElementById('student').style.visibility = "visible";
}

=======
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
>>>>>>> 2db55d135fdfdd04695feb2ea260a4d093f88927
