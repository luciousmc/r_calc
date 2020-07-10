import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

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

ReactDOM.render(
  <App buttonArray={buttonArray} />,
  document.getElementById("root")
);
