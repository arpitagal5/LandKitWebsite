import React from 'react';
import logoImage from '../assets/01.svg';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className="Container">
            <div className={classes.Header}>
                <div className="Logo">
                    <img src={logoImage} alt="" />
                </div>
                <div className={classes.Navigation}>
                    <ul className={classes.ListItems}>
                        <li className={classes.ListItem}>
                            <a href="/">Landings</a>
                        </li>
                        <li className={classes.ListItem}>
                            <a href="/">Pages</a>
                        </li>
                        <li className={classes.ListItem}>
                            <a href="/">Account</a>
                        </li>
                        <li className={classes.ListItem}>
                            <a href="/">Documentation</a>
                        </li>
                    </ul>
                </div>
                <div className={classes.ButtonHeader}>
                    <a href="/">Buy Now</a>
                </div>
            </div>
        </div>
    );
}
export default Navigation;