import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import mutation from '../mutation/addQuote';
import query from '../queries/fetchQuotes';
import QuoteForm from './QuoteForm';
import history from '../history';

export class QuoteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
  }

  onSubmit({content, from, category}){
    this.props.mutate({
      variables: {content, from, category},
      refetchQueries: [{query}]
    });
    history.push('/list');
  }

  render(){
    return(
      <div className="row">
        <QuoteForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(mutation)(QuoteCreate);