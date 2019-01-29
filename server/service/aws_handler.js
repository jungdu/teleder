const AWS = require('aws-sdk')
const mongoose = require('mongoose');
const s3 = new AWS.S3();
const Polly = new AWS.Polly({
  signatureVersion: 'v4',
  region: 'us-east-1'
})

const BucketName = 'pollybuckex';
const convertToMp3 = (voice, text, fileName) => {
  const params = {
    'Text': text,
    'OutputFormat': 'mp3',
    'VoiceId': voice
  }
  return new Promise((resolve, reject) => {
    Polly.synthesizeSpeech(params, (err, data) => {
      if(err){
        reject(err)
      }else{
        if(data.AudioStream instanceof Buffer){
          s3.upload({
            Bucket: BucketName,
            Key: fileName + '.mp3',
            Body: data.AudioStream,
            ACL: 'public-read'
          }, (err, data) => {
            if(err){
              reject(err);
            }else{
              resolve(data);
            }
          })
        }else{
          reject("error::: data is not buffer type")
        }
      }
    })
  })
}

const deleteObj = (Key) => {
  const params = {
    Bucket: BucketName,
    Key
  };

  return new Promise((resolve, reject) => {
    s3.deleteObject(params, function(err, data){
      if(err) reject(err);
      else resolve(data);
    });  
  });
}

module.exports = {
  convertToMp3,
  deleteObj
}