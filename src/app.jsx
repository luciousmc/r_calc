import React from "react";
import Keypad from "./keypad";

const App = ({ buttonArray }) => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div id="wrapper">
      <div className="display-container"></div>
      <div className="buttons-container">
        <Keypad buttonsList={buttonArray} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
