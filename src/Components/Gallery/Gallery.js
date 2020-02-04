import React from "react";
import construction from '../../assets/Main Gallery/construction.jpg'
import landscaping from '../../assets/Main Gallery/landscaping.jpg'
import other from '../../assets/Main Gallery/other.jpg'
import renovation from '../../assets/Main Gallery/renovation.jpg'
import roofing from '../../assets/Main Gallery/roofing.jpg'
import painting from '../../assets/Main Gallery/painting.jpg'
import classes from "./Gallery.module.css";
import {Link} from "react-router-dom";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const gallery = () => {
  return (
      <div className={classes.Gallery}>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={construction}/>
        <p> Construction </p>
        </Link>
      </div>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={landscaping}/>
        <p> landscaping </p>
        </Link>
      </div>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={other}/>
        <p> other </p>
        </Link>
      </div>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={renovation}/>
        <p> renovation </p>
        </Link>
      </div>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={roofing}/>
        <p> roofing </p>
        </Link>
      </div>
      <div className={classes.ImageWrap}>
      <Link to={'/gallery'}>  
        <img className={classes.image} src={painting}/>
        <p> painting </p>
        </Link>
      </div>
      </div>
  );
};

export default gallery;