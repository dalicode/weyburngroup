import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";

const navigation = () => {
  return (
      <div id="navMenu" className={classes.navMenu}>
      <div> 
      <Link to={'/weyburngroup'}>
        <img id="logo" className={classes.logo} src={logo} alt="logo"/> 
        </Link>
        </div>
        <ul className={classes.ul}>
          <li><Link className={classes.NavLink} to={'/weyburngroup'}> Home </Link></li>
          <li><Link className={classes.NavLink} to={{
          pathname: '/gallery',
          state: {
            active: 'renovation'
          }}}> Gallery </Link></li>
          <li><Link className={classes.NavLink} to={'/process'}> Process & Services </Link></li>
          <li><Link className={classes.NavLink} to={'/contact'}> Contact </Link></li>
        </ul>
      </div>
      
  );
};

export default navigation;
