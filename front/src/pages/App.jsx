import { useState } from "react";
import React from "react";
import "../App.css";
import Background from "../assets/bg.png";
import Loader from "../components/Loader/Loader";
import Nav from "../components/Nav";
import CardForm from "../components/CardForm";
import { JupyterNotebookViewer } from "react-jupyter-notebook-viewer";
const DARK_MODE = true;

function App() {
  return (
    <div id="App">
      <Loader />
      <img src={Background} alt="background" className="map" />
      <Nav />
      <div id="container" className="bg-base my-4">
        <CardForm />

        <div className="card w-3/5">
          <div className="card-body bg-[#f3f3f3]">
            <JupyterNotebookViewer
              filePath="/notebooks/data_exploratory.ipynb"
              className="notebook-class"
              notebookInputLanguage="python"
              inputCodeDarkTheme={DARK_MODE}
              outputDarkTheme={DARK_MODE}
              inputMarkdownDarkTheme={DARK_MODE}
              showInputLineNumbers={true}
              showOutputLineNumbers={false}
              withOnClick={true}
              hideCodeBlocks={false}
              hideMarkdownBlocks={false}
              hideAllOutputs={false}
              hideAllInputs={false}
            />
          </div>
        </div>

        <div className="card w-3/5 mt-[50px]">
          <div className="card-body bg-[#f3f3f3]">
            <JupyterNotebookViewer
              filePath="/notebooks/csv_cleaner.ipynb"
              className="notebook-class"
              notebookInputLanguage="python"
              inputCodeDarkTheme={DARK_MODE}
              outputDarkTheme={DARK_MODE}
              inputMarkdownDarkTheme={DARK_MODE}
              showInputLineNumbers={true}
              showOutputLineNumbers={false}
              withOnClick={true}
              hideCodeBlocks={false}
              hideMarkdownBlocks={false}
              hideAllOutputs={false}
              hideAllInputs={false}
            />
          </div>
        </div>

        <div className="card w-3/5 mt-[50px]">
          <div className="card-body bg-[#f3f3f3]">
            <JupyterNotebookViewer
              filePath="/notebooks/training_model.ipynb"
              className="notebook-class"
              notebookInputLanguage="python"
              inputCodeDarkTheme={DARK_MODE}
              outputDarkTheme={DARK_MODE}
              inputMarkdownDarkTheme={DARK_MODE}
              showInputLineNumbers={true}
              showOutputLineNumbers={false}
              withOnClick={true}
              hideCodeBlocks={false}
              hideMarkdownBlocks={false}
              hideAllOutputs={false}
              hideAllInputs={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
