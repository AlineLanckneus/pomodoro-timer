import React from 'react';
import Clock from '././components/Clock';
import './App.css';
//import Timer from './containers/Timer';

const App = () => {
    return (
      <React.Fragment>
        <h1>Pomodoro Timer</h1>
        <Clock />
      </React.Fragment>
    );
  }


export default App;
