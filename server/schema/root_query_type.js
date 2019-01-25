const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const QuoteType = require('./quote_type');
const Quote = mongoose.model('quote');

Quote.find({})
  .then(users => {
    console.log(users);
  })

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    quotes: {
      type: new GraphQLList(QuoteType),
      resolve(){
        return Quote.find({})
      }
    },
    quote: {
      type: QuoteType,
      args: {id: { type: new GraphQLNonNull(GraphQLID) }},
      resolve(parentValue, { id }){
        return Quote.findById(id)
      }
    }
  })
})

module.exports = RootQuery;