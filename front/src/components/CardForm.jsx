import React from "react";
import GetParams from "../services/GetParams";
import GetPrediction from "../services/GetPrediction";
import Car from "../assets/car.png";
import BgVideo from "../assets/bg.mp4";

const CardForm = () => {
  const [params, setParams] = React.useState({});
  const [models, setModels] = React.useState([]);
  const [selectedModel, setSelectedModel] = React.useState(undefined);
  const [isOpened, setOpened] = React.useState(false);
  const [carValue, setCarValue] = React.useState(undefined);

  React.useEffect(() => {
    const getParams = async () => {
      const params = await GetParams();
      setParams(params);
    };
    getParams();
  }, []);

  React.useEffect(() => {
    console.log(selectedModel);
  }, [selectedModel]);

  function hideZebi() {
    setOpened(false);
  }

  function selectModel({ target }) {
    const value = target.getAttribute("customvalue");
    setSelectedModel(value);
    document.querySelector("#searchbar").value = target.innerText;
    hideZebi();
  }

  function findModel({ target }) {
    if (params.model) {
      let tempModels = [];

      params.model.decoded.map((model, index) => {
        if (model.toLowerCase().includes(target.value.toLowerCase())) {
          tempModels.push({ model: model, value: params.model.encoded[index] });
        }
      });
      tempModels.length = 10;
      setModels(tempModels);
      setOpened(true);
    }
  }

  async function sendForm() {
    if (selectedModel) {
      const annee = document.querySelector("#annee").value;
      const misecirculation = document.querySelector("#misecirculation").value;
      const km = document.querySelector("#km").value;
      const carburant = document.querySelector("#carburant").value;
      const boite = document.querySelector("#boite").value;
      const portes = document.querySelector("#portes").value;
      const places = document.querySelector("#places").value;
      const cv = document.querySelector("#cv").value;
      const dp = document.querySelector("#dp").value;
      const firsthand = document.querySelector("#firsthand").checked;

      const body = {
        model: parseFloat(selectedModel),
        annee: parseFloat(annee),
        mise_en_circulation: parseFloat(misecirculation),
        kilometrage: parseFloat(km),
        energie: parseFloat(carburant),
        boite: parseFloat(boite),
        nb_portes: parseFloat(portes),
        nb_places: parseFloat(places),
        premiere_main: firsthand ? 1 : 0,
        puissance: parseFloat(cv),
        departement: parseFloat(dp),
      };

      const price = await GetPrediction(body);
      setCarValue(price);
    }
  }

  return (
    <>
      <div id="contentBox" className="card">
        <div className="card-body">
          <h2 className="card-title text-2xl text-white">
            A propos de votre voiture
          </h2>
          <hr className="my-4" />
          <div>
            <div className="input-group mb-[30px]">
              <label className="input-group input-group-vertical">
                <span>Rechercher un modèle de voiture</span>
                <input
                  id="searchbar"
                  type="text"
                  placeholder="Ex : Mercedes Classe A"
                  className="input input-bordered"
                  onChange={findModel}
                />
              </label>
              <div className="selectbar bg-base-100">
                {models.length > 0 &&
                  isOpened &&
                  models.map((model) => (
                    <span
                      className="bg-base-100"
                      onClick={selectModel}
                      customvalue={model.value}
                    >
                      {model.model}
                    </span>
                  ))}
              </div>
            </div>
            <div id="formParent" className="flex flex-wrap">
              <div>
                <label className="input-group input-group-vertical">
                  <span>Année de production</span>
                  <input
                    id="annee"
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
                    id="misecirculation"
                    type="number"
                    min="1960"
                    max={new Date().getFullYear()}
                    placeholder="Ex : 2015"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>Kilomètrages ( Km )</span>
                  <input
                    id="km"
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
                  <select
                    id="carburant"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.boite &&
                      params.energie.decoded.map((param, index) => (
                        <option
                          value={params.energie.encoded[index]}
                          key={param}
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>Type de boite de vitesse</span>
                  <select
                    id="boite"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.boite &&
                      params.boite.decoded.map((param, index) => (
                        <option
                          value={params.boite.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {index == 2 ? "électrique" : param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>Nombre de portes</span>
                  <input
                    id="portes"
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
                    id="places"
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
                    id="cv"
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
                    id="dp"
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
                  <span className=" text-md text-base-100 mr-2">
                    Première main ?
                  </span>
                  <input
                    type="checkbox"
                    id="firsthand"
                    className="checkbox bg-red-700"
                  />
                </label>
              </div>
            </div>
            <hr className="my-4" />
            <div className="card-actions justify-center">
              <label
                onClick={sendForm}
                htmlFor="my-modal-4"
                className="btn  bg-red-700 w-[300px]"
              >
                Estimer !
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <h2 className="text-2xl text-white mb-4">
                    Voici notre estimation !
                  </h2>
                  <p className="text-white">
                    Il est important de se rappeler que toute estimation de
                    valeur pour une voiture n'est qu'une approximation.
                  </p>
                  <hr className="my-4" />
                  <h3 className="text-xl text-white">
                    Prix de vente :{" "}
                    <span className="font-bold">
                      {carValue &&
                        carValue.toLocaleString("fr-FR", {
                          maximumFractionDigits: 3,
                        })}{" "}
                      €
                    </span>
                  </h3>
                  <hr className="my-4" />
                  <video autoPlay loop muted width="100%">
                    <source src={BgVideo} type="video/mp4" />
                  </video>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardForm;
