const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  res.send('you just made a user');
});

module.exports = router;
