const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLInt} = graphql;
const Song = mongoose.model('quote');
const { GraphQLDateTime } = require('graphql-iso-date');

const QuoteType = new GraphQLObjectType({
  name: 'QuoteType',
  fields: ()=> ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    insert_dt: {
      type: GraphQLDateTime
    },
    likes: {type: GraphQLString},
    category: {type: GraphQLString},
    author: {type: GraphQLString},
    from: {type: GraphQLString},
    link: {type: GraphQLString}
  })
})

module.exports = QuoteType;