import React, { Component } from "react";
import classes from "./GalleryPage.module.css";
import GalleryNav from "./GalleryNav/GalleryNav";
import GalleryContent from "./GalleryContent/GalleryContent";

class galleryPage extends Component {
  state = {
    selected: "",
    browse: false
  }

  componentDidMount () {
    window.scrollTo(0, 0);
    if (this.props.location.state !== undefined){
    this.setState({selected: this.props.location.state.active})
  }
  }
  galleryNavSelectedHandler = ev => {
    this.setState({selected: ev.target.textContent, browse: false})
  };

  browseSelectedHandler = () => {
    this.setState({browse:!this.state.browse})
  }

  render() {
    return (
      <div className={classes.GalleryPage}>
        <GalleryNav click={this.galleryNavSelectedHandler}
                    active={this.state.selected}
                    browse={this.state.browse}
        />
        <GalleryContent active={this.state.selected}
                        click={this.browseSelectedHandler}
        />
      </div>
    );
  }
}

export default galleryPage;
