import React, { Component } from "react";
import classes from "./Navigation.module.css";
import logo from "../../assets/logo.svg"
import {NavLink} from "react-router-dom";

class navigation extends Component {
  state = {
    active: false
  }

  show = () => {
    this.setState({active: !this.state.active});
  }
  
  render () {
  return (
      <div id="navMenu" className={classes.navMenu}>
        <div className = {classes.logodiv}> 
          <NavLink to={'/'}>
            <img id="logo" className={classes.logo} src={logo} alt="logo"/> 
          </NavLink>
        </div>
        <div id="iconBar" className={classes.iconBar} onClick={this.show}>
          {/* <img src={menu} alt="menu"/> */}
          <p>MENU</p>
        </div>
        <ul id="ul" className={this.state.active ? `${classes.ul} ${classes.responsive}` : classes.ul} onClick={this.show}>
          <li><NavLink exact={true} activeClassName=      {classes.ActiveNavLink} className={this.state.active ? `${classes.NavLink} ${classes.responsive}` : classes.NavLink} to={'/'}> Home </NavLink></li>
          <li><NavLink activeClassName={classes.ActiveNavLink} className={this.state.active ? `${classes.NavLink} ${classes.responsive}` : classes.NavLink} to={{
          pathname: '/gallery',
          state: {
            active: 'bathrooms'
          }}}> Gallery </NavLink></li>
          <li><NavLink activeClassName={classes.ActiveNavLink} className={this.state.active ? `${classes.NavLink} ${classes.responsive}` : classes.NavLink} to={'/services'}> Services </NavLink></li>
          <li><NavLink activeClassName={classes.ActiveNavLink} className={this.state.active ? `${classes.NavLink} ${classes.responsive}` : classes.NavLink} to={'/contact'}> Contact </NavLink></li>
        </ul>
      </div>
      
  );
        }
};

export default navigation;
