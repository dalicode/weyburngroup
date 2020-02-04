import React from "react";
import classes from "./GalleryNav.module.css";

const galleryNav = () => {
  return (
    <div className = {classes.GalleryNav}>
      <ul>
        <li> renovation </li>
        <li> construction </li>
        <li> painting </li>
        <li> landscaping </li>
        <li> other </li>
        <li> roofing </li>
      </ul>
    </div>
  );
};

export default galleryNav;
