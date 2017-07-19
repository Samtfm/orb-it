const Orb = require('../models').Orb;
const s3Credentials = require('../util/s3_credentials');
const s3Config = require('../config/s3')

module.exports = {
  create(req, res) {
    console.log(req.body  );
    return Orb
      .create({
        title: req.body.orb.title,
        content: req.body.orb.content,
      })
      .then(orb => {
        console.log('creating credentials')
        const fullName = `orb_${orb.id}_full.png`;
        const thumbName = `orb_${orb.id}_thumb.png`;
        return {
          orb,
          fullCredentials: s3Credentials(s3Config, fullName),
          thumbCredentials: s3Credentials(s3Config, thumbName),
        };
      })
      .then(credentials => res.status(201).send(credentials))
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
