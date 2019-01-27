import gql from 'graphql-tag';

export default gql`
  DeleteQuote($id: ID!){
    deleteQuote(id: $id){
      id
      content
      insert_dt
      likes
      category
    }
  }
`