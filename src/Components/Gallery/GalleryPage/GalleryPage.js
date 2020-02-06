import React, { Component } from "react";
import classes from "./GalleryPage.module.css";
import GalleryNav from "./GalleryNav/GalleryNav";
import GalleryContent from "./GalleryContent/GalleryContent";
import Footer from '../../Footer/Footer';

class galleryPage extends Component {
  state = {
    selected: ""
  }

  componentDidMount () {
    console.log(this.props.location.state.active);
    this.setState({selected: this.props.location.state.active})
  }

  galleryNavSelectedHandler = ev => {
    this.setState({selected: ev.target.textContent})
  };

  render() {
    return (
      <div className={classes.GalleryPage}>
        <GalleryNav click={this.galleryNavSelectedHandler}
                    active={this.state.selected}
        />
        <GalleryContent active={this.state.selected}/>
        <Footer/>
      </div>
    );
  }
}

export default galleryPage;
