import React, { Component } from 'react'

export class ConvertBtn extends Component {

  fetchToPolly(){
    
  }

  render() {
    return (
      <button className="btn green right" onClick={this.fetchToPolly.bind(this)}> Convert </button>
    )
  }
}

export default ConvertBtn
