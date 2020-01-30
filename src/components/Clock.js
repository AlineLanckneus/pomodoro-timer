import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ModalBox from './ModalBox';
//this component will hold state and pass it down to its children
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 20,
      seconds: 0,
      timerOn: false
    };
  }

  startTimer = () =>{
    this.timer = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
          timerOn: true
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.timer);
        } else {
          this.setState(({ minutes }) => ({
            timerOn: true,
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  }

  IncrementTime = () => {
    console.log('increment time');
    if (this.state.timerOn === false) {
      this.setState({
        minutes: this.state.minutes + 1,
        timerOn: false
      });
    }
  };
  DecrementTime = () => {
    console.log('decrement time');
    if (this.state.timerOn === false) {
      this.setState({
        minutes: this.state.minutes - 1,
        timerOn: false
      });
    }
  };
  
  ResetTimer = () => {
    console.log('reset timer');

    if (this.state.timerOn === true) {
      clearInterval(this.timer);
      this.setState({
        minutes: 20,
        seconds: 0,
        timerOn: false
      });
    }
  };
  render() {
    const { minutes, seconds, timerOn } = this.state;
    return (
      <div>
        {minutes === 0 && seconds <= 45 ? (
          <ModalBox />
        ) : null} 
          <h1>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{' '}
          </h1>
        
        <ButtonGroup className='btnGroup' orientation='vertical'>
          <Button variant='contained' onClick={this.DecrementTime}>
            -
          </Button>
          <Button variant='contained' onClick={this.IncrementTime}>
            +
          </Button>
        </ButtonGroup>
        <ButtonGroup className='btnGroup' orientation='vertical'>
          {timerOn !== true && (
            <Button variant='contained' onClick={this.startTimer}>
              Start
            </Button>
          )}
          {timerOn === true && (
            <Button variant='contained' onClick={this.ResetTimer}>
              Reset
            </Button>
          )}
          
        </ButtonGroup>
      </div>
    );
  }
}

export default Clock;
