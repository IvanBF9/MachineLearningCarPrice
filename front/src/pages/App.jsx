import { useState } from "react";
import "../App.css";
import Loader from "../components/Loader";
import RS6 from "../assets/rs6.png";
import Navigation from "../components/Nav";

function App() {
  return (
    <>
      <Navigation />
      <Loader />
      {/* <div className="App">
        <img className="hero_banner" src={RS6} alt="RS6" />
      </div> */}
    </>
  );
}

export default App;
