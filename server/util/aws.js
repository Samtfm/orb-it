const aws = require('aws-sdk');


const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const S3_BUCKET = process.env.S3_BUCKET;
const S3_REGION = process.env.S3_REGION;

function S3Creds(fileName) {
  aws.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    bucket: S3_BUCKET,
    region: S3_REGION
  });

  const s3 = new aws.S3();
  const options = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ACL: 'public-read'
  };

  const credentials = {
    endpointUrl: `https://s3.amazonaws.com/${S3_BUCKET}/${fileName}`,

  }

  return s3.getSignedUrl('putObject', options);
}

module.exports = S3Creds;
