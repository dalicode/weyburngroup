import React from 'react';
import classes from './Heading.module.css';


const heading = (props) => {
    return ( 
        <h1 className={classes.Heading}>{props.children}</h1>
    )
}

export default heading;