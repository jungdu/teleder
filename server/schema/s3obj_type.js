const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID} = graphql;
const QuoteType = require('./quote_type');
const mongoose = require('mongoose')
const Quote = mongoose.model('quote');
const {deleteObj} = require('../service/aws_handler');

const S3objType = new GraphQLObjectType({
  name: 'S3objType',
  fields: ()=> ({
    id: { type: GraphQLID },
    ETag: {type: GraphQLString},
    Location: {type: GraphQLString},
    Key: {type: GraphQLString},
    Bucket: {type: GraphQLString},
    quote_id: {type: GraphQLString},
    quote: {
      type: require('./quote_type'),
      resolve: (parentValue) => {
        return  Quote.findById(parentValue.quote_id);
      }
    }
  })
})


module.exports = S3objType;