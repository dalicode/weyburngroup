import React from "react";
import classes from './Home.module.css';
import Gallery from '../Gallery/Gallery';
import {NavLink} from "react-router-dom";

const home = () => {
  return (
      <div className={classes.Home}>
        <div className={classes.LeftHeader}>
        <h1>Construction company based in Toronto, Ontario </h1>
        <p> Hi! We are David and Jack - two driven individuals who want to help you achieve your dream home. Home remodelling is our passion and is what drives Weyburn Group forward in today's constantly evolving industry.  We build to improve and revitalize people's living spaces and their local communities. With over 10+ years of combined construction experience, our team is ready to transform your home. Weyburn Group places a strong focus on communication, quality, and safety. We're here to help create beautiful spaces together with you. We offer a variety of home improvement services in both interior and exterior construction. </p> 
        <button className={classes.Button}> <NavLink className={classes.NavLink} to={'/contact'}> Contact Us </NavLink></button>
        </div>
        <Gallery/>
      </div>
  );
};

export default home;