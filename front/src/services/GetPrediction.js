const GetPrediction = async (body) => {
  console.log(body);
  const res = await fetch("http://127.0.0.1:5000/api/cars/predict", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(body),
  });
  const response = await res.json();
  return response;
};

export default GetPrediction;