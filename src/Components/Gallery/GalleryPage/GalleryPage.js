import React, { Component } from "react";
import classes from "./GalleryPage.module.css";
import GalleryNav from "./GalleryNav/GalleryNav";
import GalleryContent from "./GalleryContent/GalleryContent";

class galleryPage extends Component {
  state = {
    selected: ""
  }

  galleryNavSelectedHandler = ev => {
    this.setState({selected: ev.target.textContent})
    console.log(ev.target.textContent);
  };

  render() {
    return (
      <div className={classes.GalleryPage}>
        <GalleryNav click={this.galleryNavSelectedHandler}
                    active={this.state.selected}
        />
        <GalleryContent active={this.state.selected}/>
      </div>
    );
  }
}

export default galleryPage;
