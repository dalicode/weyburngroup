import React from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg"
import {Link} from "react-router-dom";

const navigation = () => {
  return (
      <div className={classes.navMenu}>
        <img className={classes.logo} src={logo} alt="logo"/> 
        <ul className={classes.ul}>
          <li><Link className={classes.NavLink} to={'/'}> Home </Link></li>
          <li><Link className={classes.NavLink} to={'/ourstory'}> Our Story </Link></li>
          <li><Link className={classes.NavLink} to={'/process'}> Process & Services </Link></li>
          <li><Link className={classes.NavLink} to={'/contact'}> Contact </Link></li>
        </ul>
      </div>
      
  );
};

export default navigation;
