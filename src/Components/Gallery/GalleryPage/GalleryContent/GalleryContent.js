import React from "react";
import classes from "./GalleryContent.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Fade.css';
import LazyLoad from 'react-lazy-load';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const galleryContent = (props) => {
  let output = null;

  if (props.active.trim() !== ""){
    output = Object.keys(props.images).filter((key) => {
    return key.includes(props.active.trim());
  }).map((image,index) => {
    return (
    <LazyLoadImage src = {props.images[image]} effect="blur" width={image.width} height={image.height}key={index} alt = {image} />
    );
    });
  };


  return (
    <div style={{textAlign:'right'}} className={classes.GalleryContent}>
    <div onClick={props.click} className={classes.subHeading}>
     <p> Galleries </p>
     </div>
      {output}
    </div>
    
  );
};

export default galleryContent;