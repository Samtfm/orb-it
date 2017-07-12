const Orb = require('../models').Orb;

module.exports = {
  create(req, res) {
    return Orb
      .create({
        title: req.body.title,
        content: req.body.content,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
