import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import query from './queries/fetchQuotes';
import { graphql } from 'react-apollo';

class App extends Component {

  renderQuotes(){
    console.log(this.props.data)
    if(!this.props.data.quotes) return <li>No Data</li>

    const quotes = this.props.data.quotes.map((quote, idx) => {
      return (
        <li key={idx} quote_id={quote.id}>
          {quote.content}
        </li>
      )
    });
    console.log(quotes);
    return quotes;
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          Hello World
        </header>
        <ul>
          {this.renderQuotes()}
        </ul>
      </div>
    );
  }
}

export default graphql(query)(App);
