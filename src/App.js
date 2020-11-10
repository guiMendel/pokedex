import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Menu from "./Menu";
import Pokedex from "./Pokedex";
import PokemonDetails from "./PokemonDetails";
import "./css/styles.css";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import useStickyState from "./assets/stickyStateHook";

export default function App() {
  const [username, setUsername] = useStickyState("username");
  return (
    <BrowserRouter>
      <Menu username={username} />
      <Route path="/" component={Pokedex} />
      <Route path="/pokemon/:pokemon" component={PokemonDetails} />
      <Route
        path="/log-in"
        render={(props) => (
          <LogIn {...props} username={username} setUsername={setUsername} />
        )}
      />
      <Route
        path="/log-out"
        render={(props) => (
          <LogOut {...props} username={username} setUsername={setUsername} />
        )}
      />
    </BrowserRouter>
  );
}
