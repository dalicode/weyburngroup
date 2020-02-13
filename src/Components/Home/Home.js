import React from "react";
import classes from './Home.module.css';
import Gallery from '../Gallery/Gallery';
import {NavLink} from "react-router-dom";
import Value from './Value/Value';
import value1 from '../../assets/Values Images/values1.png'
import value2 from '../../assets/Values Images/values2.png'
import value3 from '../../assets/Values Images/values3.png'

const home = () => {
  return (
      <div className={classes.Home}>
        <div className={classes.LeftHeader}>
        <h1>Construction company based in Toronto, Ontario </h1>
        <p> Hi! We are David and Jack - two driven individuals who want to help you achieve your dream home. Home remodelling is our passion and is what drives Weyburn Group forward in today's constantly evolving industry.  We build to improve and revitalize people's living spaces and their local communities. With over 10+ years of combined construction experience, our team is ready to transform your home. Weyburn Group places a strong focus on communication, quality, and safety. We're here to help create beautiful spaces together with you. We offer a variety of home improvement services in both interior and exterior construction. </p> 
        <button className={classes.Button}> <NavLink className={classes.NavLink} to={'/contact'}> Contact Us </NavLink></button>
        </div>
        <Gallery/>
        <div className={classes.ValuesSection}>
          <Value reverse={true} src={value1}>
            <h2>Communication</h2>
            We are here to make your vision a reality, which is why we place such importance on communication. We always strive to offer exceptional customer service and transparency in all our work.
          </Value>
          <Value reverse={true} src={value3}>
            <h2>Quality</h2>
            Without a doubt, the team at Weyburn Group provides work quality of the highest standard. Having construction experience in both commercial retail and residential capacities, we believe that our services offered will leave our clients beyond satisfied.
          </Value>
          <Value reverse={true} src={value2}>
            <h2>Safety</h2>
            Above all else, safety is our number one priority when it comes to our work. For both our clients' and our team's protection, Weyburn Group takes great pride in abiding by all building codes and work safety rules to ensure that our services are flawless and hazard-free.
          </Value>
        </div>
      </div>
  );
};

export default home;