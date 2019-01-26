import gql from 'graphql-tag';

export default gql`
  query{
    quotes{
      id
      insert_dt
      content
      from
      likes
    } 
  }
`