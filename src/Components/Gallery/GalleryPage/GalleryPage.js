import React, { Component } from "react";
import classes from "./GalleryPage.module.css";
import GalleryNav from "./GalleryNav/GalleryNav";
import GalleryContent from "./GalleryContent/GalleryContent";

class galleryPage extends Component {
  render() {
    return (
      <div className={classes.GalleryPage}>
        <GalleryNav />
        <GalleryContent />
      </div>
    );
  }
}

export default galleryPage;
