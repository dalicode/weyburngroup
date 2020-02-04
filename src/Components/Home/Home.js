import React from "react";
import classes from './Home.module.css';
import Gallery from '../Gallery/Gallery';
import SubHeading from '../SubHeading/SubHeading';

const home = () => {
  return (
      <div className={classes.Home}>
        <div className={classes.LeftHeader}><p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi incidunt rem, quos magni, dolore quod qui porro, dolores aspernatur officiis soluta! Tenetur est facere incidunt impedit iste, nesciunt iure accusamus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid necessitatibus dolor fugiat consequuntur fugit illo! Perferendis, fugit voluptas non illo ea nobis sapiente maxime culpa eum rem dolorum quae ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam et dicta, totam aut ad rerum velit minus provident magni saepe blanditiis vitae sint quibusdam, reiciendis ullam voluptatum ratione. Cumque? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime provident iusto itaque quis deleniti. Recusandae nihil voluptas ut illum. Explicabo aut modi adipisci iure voluptates, nesciunt incidunt dolore in quo.lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quasi inventore libero, nostrum quibusdam obcaecati ipsa minima voluptatem aspernatur labore dicta debitis a porro natus, doloremque, itaque sapiente neque quas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi natus nihil eius illum tempore quisquam, cumque sequi possimus nesciunt, vel voluptates. Quia saepe impedit vel. Recusandae ipsum laborum neque tempora!</p> </div>
        <SubHeading> Services </SubHeading>
        <Gallery/>
      </div>
  );
};

export default home;