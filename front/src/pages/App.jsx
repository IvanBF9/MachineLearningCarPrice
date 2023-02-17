import { useState } from "react";
import React from "react";
import "../App.css";
import Background from "../assets/bg.png";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav";
import CardForm from "../components/CardForm";
function App() {

  return (
    <div id="App">
      <Loader />
      <img src={Background} alt="background" className="map" />
      <Nav />
      <div id="container" className="bg-base my-4">
        <CardForm />
      </div>
    </div>
  );
}

export default App;
