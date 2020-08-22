import React, { useState, useReducer } from "react";
import Keypad from "./keypad";

const calcReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR":
      return { input: [] };
    case "BUTTON_CLICK":
      return { input: [...state.input, action.input] };
  }
};

const initialState = {
  input: [],
};

const App2 = ({ buttonArray }) => {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const handleClick = (e) => {
    const userInput = e.target.textContent;

    if (userInput === "ce") {
      dispatch({ type: "CLEAR" });
    } else {
      dispatch({ type: "BUTTON_CLICK", input: userInput });
    }
  };

  return (
    <div id="wrapper">
      <div className="display-container">
        <div className="display">
          {state.input.length === 0 ? 0 : state.input}
        </div>
      </div>
      <div className="buttons-container">
        <Keypad buttonsList={buttonArray} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App2;
