const assert = require('assert');
const app = require('../server')
const {request} = require('graphql-request'); 

// GraphQL 서버의 request, response 를 체크하는 테스트
// 테스트를 실행하기 이전에 서버를 실행해야함.
const serverUrl = 'http://localhost:4000/graphql';

const searchQuote = `
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

const searchQuotes = `
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

const addLike = `
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

const addQuote = `
  mutation($content: String!, $from:String){
    addQuote(content: $content, from: $from){
      id
      content
      insert_dt
      likes
      category
    }
  }
`

const deleteQuote = `
  mutation($id:ID!){
    deleteQuote(id:$id){
      id
      content
      insert_dt
      likes
      category
    }
  }
`

describe('GraphQL API test', () => {
  let quotes;
  let newQuote;

  it('There is data at least one quote', done => {
    request(serverUrl, searchQuotes).then(data => {
      quotes = data.quotes;
      assert(data.quotes.length > 0);
      done();
    });
  });

  it('Search a query', done => {
    const variables = {
      id: quotes[0].id
    };
    request(serverUrl, searchQuote, variables).then(data => {
      assert(data.quote.id === quotes[0].id);
      done();
    });
  });

  it('Add Quote', done => {
    const variables = {
      content: 'Test quote',
      from: 'By myself'
    };
    request(serverUrl, addQuote, variables).then(data => {
      newQuote = data.addQuote;
      assert(data.addQuote !== null);
      done();
    });
  });

  it('Add Like', done => {
    const variables = {
      id: newQuote.id
    };
    request(serverUrl, addLike, variables).then(data => {
      assert(data.addLike.likes === 1);
      done();
    });
  });

  it('Delete Quote', done => {
    const variables = {
      id: newQuote.id
    }
    request(serverUrl, deleteQuote, variables).then(data => 
      request(serverUrl, searchQuote, variables)
    ).then(data => {
      assert(data.quote === null);
      done();
    })
  })
});