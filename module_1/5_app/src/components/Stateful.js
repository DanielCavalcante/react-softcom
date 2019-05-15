import React, { Component } from 'react'

class Stateless extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Daniel'
    }
  }

  render() {
    return (
      <div onClick={() => this.setState({text: 'Daniel Cavalcante'})}>
        {this.state.text}
      </div>
    )
  }
}

export default Stateless