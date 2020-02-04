import React from "react";
import classes from './SubHeading.module.css';

const subHeading = (props) => {
  return (
        <p className={classes.SubHeading}> {props.children} </p>
  );
};

export default subHeading;