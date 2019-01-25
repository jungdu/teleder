const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const Quote = mongoose.model('quote');
const QuoteType = require('./quote_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addQuote: {
      type: QuoteType,
      args: {
        content: {type: new GraphQLNonNull(GraphQLString)},
        category: {type: GraphQLString},
        from: {type: GraphQLString},
        author: {type: GraphQLString},
        link: {type: GraphQLString},
      },
      resolve(parentValue, {content, category, from, author, link}){
        return (new Quote({content, category, from, author, link})).save()
      }
    },
    addLike: {
      type: QuoteType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parentValue, {id}){
        return Quote.addlike(id);
      }
    },
    deleteQuote: {
      type: QuoteType,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)}
      },
      resolve(parentValue, {id}){
        return Quote.findByIdAndRemove(id)
      }
    }
  }
})

module.exports = mutation;