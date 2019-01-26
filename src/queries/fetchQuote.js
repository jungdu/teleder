import gql from 'graphql-tag';

export default gql`
  query($id: ID!){
    quote(id: $id){
      id
      content
      insert_dt
      likes
      category
    }
  }
`