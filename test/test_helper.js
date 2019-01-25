const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => done())
    .on('error', error => {
      console.warn('Warning', error)
    })
})