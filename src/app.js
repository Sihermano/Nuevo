const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

// var express = require('express'); //import express 
// var app = express(); //initialize express

// var firebase = require('firebase');
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCJpm9tQk1gGwxMPquk_YCOefq8OPEWktI",
//     authDomain: "ulima-sw2-analitica.firebaseapp.com",
//     databaseURL: "https://ulima-sw2-analitica.firebaseio.com",
//     projectId: "ulima-sw2-analitica",
//     storageBucket: "ulima-sw2-analitica.appspot.com",
//     messagingSenderId: "565044248690",
//     appId: "1:565044248690:web:3c57102cfbf271bdf6c2eb",
//     measurementId: "G-XSN3GTGQW7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// //handle HTTP root get request
// app.get('/', function (req, res) {
//     console.log("Get Request");
//     res.send("Get Request");
// });

// //start server on port: 8080
// var server = app.listen(8080, function () {

//     var host = server.address().address;
//     var port = server.address().port;

//     console.log(`We are online at host ${host} and port ${port} captain`);
// });