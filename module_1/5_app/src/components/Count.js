import React from 'react'

export default class Count extends React.Component {

  state = {
    number: 0
  }

  increment = () => {
    this.setState({number: this.state.number + 1})
  }

  clear = () => {
    this.setState({number: 0})
  }

  render() {
    return (
      <div>
        <span>{this.state.number}</span>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.clear}>Zerar</button>
      </div>
    )
  }
}