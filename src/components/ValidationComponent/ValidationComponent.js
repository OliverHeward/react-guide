import React from 'react';

const validation = (props) => {
    let validationMessage = null;

    if (props.inputLength >= 5 ) {
        validationMessage = <p>Text is long enough</p>
    } else {
        validationMessage = <p>Text is too short</p>
    }

    return (
        <div className="">
            {validationMessage}
        </div>
    )
};

export default validation;