import React from "react";
import classes from "./ServiceChunk.module.css"

const serviceChunk = props => {
  return (
    <div className={classes.ServiceChunk}>
      <div className={classes.LeftDiv}>
        <p>{props.children}</p>
      </div>
      <div className={classes.RightDiv}>
        <div className={classes.ImageWrapper}>
        <img src={require('../../../assets/Main Gallery/construction.jpg')}/>
        </div>
      </div>
    </div>
  );
};

export default serviceChunk;
