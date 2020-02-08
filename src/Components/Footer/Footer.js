import React from "react";
import classes from './Footer.module.css';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/instagram.svg'
import instagram from '../../assets/twitter.svg'

const footer = () => {
  return (
      <div className={classes.footer}>
        {/* <ul>
          <li><img src={facebook} alt="f"/></li>
          <li><img src={twitter} alt="t"/></li>
          <li><img src={instagram} alt="i"/></li>
        </ul> */}
      </div>
  );
};

export default footer;