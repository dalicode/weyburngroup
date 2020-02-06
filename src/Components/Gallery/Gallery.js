import React from "react";
import construction from '../../assets/Main Gallery/construction.jpg'
import landscaping from '../../assets/Main Gallery/landscaping.jpg'
import other from '../../assets/Main Gallery/other.jpg'
import renovation from '../../assets/Main Gallery/renovation.jpg'
import roofing from '../../assets/Main Gallery/roofing.jpg'
import painting from '../../assets/Main Gallery/painting.jpg'
import classes from "./Gallery.module.css";
import {Link} from "react-router-dom";

let services = [["construction", construction], ["painting", painting], ["renovation", renovation], ["landscaping", landscaping], ["other", other], ["roofing", roofing]];

let output = services.map((service,index) => {
  return (
    <div className={classes.ImageWrap}>
      <Link to={{
          pathname: '/gallery',
          state: {
            active: service[0]
          }}}>  
        <img className={classes.image} src={service[1]} alt={index}/>
        <p> {service[0]} </p>
        </Link>
      </div>
  )
})

const gallery = () => {
  return (
      <div className={classes.Gallery}>
        {output}
      </div>
  );
};

export default gallery;