

const express = require('express');
const app = express();
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

