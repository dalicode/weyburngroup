import React from "react";
import classes from "./GalleryContent.module.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Fade.css';
import LazyLoad from 'react-lazy-load';

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
      <CSSTransition key={props.active + ' ' +index} in={true} appear={true} classNames="alert" timeout={900}>
    <img src = {images[image]} key={index} alt = {image} />
    </CSSTransition>
    );
    });
  };

  return (
    <div style={{textAlign:'right'}} className={classes.GalleryContent}>
    <div onClick={props.click} className={classes.subHeading}>
     <p> Galleries </p>
     </div>
     <LazyLoad
        debounce={false}
        offsetVertical={400}>
     <TransitionGroup>
      {output}
      </TransitionGroup>
      </LazyLoad>
    </div>
    
  );
};

export default galleryContent;