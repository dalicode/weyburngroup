import React from "react";
import classes from "./GalleryContent.module.css";
import SubHeading from "../../../SubHeading/SubHeading";


function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const galleryContent = (props) => {
  let output = null;
  let blah = "../../../../assets/construction";
  console.log(props.active);
  if(props.active !== "") {
  const images = importAll(require.context(blah, false, /\.(png|jpe?g|svg)$/));

  output = Object.keys(images).map((image,index) => {
    return (<img src = {images[image]} key={index} alt = {image} />);
    })
  }



  return (
    <div className={classes.GalleryContent}>
     <SubHeading> Gallery </SubHeading>
      {output}
    </div>
  );
};

export default galleryContent;