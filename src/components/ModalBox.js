import React from 'react';


//pops up when counter reaches its end -> 2 children
const ModalBox = (props) => {
  
    return (
      <div className={`${props.className} "modal"`} >
        <h1>Take a break!</h1>
        {props.children}
      </div>
    );
  }


export default ModalBox;
