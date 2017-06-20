import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());  // enable g-zip compression
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
  res.json([
    {'id': 1, "firstName": "bob", "lastName": "smith", "email": "jsmith@gmail.com"},
    {'id': 2, "firstName": "susan", "lastName": "dodgers", "email": "jsth@gmail.com"},
    {'id': 3, "firstName": "ted", "lastName": "frank", "email": "jsmh@gmail.com"}
  ])
});

app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
