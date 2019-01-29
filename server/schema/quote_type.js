const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt} = graphql;
const { GraphQLDateTime } = require('graphql-iso-date');
const S3objType = require('./s3obj_type');
const S3obj = mongoose.model('s3obj');

const QuoteType = new GraphQLObjectType({
  name: 'QuoteType',
  fields: ()=> ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    insert_dt: {
      type: GraphQLDateTime
    },
    likes: {type: GraphQLInt},
    category: {type: GraphQLString},
    author: {type: GraphQLString},
    from: {type: GraphQLString},
    link: {type: GraphQLString},
    s3obj: {
      type: S3objType,
      resolve(parentValue){
        return S3obj.findById(parentValue.s3obj_id)
      }
    }
  })
});
console.log(QuoteType);
module.exports = QuoteType;