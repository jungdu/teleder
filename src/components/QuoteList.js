import React, { Component } from 'react'
import query from '../queries/fetchQuotes';
import {graphql} from 'react-apollo'
import { Link } from "react-router-dom";

class quoteList extends Component {

  getQuotes(){
    if(!this.props.data.quotes) return (<div>Loading...</div>)
    let path;
    return this.props.data.quotes.map((quote, idx) => {
      path = "/detail/"+ quote.id
      return (
        <li key={idx} className="row quote-li">
          <div to={path} className="col s12 m12">
            <div className="card blue lighten-5 black-text">
              <div className="card-content">
                <Link to={path} className="list-quote-content">{quote.content}</Link>
                <p className="align-right list-quote-from"> - {quote.from}</p>
              </div>
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.getQuotes()}
        </ul>
      </div>
    )
  }
}

export default graphql(query)(quoteList);