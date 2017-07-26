const express = require('express');
const router = express.Router();
const orbsController = require('../controllers/orbs');

router.route('/')
  .get(orbsController.index)
  .post(orbsController.create);

router.route('/:orbId')
  .get(orbsController.show)
  .patch(orbsController.update)
  .delete(orbsController.destroy);

module.exports = router;
