import React from 'react';
import Button from '@material-ui/core/Button';

//pops up when counter reaches its end -> 2 children
class ModalBox extends React.Component {
  render() {
    return (
      <div className='modalBox'>
        I'm a pop up modal box
        <Button variant="contained" color="secondary">Close</Button>
        <Button variant="contained" color="primary">Start New Timer</Button>
      </div>
    );
  }
}
export default ModalBox;
