import React, { Component } from 'react'

class Timer extends Component {

  constructor() {
    console.log('Constructor Timer');
    
    super()
    this.state = {
      time: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('Receive Props Timer', this.props, nextProps);
  }

  componentDidMount() {
    console.log('Did Mount Timer');
    this.Timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('Shoul Component Update Timer', this.state, nextState);
    return true
  }

  componentWillUpdate(nestProps, nextState) {
    // console.log('Shoul Component Will Update Timer', this.state, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update Timer', this.props, prevProps);
  }

  render() {
    return (
      <div>{this.state.time}</div>
    )
  }
}

export default Timer