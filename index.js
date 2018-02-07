// add express
const express = require('express');
// wrap application in the express module
const app = express();
// body parser
const bodyParser = require('body-parser');
// create view engine and tells Express to use it by default
const handlebars = require('express-handlebars').create({defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

// identify location the server will listen to
app.set('port', process.env.PORT || 3000);
// establish the routes the server will respond to with the specified content
app.get('/', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/index.html');
  response.render('home');
});
app.get('/introduction', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('introduction');
});
app.get('/prologue', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('prologue');
});
app.get('/beginning', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('beginning');
});

app.get('/middle', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('middle');
});

app.get('/end', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('end');
});

app.get('/epilogue', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('epilogue');
});

app.get('/final', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('final');
});

app.get('/about', (request, response) => {
  //response.type('text/plain');
  //response.send('./public/about.html');
  response.render('about');
});

app.use((request, response) => {
  //response.type('text/plain');
  response.status(404);
  //response.send('404 - Not Found');
  response.render('404');
});

// server needs to listen for specified port
app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' +
  app.get('port') +
  '; press Ctrl-C to terminate.'
  );
});
