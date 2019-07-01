import React from 'react';

// Custom HOC with Class name prop
const withClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default withClass;