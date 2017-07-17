const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const users = require('./server/routes/users');
const orbs = require('./server/routes/orbs');
const follows = require('./server/routes/follows');
const feed = require('./server/routes/feed');


const port = process.env.API_PORT || 3001;
//parses HTTP POST bodys
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// static root url directs to webVR app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/vr/production-index.html');
});
app.get('/upload', function(req, res) {
  res.sendFile(__dirname + '/vr/upload.html');
});
// for static assets
app.use("/vr/build", express.static(__dirname + '/vr/build'));
app.use("/static_assets", express.static(__dirname + '/static_assets'));

// applies api routes to express app
app.use('/api/users', users);
app.use('/api/orbs', orbs);
app.use('/api/follows', follows);
app.use('/api/feed', feed);

// listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
