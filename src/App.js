import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Pokedex from "./Pokedex";
import PokemonDetails from "./PokemonDetails";
import "./css/styles.css";
import LogIn from "./LogIn";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" component={Pokedex} />
      <Route path="/pokemon/:pokemon" component={PokemonDetails} />
      <Route path="/log-in" component={LogIn} />
    </BrowserRouter>
  );
}
