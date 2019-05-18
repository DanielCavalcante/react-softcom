import React, { Component } from 'react';
import Timer from './components/Timer'

class App extends Component {

  constructor() {
    console.log('Constructor App');
    super();
    this.state = {
      time: 0
    }
  }

  componentWillMount() {
    console.log('Will Mount App');
  }

  componentDidMount() {
    console.log('Did Mount App');
  }

  render() {
    console.log('Render App');
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
