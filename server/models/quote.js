const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  }      
});

QuoteSchema.statics.addlike = function(id){
  return this.findById(id)
          .then(quote => {
            quote.likes = quote.likes + 1;
            return quote.save();
          });
}

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;