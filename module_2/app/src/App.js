import React, { Component } from 'react';
import Timer from './components/Timer'

class App extends Component {

  constructor() {
    console.log('Constructor');
    super();
    this.state = {
      time: 0
    }
  }

  componentWillMount() {
    console.log('Will Mount');
  }

  componentDidMount() {
    console.log('Did Mount');
  }

  componentWillReceiveProps() {
    console.log('Receive Props');
  }
  
  componentWillUpdate() {
    console.log('Will Update');
  }

  componentWillUnmount() {
    console.log('Will Unmount');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <Timer timer={this.state.time} />
        <button onClick={() => {this.setState({ time: this.state.time + 10 })}}>
          Change Props
        </button>
      </div>
    );
  }
}

export default App;
