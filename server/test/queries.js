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

module.exports = {
  searchQuote,
  searchQuotes,
  addLike,
  addQuote,
  deleteQuote
}