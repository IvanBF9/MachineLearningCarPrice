import React, { useState, useEffect } from "react";
import "../../App.css";
import CardForm from "../CardForm";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <></> : <CardForm />;
};

export default Loader;
