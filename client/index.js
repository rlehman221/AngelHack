
const express = require('express')  
const path = require('path')
const app = express()  
const port = 5000
const loopback_url = 'http://0.0.0.0:3000/api'
var request = require('request')

var bodyParser = require('body-parser')
var isUserLoggedIn = false;


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/'));

app.use(function (req, res, next) {
  //console.log('Recieved request ',req,' at ', Date.now())
  console.log("is user logged in ",isUserLoggedIn);


  next();
})

app.get('/', (req, res) => {  
  res.sendFile(__dirname + '/html/login.html');
  /*
  request(loopback_url + '/students', function (error, response, body) {
    if(error)
      console.log('error')
      console.log("loaded homepage")
    //console.log('error:', error); // Print the error if one occurred 
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    //res.render('index',body);
  });
  */
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
 res.sendFile(__dirname + '/html/profile.html');
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

app.post('/login', (req, res) => {
  var submittedEmail = req.body.email;
  var submittedPW = req.body.password;
  var queryObj = {"email":submittedEmail,"password":submittedPW};

  var url;
  if(req.body.isStudent == 'checked')
      url = loopback_url + '/students?filter[where][email]=' + req.body.email + '&filter[where][password]=' + req.body.password;
  else
      url = loopback_url + '/businessowners?filter[where][email]=' + req.body.email + '&filter[where][password]=' + req.body.password;

  request(url, function (error, response, body) {
    if(error)
      console.log('error')
    console.log("response: ", body);
    
    var numJson = JSON.parse(body);
    console.log(numJson.length);

    if(numJson.length > 0){
      console.log("user is now logged in")
      isUserLoggedIn = true;
      if(req.body.student == 'checked'){
        res.redirect('/studentprofile');
      }
      else{
        res.redirect('/jobprofile');
      }
    }
    else{
      isUserLoggedIn = false;
      console.log("error: email/pass is incorrect")
      res.redirect('/');
    }


    //console.log('error:', error); // Print the error if one occurred 
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //console.log('body:', body); // Print the HTML for the Google homepage. 
    //res.render('index',body);
  });

})

app.listen(port, (err) => {  
  if (err) {
    return console.log('An error has occurred', err)
  }

  console.log(`server is listening on ${port}`)
})





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
