import React from 'react';

const ModalBoxContent = ({  show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            
            
        </div>
    )
}

export default ModalBoxContent;