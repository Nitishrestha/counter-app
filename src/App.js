import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [number, changeNumber] = useState(0);
  return (
    <div className="div">
      <h1>Hello World</h1>
      <h1>{number}</h1>
      <button onClick={() => changeNumber(number + 1)} className="button">
        Add
      </button>
      <button onClick={() => changeNumber(number - 1)} className="button">
        Sub
      </button>
      <button onClick={() => changeNumber(0)} className="button">
        Reset
      </button>
    </div>
  );
};

export default App;
