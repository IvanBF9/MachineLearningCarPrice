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
      const energy = document.querySelector("#energy").value;
      const gear_box = document.querySelector("#gear_box").value;
      const kilometers = document.querySelector("#kilometers").value;
      const year = document.querySelector("#year").value;
      const zip_code = document.querySelector("#zip_code").value;
      const cylinder = document.querySelector("#cylinder").value;
      const horsepower = document.querySelector("#horsepower").value;
      const technicalControl = document.querySelector("#technicalControl").value;
      const origin = document.querySelector("#origin").value;
      const firstHand = document.querySelector("#firstHand").value;
      const owners = document.querySelector("#owners").value;
      const externalColor = document.querySelector("#externalColor").value;
      const internalColor = document.querySelector("#internalColor").value;
      const doors = document.querySelector("#doors").value;
      const seats = document.querySelector("#seats").value;
      const length = document.querySelector("#length").value;
      const trunkVolumeRange = document.querySelector("#trunkVolumeRange").value;
      const ratedHorsePower = document.querySelector("#ratedHorsePower").value;
      const pollutionNorm = document.querySelector("#pollutionNorm").value;
      const critAir = document.querySelector("#critAir").value;
      const co2 = document.querySelector("#co2").value;
      const brand = document.querySelector("#brand").value;
      const brand_origin = document.querySelector("#brand_origin").value;

      const body = {
        model: parseFloat(selectedModel),
        energy: parseFloat(energy),
        gear_box: parseFloat(gear_box),
        kilometers: parseFloat(kilometers),
        year: parseFloat(year),
        zip_code: parseFloat(zip_code),
        cylinder: parseFloat(cylinder),
        horsepower: parseFloat(horsepower),
        origin: parseFloat(origin),
        technicalControl: parseFloat(technicalControl),
        firstHand: parseFloat(firstHand),
        owners: parseFloat(owners),
        externalColor: parseFloat(externalColor),
        internalColor: parseFloat(internalColor),
        doors: parseFloat(doors),
        seats: parseFloat(seats),
        length: parseFloat(length),
        trunkVolumeRange: parseFloat(trunkVolumeRange),
        ratedHorsePower: parseFloat(ratedHorsePower),
        pollutionNorm: parseFloat(pollutionNorm),
        critAir: parseFloat(critAir),
        co2: parseFloat(co2),
        brand: parseFloat(brand),
        brand_origin: parseFloat(brand_origin),
      };

      const price = await GetPrediction(body);
      setCarValue(price);
    }
  }

  return (
    <>
      <div id="contentBox" className="card">
        <div className="card-body">
          <h2 className="card-title text-2xl">
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
                  <span>Date de mise en circulation</span>
                  <input
                    id="year"
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
                    id="kilometers"
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
                    id="energy"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.gear_box &&
                      params.energy.decoded.map((param, index) => (
                        <option
                          value={params.energy.encoded[index]}
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
                    id="gear_box"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.gear_box &&
                      params.gear_box.decoded.map((param, index) => (
                        <option
                          value={params.gear_box.encoded[index]}
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
                  <span>Cylindré</span>
                  <input
                    id="cylinder"
                    type="text"
                    min="2"
                    max="10"
                    placeholder="Ex : 1.6"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>Puissance en chevaux ( Cv )</span>
                  <input
                    id="horsepower"
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
                    id="zip_code"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>origin</span>
                  <select
                    id="origin"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.origin &&
                      params.origin.decoded.map((param, index) => (
                        <option
                          value={params.origin.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>technicalControl</span>
                  <select
                    id="technicalControl"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.technicalControl &&
                      params.technicalControl.decoded.map((param, index) => (
                        <option
                          value={params.technicalControl.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>firstHand</span>
                  <select
                    id="firstHand"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.firstHand &&
                      params.firstHand.decoded.map((param, index) => (
                        <option
                          value={params.firstHand.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>2conde main</span>
                  <input
                    id="owners"
                    type="number"
                    min="0"
                    max="1"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>externalColor</span>
                  <select
                    id="externalColor"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.externalColor &&
                      params.externalColor.decoded.map((param, index) => (
                        <option
                          value={params.externalColor.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>internalColor</span>
                  <select
                    id="internalColor"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.internalColor &&
                      params.internalColor.decoded.map((param, index) => (
                        <option
                          value={params.internalColor.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>doors</span>
                  <input
                    id="doors"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>seats</span>
                  <input
                    id="seats"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>length</span>
                  <input
                    id="length"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>trunkVolumeRange</span>
                  <select
                    id="trunkVolumeRange"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.trunkVolumeRange &&
                      params.trunkVolumeRange.decoded.map((param, index) => (
                        <option
                          value={params.trunkVolumeRange.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>ratedHorsePower</span>
                  <input
                    id="ratedHorsePower"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>pollutionNorm</span>
                  <select
                    id="pollutionNorm"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.pollutionNorm &&
                      params.pollutionNorm.decoded.map((param, index) => (
                        <option
                          value={params.pollutionNorm.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>critAir</span>
                  <input
                    id="critAir"
                    type="number"
                    min="1"
                    max="95"
                    placeholder="Ex : 75"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>co2</span>
                  <select
                    id="co2"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.co2 &&
                      params.co2.decoded.map((param, index) => (
                        <option
                          value={params.co2.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>brand</span>
                  <select
                    id="brand"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.brand &&
                      params.brand.decoded.map((param, index) => (
                        <option
                          value={params.brand.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input-group input-group-vertical">
                  <span>brand_origin</span>
                  <select
                    id="brand_origin"
                    className="select select-bordered w-100 capitalize"
                    defaultValue={0}
                  >
                    <option disabled selected>
                      Sélectionner
                    </option>
                    {params.brand_origin &&
                      params.brand_origin.decoded.map((param, index) => (
                        <option
                          value={params.brand_origin.encoded[index]}
                          key={param}
                          className="capitalize"
                        >
                          {param}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
            </div>
            <hr className="my-6" />
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
                  <h2 className="text-2xl mb-4">
                    Voici notre estimation !
                  </h2>
                  <p>
                    Il est important de se rappeler que toute estimation de
                    valeur pour une voiture n'est qu'une approximation.
                  </p>
                  <hr className="my-4" />
                  <h3 className="text-xl">
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
