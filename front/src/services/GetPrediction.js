const GetPrediction = async (body) => {
  console.log("body:",body);
  const res = await fetch("http://127.0.0.1:5050/api/cars/predict", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log("response:",response);
  return response;
};

export default GetPrediction;