import React, { Component } from 'react'

export default class SimpleForm extends Component {

  constructor() {
    super()
    this.state = {
      value: 'Default value',
      checked: false
    }
  }

  render() {
    return (
      <form>
        <input type='text' value={this.state.value} onChange={(e) => {
          this.setState({value: e.target.value})
        }} />
        <br />
        <input type='checkbox' value='OK' checked={this.state.checked}
          onChange={(e) => {this.setState({ checked: e.target.checked })}} /> Checkbox
        <br />
        <input type='radio' name='radio' value='1' defaultChecked />1 
        <input type='radio' name='radio' value='2' />2
      </form>
    )
  }
}