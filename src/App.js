import React, { Fragment } from "react";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <AboutUs />
    </Fragment>
  );
}

export default App;
