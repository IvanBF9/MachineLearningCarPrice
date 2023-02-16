import React from "react";
import Car from "../assets/car.png";

const CardResult = () => {
  return (
    <div id="explainBox" className="card">
      <div className="card-body w-[100%]">
        <h2 className="card-title text-2xl text-base-100">
          Résultat d'estimation
        </h2>
        <hr className="my-3" />
        <div className="flex justify-between items-center w-100">
          <div className="w-5/6">
            <h3 className="text-xl text-base-100">Prix de vente</h3>
          </div>
          <img src={Car} alt="car" className="car h-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default CardResult;
