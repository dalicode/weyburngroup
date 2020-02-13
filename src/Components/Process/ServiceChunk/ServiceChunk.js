import React from "react";
import classes from "./ServiceChunk.module.css"

const serviceChunk = props => {
  return (
    <div style={props.reverse ? {flexDirection:'row-reverse'} : null}className={classes.ServiceChunk}>
      <div className={classes.LeftDiv}>
        <p>{props.children}</p>
      </div>
      <div className={classes.RightDiv}>
        <div className={classes.ImageWrapper}>
        <img src={props.src} alt={props.children[0]}/>
        </div>
      </div>
    </div>
  );
};

export default serviceChunk;
