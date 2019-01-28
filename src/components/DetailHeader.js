import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import mutation from '../mutation/deleteQuote';
import query from '../queries/fetchQuotes';
import history from '../history';

export class DetailHeader extends Component {

  deleteQuote(){
    this.props.mutate({
      variables:{id: this.props.quoteId},
      refetchQueries: [{ query }]
    }).then(() => {
      history.push('/');
    })
  }

  render() {
    return (
      <h4 className="col offset-s0 s12 offset-m2 m10">
        Quote Info  
        <button className="btn-floating red right" onClick={this.deleteQuote.bind(this)}>
          <i className="material-icons">clear</i>
        </button>
      </h4>
    )
  }
}

export default graphql(mutation)(DetailHeader)
