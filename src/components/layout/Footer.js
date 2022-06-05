import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeMerge, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <ul className={classes.links}>
                <li>
                    <a href='https://github.com/ste4o26' target='_blank'>
                        <FontAwesomeIcon icon={faCodeMerge} className={classes.icon} />
                        Github
                    </a>
                </li>

                <li className={classes.emailItem}>
                    <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                    stefan.r.daymanov@gmail.com
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/stefan-damyanov-a7ab3b183/6' target='_blank'>
                        <FontAwesomeIcon icon={faLink} className={classes.icon} />
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;