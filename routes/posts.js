const express = require('express');
const router = express.Router();

router.route('/')
  .get(function(req, res) {
    //get for /api/posts/
    res.send('send all posts');
  })
  .post(function(req, res) {
    //post for /api/posts/
    res.send('posting a post')
  })

router.route('/:post_id')
  //get method for /api/posts/:post_id
  .get(function(req, res) {
    res.send(`send ${req.params.post_id}`);
  })
  .delete(function(req, res) {
    res.send(`delete ${req.params.post_id}`);
  });

module.exports = router;
