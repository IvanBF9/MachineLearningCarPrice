import React from "react";
import Form from "../components/Form";

const CardForm = () => {
  return (
    <div id="contentBox" className="card">
      <div className="card-body">
        <h2 className="card-title text-2xl text-base-100">
          Informations sur l'auto
        </h2>
        <hr className="my-3" />
        <Form />
        <hr className="my-3" />
        <div className="card-actions justify-center">
          <button className="btn btn-primary w-[300px]">Estimer !</button>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
