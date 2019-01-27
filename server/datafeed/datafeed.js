const mongoose = require('mongoose');
const data = require('./goodreads_data');
const Quote = require('../models/quote');

mongoose.connect('mongodb://localhost/teleder', { useNewUrlParser: true });
mongoose.connection
    .once('open', () =>{
      Quote.remove({})
        .then(() => Quote.insertMany(data))
        .then(result => {
          console.log(result);
        });
    })
    .on('error', error => console.log('Error connecting to MongoLab:', error));
  