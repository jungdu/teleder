import React, { Component } from 'react';
import { graphql } from 'react-apollo';
export class QuoteCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'new name'}
  }

  render(){
    return(
      <div class="row">
        <div class="input-field col s6">
          <input 
            value={this.state.name} 
            onChange={(event)=> this.setState({name: event.target.value})}
          />
          <label class="active" for="first_name2">First Name</label>
        </div>
      </div>
    )
  }
}
export default QuoteCreate;