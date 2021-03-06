const Orb = require('../models').Orb;
const S3Creds = require('../util/aws');

module.exports = {
  create(req, res) {
    return Orb
      .create({
        title: req.body.orb.title,
        content: req.body.orb.content,
      })
      .then(orb => {
        const fullName = `orb_${orb.id}_full.png`;
        const thumbName = `orb_${orb.id}_thumb.png`;
        return {
          orb,
          fullCredentials: S3Creds(fullName),
          thumbCredentials: S3Creds(thumbName),
        };
      })
      .then(credentials => res.status(201).send(credentials))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Orb
      .findAll({ limit: 24, offset: req.params.offset })
      .then(data => {
        let orbs = {};

        Object.values(data).forEach(val => orbs[val.id] = val)
        return orbs
      })
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
  update(req, res) {
    return Orb
      .findById(req.params.orbId)
      .then(orb => {
        if (orb) {
          orb.updateAttributes(req.body.orb)
        }
      })
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
