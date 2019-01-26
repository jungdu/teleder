import React, { Component } from 'react';
import fetchQuote from '../queries/fetchQuote';
import { graphql } from 'react-apollo';

export class QuoteDetail extends Component {

  detailInfo(){
    const { quote, loading } = this.props.data;
    if(loading) return (<div> loading... </div>);
    if(!quote) return (<div> No Detail Data </div>);

    return (
      <div>
        <p>{quote.content}</p>
        <p>{quote.from}</p>
        <p>{quote.insert_dt}</p>
        <p>{quote.likes}</p>
      </div>
    );
  }

  render() {
    console.log(this.props.match);
    console.log(this.props.data);
    
    return (
      <div>
        {this.detailInfo()}
      </div>
    )
  }
}

export default graphql(fetchQuote, {
  options: (props) => { return { variables: { id: props.match.params.quoteId } } }
})(QuoteDetail);