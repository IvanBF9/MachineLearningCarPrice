import React from "react";

const CardTopCar = () => {
  return (
    <div className="flex flex-wrap w-[80%] m-auto gap-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Peugeot 308 phase 2</h2>
          <hr className="border-gray-500 my-4" />
          <p>200cv</p>
        </div>
      </div>
    </div>
  );
};

export default CardTopCar;
