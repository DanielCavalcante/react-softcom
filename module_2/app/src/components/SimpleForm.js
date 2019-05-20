import React, { Component } from 'react'

export default class SimpleForm extends Component {

  constructor() {
    super()
    this.state = {
      value: 'Default value'
    }
  }

  render() {
    return (
      <form>
        <input type='text' value={this.state.value} onChange={(e) => {
          this.setState({value: e.target.value})
        }} />
      </form>
    )
  }
}