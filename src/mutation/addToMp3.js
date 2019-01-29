import gql from 'graphql-tag';

export default gql`
mutation($quoteId:String!, $voice:String){
    addToMp3(quoteId:$quoteId, voice:$voice){
      content
      from
      s3obj{
        id
        Key
        Location
      }
    }
  }
`;
