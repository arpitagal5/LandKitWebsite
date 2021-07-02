import React from 'react';
import classes from './Five.module.css';
const SectionFive = () => {
    return (
        <div className="Container">
            <div className={classes.GetStartedSection}>
                <div className={classes.QuestionSection}>
                    <div className={classes.QuestionsList}>
                        <div className={classes.Icon}>?</div>
                        <div className={classes.QuesAns}>
                            <div className={classes.Question}>
                                Can I use Landkit for my clients?
                            </div>
                            <div className={classes.Answer}>
                                Absolutely. The Bootstrap Themes license allows you to build a websites for personal use or for a client.
                            </div>
                        </div>
                    </div>
                    <div className={classes.QuestionsList}>
                        <div className={classes.Icon}>?</div>
                        <div className={classes.QuesAns}>
                            <div className={classes.Question}>
                                Do I get free updates?
                            </div>
                            <div className={classes.Answer}>
                                Yes. We update all of our themes with each Bootstrap update, plus are constantly adding new components, pages, and features to our themes.            </div>
                        </div>
                    </div>
                    <div className={classes.QuestionsList}>
                        <div className={classes.Icon}>?</div>
                        <div className={classes.QuesAns}>
                            <div className={classes.Question}>
                                Is there a money back guarantee?
                            </div>
                            <div className={classes.Answer}>
                                Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a return and get your money back.
                            </div>
                        </div>
                    </div>
                    <div className={classes.QuestionsList}>
                        <div className={classes.Icon}>?</div>
                        <div className={classes.QuesAns}>
                            <div className={classes.Question}>
                                Does it work with Rails? React? Laravel?
                            </div>
                            <div className={classes.Answer}>
                                Yes. Landkit has basic CSS/JS files you can include. If you want to enable deeper customization, you can integrate it into your assets pipeline or build processes.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.BuySection}>
                    <div className={classes.Label}>
                        GET STARTED
                    </div>
                    <div className={classes.Title}>
                        <h1>Get Landkit and save your</h1>
                        <h1>time.</h1>
                    </div>
                    <div className={classes.Text}>
                        Stop wasting time trying to do it the "right way" and build a site from scratch. Landkit is faster, easier, and you still have complete control.
                    </div>
                    <div className={classes.Button}>
                        <p>
                            Buy it now!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionFive;