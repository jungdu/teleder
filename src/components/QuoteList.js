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
          <Link to={path} className="col s12 m12">
            <div className="card blue lighten-5 black-text">
              <div className="card-content">
                <p>{quote.content}</p>
                <p className="right"> - {quote.from}</p>
              </div>
            </div>
          </Link>
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