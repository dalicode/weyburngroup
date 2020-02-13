import React from "react";
import classes from "./Value.module.css";

const value = props => {
  return (
      <div
        style={props.reverse ? { flexDirection: "row-reverse" } : null}
        className={classes.Value}
      >
        <div className={classes.LeftDiv}>
          <p>{props.children}</p>
        </div>
        <div className={classes.RightDiv}>
          <img src={props.src} alt={props.children[0]} />
        </div>
      </div>
  );
};

export default value;
