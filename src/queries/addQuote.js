import gql from 'graphql-tag';

export default gql`
  AddQuote($content: String!, $from:String){
    addQuote(content: $content, from: $from){
      id
      content
      insert_dt
      likes
      category
    }
  }
`