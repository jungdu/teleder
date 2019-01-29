const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {convertToMp3} = require('../service/aws_handler');

const QuoteSchema = new Schema({
  content: {        // 글 내용
    type: String,
    required:[true, 'content is required'],
    trim: true
  },
  insert_dt: {      // 등록 날짜
    type: Date,
    default: Date.now()
  },
  likes: {          // 좋아요
    type: Number,
    default: 0
  },
  from: {           // 출처
    type: String,
    trim: true
  },   
  img: {            // 이미지 링크
    type: String,
    trim: true
  },       
  category: {       // 카테고리
    type: String,
    trim: true
  }, 
  author: {         // 인물
    type: String,
    trim: true
  },   
  link: {           // 관련 링크
    type: String,
    trim: true
  },
  s3obj_id: {       // 음성 파일 정보
    type: Schema.Types.ObjectId,
    ref: 's3obj'
  }      
});

QuoteSchema.pre('remove', function(next){
  const S3obj = mongoose.model('s3obj');
  S3obj.findById(this.s3obj_id).then(res => res.remove())
    .then(() => next());
});

QuoteSchema.statics.addlike = function(id){
  return this.findById(id)
          .then(quote => {
            quote.likes = quote.likes + 1;
            return quote.save();
          });
}

QuoteSchema.statics.addVoice = function(id, voice){
  const S3obj = mongoose.model('s3obj');
  let quote, s3obj;
  return this.findById(id)
    .then(res => {
      quote = res;
      return convertToMp3(voice, quote.content, quote.id)
    }).then(res => {
      const {ETag, Location, Key, Bucket} = res;
      s3obj = new S3obj({ETag, Location, Key, Bucket, quote_id: id});
      return s3obj.save()
    }).then(res => {
      return quote.update({s3obj_id: res.id});
    }).then(res => {
      return this.findById(id);
    }).then(res => {
      console.log(res);
      return res;
    })
}

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;