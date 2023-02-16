import React, { useState, useEffect } from "react";

function Code() {
  const [elements, setElements] = useState([]);

  const interval = setInterval(() => {
    setElements(() => [
      <pre data-prefix=">" className="text-success">
        <code>Done!</code>
      </pre>,
    ]);
  }, 2000);

  return (
    <>
      <pre data-prefix=">" className="text-warning">
        <code>installing...</code>
      </pre>
      {elements.map((element, index) => (
        <span key={index}>{element}</span>
      ))}
    </>
  );
}

export default Code;
