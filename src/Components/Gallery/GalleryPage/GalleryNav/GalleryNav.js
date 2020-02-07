import React from "react";
import classes from "./GalleryNav.module.css";



const galleryNav = (props) => {

  const categories = ["renovation", "construction", "painting", 
                      "landscaping", "other", "roofing"];

  let output = categories.map((category, index) => 
    <li id={category} className={(props.active.trim() === category.trim()) ? classes.Active : null} key={index} onClick={props.click}> {category} </li>
  );

  return (
    <div className = {props.browse ? `${classes.GalleryNav} ${classes.browse}` : classes.GalleryNav}>
      <ul>
        {output}
      </ul>
    </div>
  );
};

export default galleryNav;
