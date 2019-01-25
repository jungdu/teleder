const assert = require('assert');
const mongoose = require('mongoose');
const Quote = require('../models/quote');

describe('quote model test', () => {

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
})