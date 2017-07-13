const Orb = require('../models').Orb;

module.exports = {
  create(req, res) {
    return Orb
      .create({
        title: req.body.title,
        content: req.body.content,
      })
      .then(orb => res.status(201).send(orb))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Orb
      .all()
      .then(orbs => res.status(201).send(orbs))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Orb
      .findById(req.params.orbId)
      .then(orb => {
        return orb ?
          res.status(200).send(orb) :
          res.status(404).send({message: 'Orb Not Found'});
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return Orb
      .findById(req.params.orbId)
      .then(orb => {
        if (!orb) {
          return res.status(404).send({
            message: 'Orb Not Found',
          });
        }
        return orb
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
