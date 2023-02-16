import React, { useState, useEffect } from "react";
import "../../App.css";
import Code from "./Code";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="loader bg-base-100">
        <div className="mockup-code w-[350px]">
          <pre data-prefix="$">
            <code>pip install car-retailling</code>
          </pre>
          <Code />
        </div>
      </div>
    )
  );
};

export default Loader;
