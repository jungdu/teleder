const mongoose = require('mongoose');
const quote = require('../models/quote')

before(done => {
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error)
    });
});

beforeEach( done => {
  const { quotes } = mongoose.connection.collections;
  quotes.drop(() => {
    done();
  });
});