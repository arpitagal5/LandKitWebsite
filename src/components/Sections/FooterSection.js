import React from 'react';
import classes from './Footer.module.css';
import logo from '../../assets/01.svg';
import instagram from '../../assets/22.svg';
import facebook from '../../assets/23.svg';
import twitter from '../../assets/24.svg';
import pinterest from '../../assets/25.svg';

const FooterSection = () => {
  return (
    <div className="Container">
      <div className={classes.FooterSection}>
        <div className={classes.Footer}>
          <div className={classes.SocialMedia}>
            <div className={classes.Logo}>
              <img src={logo} alt="" />
            </div>
            <div className={classes.Text}>
              A better way to build.
            </div>
            <div className={classes.LogoImage}>
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
            </div>
          </div>
          <div className={classes.FooterInfo}>
            <div className={classes.FooterInfoList}>
              <span className={classes.InfoTitle}>
                PRODUCT
              </span>
              <div className={classes.Item}>
                <a href="/">Page Builder</a>
              </div>
              <div className={classes.Item}>
                <a href="/">UI Kit</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Styleguide</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Documentation</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Changelog</a>
              </div>
            </div>
            <div className={classes.FooterInfoList}>
              <span className={classes.InfoTitle}>
                SERVICES
              </span>
              <div className={classes.Item}>
                <a href="/">Documentation</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Changelog</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Pagebuilder</a>
              </div>
              <div className={classes.Item}>
                <a href="/">UI Kit</a>
              </div>
            </div>
            <div className={classes.FooterInfoList}>
              <span className={classes.InfoTitle}>
                CONNECT
              </span>
              <div className={classes.Item}>
                <a href="/">Page Builder</a>
              </div>
              <div className={classes.Item}>
                <a href="/">UI Kit</a>

              </div>
              <div className={classes.Item}>
                <a href="/">Styleguide</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Documentation</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Changelog</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Documentation</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Changelog</a>
              </div>
            </div>
            <div className={classes.FooterInfoList}>
              <span className={classes.InfoTitle}>
                LEGAL
              </span>
              <div className={classes.Item}>
                <a href="/">Documentation</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Changelog</a>
              </div>
              <div className={classes.Item}>
                <a href="/">Pagebuilder</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterSection;