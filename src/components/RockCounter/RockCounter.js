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
    if(this.state.rocks === 0){
      this.setState({
        rocks: 0
      });
    }
   else{ 
    this.setState({
      rocks: this.state.rocks - 1
    });
  }
}
  onResetClick = () => {
    this.setState({
      rocks: 0
    });
  }

  render() {

    let fiftyRockMessage;
    if (this.state.rocks >= 50) {
        fiftyRockMessage = 'Done!';
    }
    else {
      fiftyRockMessage = this.state.rocks;
    }
    return (
      <div>
          <div>
              Rocks Picked: {fiftyRockMessage}
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
