import { useState } from "react";
import "../App.css";
import Background from "../assets/bg.png";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav";
import CardForm from "../components/CardForm";
import CardResult from "../components/CardResult";

function App() {
  return (
    <div id="App">
      <Loader />
      <img src={Background} alt="background" className="map" />
      <Nav />
      <div id="container" className="bg-base my-4">
        <CardForm />
        <CardResult />
      </div>
    </div>
  );
}

export default App;
