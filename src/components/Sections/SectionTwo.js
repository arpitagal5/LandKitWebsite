import React from 'react';
import classes from './Two.module.css';
import iconOne from '../../assets/04.png';
import iconTwo from '../../assets/05.png';
import iconThree from '../../assets/06.png';

const SectionTwo = () => {
    return (
        <div className="Container">
            <div className={classes.Introduce}>
                <div className={classes.IntroItem}>
                    <div className={classes.Icon}>
                        <img src={iconOne} alt="" />
                    </div>
                    <div className={classes.Title}>Built for developers</div>
                    <div className={classes.Content}>
                        Landkit is built to make your life easier. Variables, build tooling,
                        documentation, and reusable components.
                    </div>
                </div>
                <div className={classes.IntroItem}>
                    <div className={classes.Icon}>
                        <img src={iconTwo} alt="" />
                    </div>
                    <div className={classes.Title}>Designed to be modern</div>
                    <div className={classes.Content}>
                        Designed with the latest design trends in mind. Landkit feels modern,
                        minimal, and beautiful.
                    </div>
                </div>
                <div className={classes.IntroItem}>
                    <div className={classes.Icon}>
                        <img src={iconThree} alt="" />
                    </div>
                    <div className={classes.Title}>Documentation for everything</div>
                    <div className={classes.Content}>
                        We've written extensive documentation for components and tools, so you
                        never have to reverse engineer anything.
                    </div>
                </div>
            </div>
        </div>

    );
}
export default SectionTwo;