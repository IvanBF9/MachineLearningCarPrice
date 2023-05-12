import React from "react";
import Background from "../assets/bg.png";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav";
import Video from "../components/Video";
import CardForm from "../components/CardForm";
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
import "../App.css";
const DARK_MODE = true;

function App() {
  return (
    <div id="App">
      <Nav />
      <Video />
      <div id="container" className="bg-base my-4">
        <Loader />
      </div>
    </div>
  );
}

export default App;
