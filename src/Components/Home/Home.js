import React from "react";
import classes from './Home.module.css';
import Gallery from '../Gallery/Gallery';
import {NavLink} from "react-router-dom";

const home = () => {
  return (
      <div className={classes.Home}>
        <div className={classes.LeftHeader}>
        <h1>Construction company based in Toronto, Ontario </h1>
        <p> "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi incidunt rem, quos magni, dolore quod qui porro, dolores aspernatur officiis soluta! Tenetur est facere incidunt impedit iste, nesciunt iure accusamus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid necessitatibus dolor fugiat consequuntur fugit illo! Perferendis, fugit voluptas non illo ea nobis sapiente maxime culpa eum rem dolorum quae ducimus?" </p> 
        <button className={classes.Button}> <NavLink className={classes.NavLink} to={'/contact'}> Contact Us </NavLink></button>
        </div>
        <Gallery/>
      </div>
  );
};

export default home;