import React from 'react';
import classes from './Four.module.css';
import formImage from '../../assets/13.jpg';
const SectionFour = () => {
    return (
        <div className="Container">
            <div className={classes.FormWrapper}>
                <div className={classes.Wrapper}>
                    <div className={classes.Form}>
                        <div className={classes.FormImage}>
                            <img src={formImage} alt="" />
                        </div>
                        <form>
                            <div className={classes.FormInput}>
                                <input name="name" type="text" id="name" className={classes.InputItem} placeholder="Name" />
                                <p id="text-name"></p>
                                <input name="email" type="text" id="email" className={classes.InputItem} placeholder="Email" />
                                <p id="text-email"></p>
                                <input name="password" type="password" id="pass" className={classes.InputItem} placeholder="Password" />
                                <p id="text-pass"></p>
                            </div>
                            <div className={classes.SubmitButton}>
                                <button type="submit" id="submit">Download a sample</button>
                            </div>
                        </form>
                    </div>
                    <div className={classes.FormContent}>
                        <div className={classes.Title}>
                            <h1>The most useful resource</h1>
                            <h1><span style={{ color: "#42ba96" }}> ever created for dev |</span></h1>
                        </div>
                        <div className={classes.Text}>
                            Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
                        </div>
                        <div className={classes.List}>
                            <div className={classes.ListItem}>
                                Lifetime updates
                            </div>
                            <div className={classes.ListItem}>
                                Tons of assets
                            </div>
                            <div className={classes.ListItem}>
                                Tech support
                            </div>
                            <div className={classes.ListItem}>
                                Integration ready
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionFour;
