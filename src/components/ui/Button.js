import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    const clickHandler = () => props.onClick();

    return (
        <button
            className={classes.button}
            type={props.type}
            onClick={clickHandler}
        >
            {props.children}
        </button>
    );
}

export default Button;