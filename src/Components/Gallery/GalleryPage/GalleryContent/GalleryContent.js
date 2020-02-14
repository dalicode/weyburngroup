import React from "react";
import classes from "./GalleryContent.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Fade.css';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const GalleryContent = (props) => {
  let output = null;
  
  if (props.active.trim() !== ""){
    output = Object.keys(props.images).filter((key) => {
    return key.includes(props.active.trim());
  }).map((image,index) => {
    return (
      <CSSTransition key={props.active + ' ' +index} in={true} appear={true} classNames="alert" timeout={900}>
    <LazyLoadImage src={props.images[image]} effect="blur" width={image.width} height={image.height}
    key={index} alt = {image} />
    </CSSTransition>
    );
    });
  };

  return (
    <div style={{textAlign:'right'}} className={classes.GalleryContent}>
    <div onClick={props.click} className={classes.subHeading}>
     <p> Galleries </p>
     </div>
     <TransitionGroup className={classes.Images}>
      {output}
      </TransitionGroup>
    </div>
    
  );
};

export default GalleryContent;