import React, { Component } from 'react';

class RockCounter extends Component {

  state = {
    rocks: 0
  }
  onIncreaseClick = () => {
    this.setState({
      rocks: this.state.rocks + 1
    });
  }

  onDecreaseClick = () => {
    this.setState({
      rocks: this.state.rocks - 1
    });
  }

  onResetClick = () => {
    this.setState({
      rocks: 0
    });
  }

  render() {
    return (
      <div>
          <div>
              Rocks Picked: {this.state.rocks}
          </div>
          <div>
            <button onClick={this.onIncreaseClick}>Increase</button>
            <button onClick={this.onDecreaseClick}>Decrease</button>
            <button onClick={this.onResetClick}>Reset</button>
          </div>
      </div>
    );
  }
}

export default RockCounter;
