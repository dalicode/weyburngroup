import React from "react";
import classes from './SubHeading.module.css';

const subHeading = (props) => {
  return (
        <h1 className={classes.SubHeading}> {props.children} </h1>
  );
};

export default subHeading;