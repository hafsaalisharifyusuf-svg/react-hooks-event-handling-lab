import React from "react";
import ReactDOM from "react-dom";
import Keypad from "./components/Keypad";
import EyesOnMe from "./components/EyesOnMe";

ReactDOM.render(
  <div style={{ padding: "20px" }}>
    <h1>Event Handling Lab</h1>

    <h2>Keypad</h2>
    <Keypad />

    <h2>Eyes on Me</h2>
    <EyesOnMe />
  </div>,
  document.getElementById("root")
);