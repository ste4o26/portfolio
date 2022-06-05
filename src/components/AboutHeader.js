import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import classes from './AboutHeader.module.css';

const AboutHeader = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.title}>WEB DEVELOPER</h1>
                <div className={classes.imgContainer}>
                    <img src='./assets/me.jpg' />
                </div>
            </header>

            {
                props.isHiddenContent &&
                <div className={classes.icon}>
                    <FontAwesomeIcon icon={faAnglesDown} />
                </div>
            }
        </Fragment>
    );
}

export default AboutHeader;
