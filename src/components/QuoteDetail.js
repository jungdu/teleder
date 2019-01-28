import React, { Component } from 'react';
import fetchQuote from '../queries/fetchQuote';
import { graphql } from 'react-apollo';
import DetailHeader from './DetailHeader';

export class QuoteDetail extends Component {

  detailInfo(){
    const { quote, loading } = this.props.data;
    if(loading) return (<div> loading... </div>);
    if(!quote) return (<div> No Detail Data </div>);

    return (
      <table className="highlight">
        <tbody>
          <tr>
            <th>
              Content
            </th>
            <td>{quote.content}</td>
          </tr>
          <tr>
            <th>
              From
            </th>
            <td>
              <p>{quote.from}</p>
            </td>
          </tr>
          <tr>
            <th>
              Insert Date Time
            </th>
            <td>
              {quote.insert_dt}
            </td>
          </tr>
          <tr>
            <th>
              Likes
            </th>
            <td>
              <p>{quote.likes}</p>
            </td>
          </tr>
          <tr>
            <th>MP3 Link</th>
            <td>It isn't Converted yet</td>
          </tr>
          <tr>
            <th>Processing</th>
            <td className="valign-wrapper processing">
              False <button className="btn green"> Convert </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="row ">
        <DetailHeader quoteId={this.props.match.params.quoteId}/>
        {this.detailInfo()}
        <div className="buttons">
        </div>
      </div>
    )
  }
}

export default graphql(fetchQuote, {
  options: (props) => { return { variables: { id: props.match.params.quoteId } } }
})(QuoteDetail);