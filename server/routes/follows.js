const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  res.send('just followed someone')
})

router.delete('/:id', function(req, res) {
  res.send('just unfollowed someone')
})

module.exports = router;
