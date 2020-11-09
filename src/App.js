import React from "react";
import Menu from "./Menu";
import Pokedex from "./Pokedex";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Menu />
      <Pokedex />
    </div>
  );
}
