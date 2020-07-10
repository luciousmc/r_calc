import React from "react";

const Keypad = ({ buttonsList, handleClick }) => {
  return buttonsList.map((button, index) => {
    return (
      <div key={index} className={`btn btn-${button}`} onClick={handleClick}>
        {button}
      </div>
    );
  });
};

export default Keypad;
