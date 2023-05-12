import React, { useState, useEffect } from "react";
import "../../App.css";
import Code from "./Code";
import CardForm from "../CardForm";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <></> : <CardForm />;
};

export default Loader;
