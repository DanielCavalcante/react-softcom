import React, { Component } from 'react'

class Timer extends Component {

  constructor() {
    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Receive Props', this.props, nextProps);
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    })
  }

  render() {
    return (
      <div>{this.state.time}</div>
    )
  }
}

export default Timer