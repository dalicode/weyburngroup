import React from "react";
import classes from "./GalleryContent.module.css";
import SubHeading from "../../../SubHeading/SubHeading";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const galleryContent = (props) => {
  const images = importAll(require.context('../../../../assets/Construction', false, /\.(png|jpe?g|svg)$/));

  let output = Object.keys(images).map((image,index) => {
  return (<img src = {images[image]} key={index} alt = {image} />);
  })

  return (
    <div className={classes.GalleryContent}>
     <SubHeading> Gallery </SubHeading>
      {output}
    </div>
  );
};

export default galleryContent;