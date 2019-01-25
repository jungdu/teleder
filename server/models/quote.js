const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  content: {        // 글 내용
    type: String,
    required:[true, 'content is required']
  },
  insert_dt: {      // 등록 날짜
    type: Date,
    default: Date.now()
  },
  likes: {          // 좋아요
    type: Number,
    default: 0
  },
  img: String,       // 이미지 링크
  category: String, // 카테고리
  author: String,   // 인물
  from: String,     // 출처
  link: String      // 관련 링크
});

const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;