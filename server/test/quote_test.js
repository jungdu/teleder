const assert = require('assert');
const mongoose = require('mongoose');
const Quote = require('../models/quote');

// mongoose 모델 생성할 때 모델이 재대로 동작하는지 테스트하는 파일
// server가 실행 상태에서 테스트를 실행하면 test database가 아닌
// production database의 데이터에 영향을 미칠 수 있다.
describe.skip('quote model test', () => {
  before(done => {
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
    mongoose.connection
      .once('open', () => done())
      .on('error', error => {
        console.warn('Warning', error)
      });
  });
  
  let seuss;

  beforeEach(done => {
    seuss = new Quote({
      content: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss"
    });
    seuss.save().then(() => done());
  })

  it('find a quote', done => {
    Quote.findById(seuss._id)
      .then(quote => {
        assert(quote.content === seuss.content)
        assert(quote.author === seuss.author)
        done();
      })
  })

  it('update a quote', done => {
    Quote.update({_id: seuss._id}, {author: "Ms. Seuss"})
      .then(() => Quote.findById(seuss._id))
      .then(quote => {
        assert(quote.author === "Ms. Seuss");
        done();
      })
  })
});