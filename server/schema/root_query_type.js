const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const QuoteType = require('./quote_type');
const S3objType = require('./s3obj_type');
const Quote = mongoose.model('quote');
const S3obj = mongoose.model('s3obj');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    quotes: {
      type: new GraphQLList(QuoteType),
      resolve(){
        return Quote.find({}).sort({insert_dt: -1})
      }
    },
    quote: {
      type: QuoteType,
      args: {id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(parentValue, { id }){
        return Quote.findById(id)
      }
    },
    s3objs: {
      type: new GraphQLList(S3objType),
      resolve(){
        return S3obj.find({});
      }
    },
    s3obj: {
      type: S3objType,
      args:{ id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(parentValue, {id}){
        return S3obj.findById(id);
      }
    }
  })
})

module.exports = RootQuery;