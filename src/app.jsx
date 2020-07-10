import React from "react";
import Keypad from "./keypad";

const App = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };
  const buttonArray = [
    "ce",
    "c",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

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
