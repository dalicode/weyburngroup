import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Process from "./Components/Process/Process";
import { Route } from "react-router-dom";
import GalleryPage from "./Components/Gallery/GalleryPage/GalleryPage";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <div className="App">
      <Navigation />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Process} />
          <Route path="/gallery" component={GalleryPage} />
        </AnimatedSwitch>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
