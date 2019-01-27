import gql from 'graphql-tag';

export default gql`
  mutation($id: ID!){
    addLike(id: $id){
      id
      content
      insert_dt
      likes
      category
    }
  }
`