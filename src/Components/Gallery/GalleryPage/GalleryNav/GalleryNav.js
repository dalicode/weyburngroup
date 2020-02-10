import React from "react";
import classes from "./GalleryNav.module.css";


const galleryNav = (props) => {
  
  const categories = ["roofing", "siding"];

  const renoCategories = ["bathrooms", "basements", "kitchens"];
  
  let output = (categories) => categories.map((category, index) => 
    <p id={category} className={(props.active.trim() === category.trim()) ? classes.Active : null} key={index} onClick={props.click}>
    {category}
    </p>
  );

  return (
    <div className = {props.browse ? `${classes.GalleryNav} ${classes.browse}` : classes.GalleryNav}>
      <div>
        <div className={classes.renovation}>
          <p className={!props.collapsed && renoCategories.includes(props.active) ? classes.Active : null} onClick={props.collapseToggle}>renovation</p>
          <div className={props.collapsed ? classes.collapsible : `${classes.collapsible} ${classes.open}`}>
          {output(renoCategories)}
          </div>
        </div>
        {output(categories)}
      </div>
    </div>
  );
};

export default galleryNav;
