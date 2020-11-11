import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/styles.css";

import useStickyState from "./assets/stickyStateHook";
import Menu from "./Menu";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Pokedex from "./Pokedex";
import Pokerites from "./Pokerites";
import PokemonDetails from "./PokemonDetails";

export default function App() {
  const [username, setUsername] = useStickyState("username");
  // Quando colocar a API, tira essa inicialização do useState e deixa um objeto vazio {}
  const [pokerites, setPokerites] = useState([
    {
      id: 25,
      name: "pikachu",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      number: 25,
      weight: 60,
      height: 4,
      kind: "electric",
      created_at: "2020-05-25T04:48:23.630Z",
      updated_at: "2020-05-25T04:48:23.630Z"
    },
    {
      id: 10,
      name: "caterpie",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      number: 10,
      weight: 29,
      height: 3,
      kind: "bug",
      created_at: "2020-05-25T04:48:23.401Z",
      updated_at: "2020-05-25T04:48:23.401Z"
    },
    {
      id: 59,
      name: "zubat",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      number: 41,
      weight: 75,
      height: 8,
      kind: "poison;flying",
      created_at: "2020-05-25T04:48:24.285Z",
      updated_at: "2020-05-25T04:48:24.285Z"
    },
    {
      id: 21,
      name: "spearow",
      image_url:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      number: 21,
      weight: 20,
      height: 3,
      kind: "normal;flying",
      created_at: "2020-05-25T04:48:23.542Z",
      updated_at: "2020-05-25T04:48:23.542Z"
    }
  ]);
  const [popup, setPopup] = useState({
    pokemonDetails: null,
    logIn: null,
    logOut: null
  });

  function clearPopup() {
    setPopup({
      pokemonDetails: null,
      logIn: null,
      logOut: null
    });
  }

  // Pega a lista de pokemons favoritos do usuario
  // Colocar uma requisição API aqui, GET, na rota "https://pokedex20201.herokuapp.com/users/{username}"
  // Aplicar setPokerites no atributo "pokemons" do resultado da requisição, algo como setPokerites(resultado.pokemons)
  // useEffect(() => {
  //   setPokerites();
  // }, [username]);

  // Atualiza a lista de pokemons favoritos no servidor e aqui
  function addPokerite(pokemon) {
    // Verifica se o usuário está logado
    if (!username) {
      console.log("Tentativa de favoritar pokemon sem estar logado");
      setPopup({
        pokemonDetails: null,
        logIn: true,
        logOut: null
      });
      return;
    }
    console.log(`Adicionando pokemon "${pokemon.name}" aos pokerites...`);
    // Colocar uma requisição API aqui, na rota POST https://pokedex20201.herokuapp.com/users/{username}/starred/{pokemon}
    // Se der erro, colha o atributo 'msg' do corpo da resposta. Execute a seguinte linha:
    // throw msg ? msg : 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.'
    // Se não der erro execute o seguinte:
    setPokerites([...pokerites, pokemon]);
  }

  function removePokerite(pokemon) {
    // Verifica se o usuário está logado
    if (!username) {
      console.log("Tentativa de desfavoritar pokemon sem estar logado");
      setPopup({
        pokemonDetails: null,
        logIn: true,
        logOut: null
      });
      return;
    }
    console.log(`Removendo pokemon "${pokemon.name}" dos pokerites...`);
    // Colocar uma requisição API aqui, na rota DELETE https://pokedex20201.herokuapp.com/users/{username}/starred/{pokemon}
    // Se der erro, colha o atributo 'msg' do corpo da resposta. Execute a seguinte linha:
    // throw msg ? msg : 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.'
    // Se não der erro execute o seguinte:
    setPokerites(pokerites.filter((pokerite) => pokerite.id !== pokemon.id));
  }

  return (
    <BrowserRouter>
      <Menu
        username={username}
        openLogIn={() => {
          console.log(`Opened log-in page`);
          setPopup({
            pokemonDetails: null,
            logIn: true,
            logOut: null
          });
        }}
        openLogOut={() => {
          console.log(`Opened log-out page`);
          setPopup({
            pokemonDetails: null,
            logIn: null,
            logOut: true
          });
        }}
      />

      <Route exact path="/">
        <Pokedex
          pokerites={pokerites}
          addPokerite={addPokerite}
          removePokerite={removePokerite}
          selectPokemon={(pokemon) => {
            console.log(`Selected pokemon ${pokemon.name}`);
            setPopup({
              pokemonDetails: pokemon,
              logIn: null,
              logOut: null
            });
          }}
        />
      </Route>

      <Route exact path="/pokerites">
        <Pokerites
          pokerites={pokerites}
          addPokerite={addPokerite}
          removePokerite={removePokerite}
          selectPokemon={(pokemon) => {
            console.log(`Selected pokemon ${pokemon.name}`);
            setPopup({
              pokemonDetails: pokemon,
              logIn: null,
              logOut: null
            });
          }}
        />
      </Route>

      {/* Se houver popup, coloca ela */}
      {Object.values(popup).some((value) => value) ? (
        <section onClick={clearPopup} className="curtain">
          {/* Mostra o pop-up que for solicitado */}
          {popup.pokemonDetails ? (
            <PokemonDetails
              starred={pokerites.some(
                (pokerite) => pokerite.id === popup.pokemonDetails.id
              )}
              addPokerite={addPokerite}
              removePokerite={removePokerite}
              pokemon={popup.pokemonDetails}
            />
          ) : popup.logIn ? (
            <LogIn
              username={username}
              setUsername={setUsername}
              clearPopup={clearPopup}
            />
          ) : popup.logOut ? (
            <LogOut
              username={username}
              setUsername={setUsername}
              clearPopup={clearPopup}
            />
          ) : null}
        </section>
      ) : null}
    </BrowserRouter>
  );
}
