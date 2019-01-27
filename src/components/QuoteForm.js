import React, { Component } from 'react'

export class QuoteForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      content: '',
      from: '',
      category: ''
    }
  }

  onSubmit(event){
    event.preventDefault();
    console.log('Submit!!!!!!');
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form className="col s12 quote-form" onSubmit={this.onSubmit.bind(this)}>
        <h5>추가할 Quote 정보를 입력하세요.</h5>
        <div className="input-field col s10">
          <i className="material-icons prefix">mode_edit</i>
          <input 
            value={this.state.content} 
            onChange={(event)=> this.setState({content: event.target.value})}
          />
          <label className="active" htmlFor="first_name2">Content</label>
        </div>
        <div className="input-field col s10">
          <i className="material-icons prefix">account_circle</i>
          <input 
            value={this.state.from} 
            onChange={(event)=> this.setState({from: event.target.value})}
          />
          <label className="active" htmlFor="first_name2">From</label>
        </div>
        <div className="input-field col s10">
          <input 
            value={this.state.category} 
            onChange={(event)=> this.setState({category: event.target.value})}
          />
          <label className="active" htmlFor="first_name2">Category</label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default QuoteForm