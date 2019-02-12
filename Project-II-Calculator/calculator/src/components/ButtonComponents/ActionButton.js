import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <button className={props.actionStyle}>{props.actionText}</button>
    );
}

export default ActionButton;