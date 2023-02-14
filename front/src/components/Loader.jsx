import React, { useState, useEffect } from "react";
import "../App.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="loader">
        <div></div>
      </div>
    )
  );
};

export default Loader;
