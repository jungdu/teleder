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
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="raw">
        <form className="col s12 quote-form" onSubmit={this.onSubmit.bind(this)}>
          <h5>추가할 Quote 정보를 입력하세요.</h5>
          <div className="input-field col s10">
            <i className="material-icons prefix">mode_edit</i>
            <input 
              value={this.state.content} 
              onChange={(event)=> this.setState({content: event.target.value})}
            />
            <label className="active" htmlFor="first_name2">Content*</label>
          </div>
          <div className="input-field col s10">
            <i className="material-icons prefix">account_circle</i>
            <input 
              value={this.state.from} 
              onChange={(event)=> this.setState({from: event.target.value})}
            />
            <label className="active" htmlFor="first_name2">From*</label>
          </div>
          <div className="input-field col s10">
            <input 
              value={this.state.category} 
              onChange={(event)=> this.setState({category: event.target.value})}
            />
            <label className="active" htmlFor="first_name2">Category</label>
          </div>
          <div className="col s12">
            <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default QuoteForm
