import React from "react";
import classes from "./Loading.module.css";

const loading = (props) => {
  return (
    <div className={classes.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default loading;