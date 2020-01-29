import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//this component will hold state and pass it down to its children
export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: 20,
      timerOn: false,
      timerTime: 0
    };

    this.IncrementTime = this.IncrementTime.bind(this);
    this.DecrementTime = this.DecrementTime.bind(this);
  }
  StartTimer = () => {
    console.log('start timer');
    this.timer = setInterval(
      () =>
        this.setState({
          timerStart: this.state.timerStart - 1,
          timerOn: true
        }),
      1000
    );
  };
  IncrementTime() {
    console.log('increment time');
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: this.state.timerStart + 1
      });
    }
  }
  DecrementTime() {
    console.log('decrement time');
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: this.state.timerStart - 1,
        timerOn: false
      });
    }
  }
  StopTimer = () => {
    console.log('stop timer');
    clearInterval(this.timer);
    this.setState({
      timerOn: false
    });
  };
  ResetTimer = () => {
    console.log('reset timer');
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: 20
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Timer: {this.state.timerStart} </h1>
        <ButtonGroup className='btnGroup' orientation='vertical'>
          <Button variant='contained' onClick={this.DecrementTime}>
            -
          </Button>
          <Button variant='contained' onClick={this.IncrementTime}>
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup className='btnGroup' orientation='vertical'>
          <Button variant='contained' onClick={this.StartTimer}>
            Start
          </Button>
          <Button variant='contained' onClick={this.StopTimer}>
            Stop
          </Button>
          <Button variant='contained' onClick={this.ResetTimer}>
            Reset
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Clock;
