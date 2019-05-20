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
        <br />

        <select value='3'>
          <option value='1'>Opção 1</option>
          <option value='2'>Opção 2</option>
          <option value='3'>Opção 3</option>
        </select>
        <br />
        <textarea defaultValue='Default Value' />

      </form>
    )
  }
}