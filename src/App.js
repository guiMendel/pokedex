import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Pokedex from "./Pokedex";
import PokemonDetails from "./PokemonDetails";
import "./css/styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" component={Pokedex} />
      <Route path="/:pokemon_id" component={PokemonDetails} />
    </BrowserRouter>
  );
}
