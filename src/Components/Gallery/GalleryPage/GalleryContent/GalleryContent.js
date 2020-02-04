import React from "react";
import classes from "./GalleryContent.module.css";
import con1 from "../../../../assets/Construction/con1.jpg"
import con2 from "../../../../assets/Construction/con2.jpg"
import con3 from "../../../../assets/Construction/con3.jpg"
import con4 from "../../../../assets/Construction/con4.jpg"
import con5 from "../../../../assets/Construction/con5.jpg"
import SubHeading from "../../../SubHeading/SubHeading";

const galleryContent = () => {
  return (
    <div className={classes.GalleryContent}>
    <SubHeading> Gallery </SubHeading>
      <img src = {con1} alt="con1"/>
      <img src = {con2} alt="con1"/>
      <img src = {con3} alt="con1"/>
      <img src = {con4} alt="con1"/>
      <img src = {con5} alt="con1"/>
    </div>
  );
};

export default galleryContent;