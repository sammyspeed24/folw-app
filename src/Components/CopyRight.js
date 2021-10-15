import React from 'react';
import classes from '../Components/CopyRight.module.css'


function CopyRight(){
    return(
        <div className={classes.CopyRightContainer}>
        <section className={classes.copyright}>
            <p className={classes.copy1}>Copyright © 2021 RCCG FOLW parish</p>
            <p  className={classes.copy2}>Designed by <strong><span className={classes.Smart}>SMART</span>dev. technology</strong></p>
        </section>
        </div>
    );
}export default CopyRight;

