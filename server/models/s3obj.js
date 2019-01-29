const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {deleteObj} = require('../service/aws_handler');

const S3objSchema = new Schema({
    ETag: String,
    Location: String,
    Key: String,
    Bucket: String,
    quote_id: {
      type: Schema.Types.ObjectId,
      ref: 'quote'
    }
});

S3objSchema.pre('remove', function(next){
  deleteObj(this.Key).then(() => next());
});

const S3obj = mongoose.model('s3obj', S3objSchema);

module.exports = S3obj;