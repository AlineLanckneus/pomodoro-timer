import React from 'react';
import Clock from '../components/Clock';

import ModalBox from '../components/ModalBox';

//this container component will wrap around everything
const Timer = () => {
  return (
    <React.Fragment>
      <h1>Pomodoro Timer</h1>
      <ModalBox />
      
      <Clock />
    </React.Fragment>
  );
};

export default Timer;
