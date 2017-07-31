const aws = require('aws-sdk');
//change later
const config = require('../config/s3');

const AWS_ACCESS_KEY = config.accessKey;
const AWS_SECRET_KEY = config.secretKey;
const S3_BUCKET = config.bucket;

// const AWS_ACCESS_KEY = ENV['AWS_ACCESS_KEY'];
// const AWS_SECRET_KEY = ENV['AWS_SECRET_KEY'];
// const S3_BUCKET = ENV['S3_BUCKET'];

function S3Creds(fileName) {
  aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});

  const s3 = new aws.S3();
  const options = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: 'image/png',
    ACL: 'public-read'
  };

  const credentials = {
    endpointUrl: `https://s3.amazonaws.com/${S3_BUCKET}/${fileName}`,

  }

  return s3.getSignedUrl('putObject', options, function(err, data) {
    if (err) return err

    credentials.signed
  });
}

module.exports = S3Creds;
