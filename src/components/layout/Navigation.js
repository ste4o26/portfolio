import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <h3>Stefan Damyanov</h3>

                <ul className={classes.nav}>
                    <li>
                        <NavLink
                            className={(navData) => navData.isActive ? classes.active : ''}
                            to='/about'>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className={(navData) => navData.isActive ? classes.active : ''}
                            to='/projects'>
                            Projects
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header >
    );
}

export default Navigation;