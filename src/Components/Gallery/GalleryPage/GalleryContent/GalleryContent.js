import React from "react";
import classes from "./GalleryContent.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Fade.css';
import LazyLoad from 'react-lazy-load';
import {LazyLoadImage} from 'react-lazy-load-image-component';

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const galleryContent = (props) => {
  const images = importAll(require.context('../../../../assets/Gallery Page', false, /\.(png|jpe?g|svg)$/));

  let output = null;

  if (props.active.trim() !== ""){
    output = Object.keys(images).filter((key) => {
    return key.includes(props.active.trim());
  }).map((image,index) => {
    return (
    <LazyLoadImage src = {images[image]} effect="blur" key={index} alt = {image} />
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