import React from 'react';
import classes from './Three.module.css';
import airbnb from '../../assets/07.png';
import coinbase from '../../assets/08.png';
import dribble from '../../assets/09.png';
import instagram from '../../assets/10.png';
import netflix from '../../assets/11.png';
import pinterest from '../../assets/12.png';

const SectionThree = () => {
    return (
        <div className="Container">
            <div className={classes.CompanyWrapper}>
                <div className={classes.Company}>
                    <div className={classes.CompanyName}>
                        <img src={airbnb} alt="" />
                    </div>
                    <div className={classes.CompanyName}>
                        <img src={coinbase} alt="" />
                    </div>
                    <div className={classes.CompanyName}>
                        <img src={dribble} alt="" />
                    </div>
                    <div className={classes.CompanyName}>
                        <img src={instagram} alt="" />
                    </div>
                    <div className={classes.CompanyName}>
                        <img src={netflix} alt="" />
                    </div>
                    <div className={classes.CompanyName}>
                        <img src={pinterest} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionThree;
