import React, { Component } from "react";
import classes from "./GalleryPage.module.css";
import GalleryNav from "./GalleryNav/GalleryNav";
import GalleryContent from "./GalleryContent/GalleryContent";

class galleryPage extends Component {
  state = {
    selected: "",
    browse: false,
    collapsed: true
  }
  
  importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  images = this.importAll(require.context('../../../assets/Gallery Page', false, /\.(png|jpe?g|svg)$/));

  componentDidMount () {
    window.scrollTo(0, 0);
    if (this.props.location.state !== undefined){
    this.setState({selected: this.props.location.state.active})
      if (this.props.location.state.active === "bathrooms"){
        this.setState({collapsed: false})
      }
  }
  }

  collapse = () => {
    this.setState({collapsed: true})
  }
  collapseToggle = () => {
    this.setState({collapsed: !this.state.collapsed})
  }

  galleryNavSelectedHandler = ev => {
    this.setState({selected: ev.target.textContent, browse: false})
    if (ev.target.textContent.trim() === "roofing" || ev.target.textContent.trim()
        === "siding") {
          this.collapse();
        }
  };

  browseSelectedHandler = () => {
    this.setState({browse:!this.state.browse})
  }

  loadingHandler = () => {
    this.setState({loading:false})
  }

  render() {
    return (
      <div className={classes.GalleryPage}>
        <GalleryNav click={this.galleryNavSelectedHandler}
                    active={this.state.selected}
                    browse={this.state.browse}
                    collapsed={this.state.collapsed}
                    collapseToggle={this.collapseToggle}
        />
        <GalleryContent active={this.state.selected}
                        click={this.browseSelectedHandler}
                        images={this.images}
                        loading={this.loadingHandler}
        />
      </div>
    );
  }
}


//Bathrooms Basements Kitchens

//Renovation Roofing Siding
export default galleryPage;
