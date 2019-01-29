import React, { Component } from 'react';
import fetchQuote from '../queries/fetchQuote';
import { graphql } from 'react-apollo';
import DetailHeader from './DetailHeader';
import VoiceSelect from './VoiceSelect';
import mutation from '../mutation/addToMp3';
export class QuoteDetail extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      voice:'Kimberly'
    }
  }

  handleChange(event) {
    this.setState({voice: event.target.value});
  }

  fetchToPolly(){
    this.props.mutate({
      variables:{
        quoteId:this.props.data.quote.id,
        voice:this.state.voice
      },
      refetchQueries: [{
        query: fetchQuote,
        variables: {
          id: this.props.match.params.quoteId
        }
      }]
    })
  }

  detailInfo(){
    const { quote, loading } = this.props.data;
    if(loading) return (<div> loading... </div>);
    if(!quote) return (<div> No Detail Data </div>);
    let location;
    if(quote.s3obj && quote.s3obj.Location){
      location = (<audio controls src={quote.s3obj.Location}> quote.s3obj.Location </audio>);
    }else{
      location = ( <p>There isn't converted yet</p> );
    }

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
            <td>{location}</td>
          </tr>
          <tr>
            <th>Processing</th>
            <td className="processing row">
              <p className="col s2 voice-p">Voice:</p>
              <VoiceSelect voice={this.state.voice} handleChange={this.handleChange.bind(this)}/>
              <button className="btn green right" onClick={this.fetchToPolly.bind(this)}> Convert </button>
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

export default graphql(mutation)(graphql(fetchQuote, {
  options: (props) => { return { variables: { id: props.match.params.quoteId } } }
})(QuoteDetail));