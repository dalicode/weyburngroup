import React from "react";
import renovation from '../../assets/Main Gallery/renovation.jpg'
import roofing from '../../assets/Main Gallery/roofing.jpg'
import siding from '../../assets/Main Gallery/painting.jpg'
import classes from "./Gallery.module.css";
import {Link} from "react-router-dom";

let services = [["renovation", renovation, "bathrooms"], ["roofing", roofing, "roofing"], ["siding", siding, "siding"]];

let output = services.map((service,index) => {
  return (
    <div key={index} className={classes.ImageWrap}>
      <Link to={{
          pathname: '/gallery',
          state: {
            active: service[2]
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