import React from "react";
import classes from "./GalleryContent.module.css";
import SubHeading from "../../../SubHeading/SubHeading";

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
    return (<img src = {images[image]} key={index} alt = {image} />);
    });
  };

  return (
    <div style={{textAlign:'right'}} className={classes.GalleryContent}>
    <div onClick={props.click} className={classes.subHeading}>
     <SubHeading> Galleries </SubHeading>
     </div>
      {output}
    </div>
  );
};

export default galleryContent;