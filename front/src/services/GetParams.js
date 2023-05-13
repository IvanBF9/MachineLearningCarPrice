const GetParams = async () => {
  const response = await fetch("http://127.0.0.1:5050/api/cars/params/list");
  const data = await response.json();
  return data;
};

export default GetParams;
