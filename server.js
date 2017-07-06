const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/vr/production-index.html');
});

app.use("/vr/build", express.static(__dirname + '/vr/build'));
app.use("/static_assets", express.static(__dirname + '/static_assets'));

app.use('/api', router);

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized' });
});


app.listen(port, function() {
  console.log(`api running on port ${port}`)
})
