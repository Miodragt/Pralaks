import React from "react";
import ReactDOM from "react-dom";
import Paralks from "./paralaks";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Upotreba efekta paralaksa</h2>
      <Paralks />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
