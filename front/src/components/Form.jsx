import React from "react";

const Form = () => {
  return (
    <div>
      <div className="input-group mb-[30px]">
        <label className="input-group input-group-vertical">
          <span>Rechercher un modèle de voiture</span>
          <input
            type="text"
            key="search-bar"
            // onChange={(e) => onChange(e.target.value)}
            placeholder="Ex : Mercedes Classe A"
            className="input input-bordered"
          />
        </label>
      </div>
      <div id="formParent" className="flex flex-wrap">
        <div>
          <label className="input-group input-group-vertical">
            <span>Année de production</span>
            <input
              type="number"
              min="1960"
              max={new Date().getFullYear()}
              placeholder="Ex : 2021"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Date de mise en circulation</span>
            <input
              type="date"
              placeholder="Ex : 01/01/2021"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Kilomètrages ( Km )</span>
            <input
              type="number"
              min="10"
              max="1000000"
              placeholder="Ex : 15 000"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Type de carburant</span>
            <select className="select select-bordered w-100">
              <option disabled selected>
                Sélectionner
              </option>
              <option>Diesel</option>
              <option>Essence</option>
            </select>
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Type de boite de vitesse</span>
            <select className="select select-bordered w-100">
              <option disabled selected>
                Sélectionner
              </option>
              <option>Automatique</option>
              <option>Manuelle</option>
            </select>
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Nombre de portes</span>
            <input
              type="text"
              min="2"
              max="5"
              placeholder="Ex : 5"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Nombre de places</span>
            <input
              type="text"
              min="2"
              max="7"
              placeholder="Ex : 5"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Puissance en chevaux ( Cv )</span>
            <input
              type="text"
              placeholder="Ex : 110"
              className="input input-bordered"
            />
          </label>
        </div>
        <div>
          <label className="input-group input-group-vertical">
            <span>Département</span>
            <input
              type="number"
              min="1"
              max="95"
              placeholder="Ex : 75"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      <div className="w-100 flex justify-center items-center mt-[30px]">
        <div className="flex justify-center w-1/3">
          <label className="label cursor-pointer">
            <span className=" text-md text-base-100 mr-2">Première main ?</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
