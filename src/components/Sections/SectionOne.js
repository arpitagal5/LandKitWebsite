import React from 'react';
import classes from './One.module.css';
import sectionOneImage from '../../assets/03.png';
const SectionOne = () => {
    return (
        <div className="Container">
            <div className={classes.Welcome}>
                <div className={classes.Content}>
                    <div className={classes.Title}>
                        <h1>Welcome to <span style={{ color: "#335eea" }}>Landkit</span>.</h1>
                        <h1>Develop anything.</h1>
                    </div>
                    <div className="text content-large">
                        Build a beautiful, modern website with flexible Bootstrap components
                        built from scratch.
                    </div>
                    <div className={classes.Button}>
                        <a href="/" className={classes.Dark}
                        >View all pages
                        </a>
                        <a href="/" className={classes.Light}>Documentation</a>
                    </div>
                </div>
                <div className={classes.Image}>
                    <img src={sectionOneImage} alt="" />
                </div>
            </div>
        </div>

    );
}
export default SectionOne;