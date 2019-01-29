const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID} = graphql;

const S3objType = new GraphQLObjectType({
  name: 'S3objType',
  fields: ()=> ({
    id: { type: GraphQLID },
    Etag: {type: GraphQLString},
    Location: {type: GraphQLString},
    Key: {type: GraphQLString},
    Bucket: {type: GraphQLString}
  })
})

module.exports = S3objType;