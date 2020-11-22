import React, { useEffect, useState } from "react";
import Pokemon from "./PokemonBox";
import "./css/styles.css";
import axios from "axios";

import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { ImSearch } from "react-icons/im";

export default function Pokedex({
  selectPokemon,
  pokerites,
  addPokerite,
  removePokerite
}) {
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(page);
  const [pokemons, setPokemons] = useState({});
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://pokedex20201.herokuapp.com/pokemons")
      .then((result) => {
        setPokemons(result.data);
      })
      .catch((result) => {
        alert("Erro no servidor");
      });
  }, []);

  function jumpToPage(target) {
    // Rejeita inputs vazios
    if (!inputPage) {
      setInputPage(page);
      return;
    }
    console.log(`Buscando a página ${target}...`);
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${target}`)
      .then((result) => {
        if (result.data.size <= 0) setInputPage(page);
        else {
          setPage(target);
          setInputPage(target);
          setPokemons(result.data);
        }
      })
      .catch((result) => {
        alert("Erro no servidor");
      });
  }

  function searchPokemon(pokemon) {
    // Rejeita inputs vazios
    if (!pokemon) return;
    console.log(`Searching for pokemon ${pokemon}...`);
    axios
      .get(
        `https://pokedex20201.herokuapp.com/pokemons/${pokemon.toLowerCase()}`
      )
      .then((result) => {
        selectPokemon(result.data);
      })
      .catch(() => {
        // Ativa a animação de inválido
        const search_bar = document
          .getElementById("search-bar")
          .querySelector("input");
        search_bar.classList = ["invalid"];
        setTimeout(() => {
          search_bar.classList = [];
        }, 1000);
      });
  }

  return (
    <div>
      <div className="page-menu">
        {/* a div vazia é o fundo do menu */}
        <div></div>
        <TiChevronLeft
          size="1.4em"
          onClick={() => pokemons.prev_page && jumpToPage(page - 1)}
          // esconde se não existir essa opção
          data-active={pokemons.prev_page ? true : false}
        />
        <input
          type="text"
          maxLength="3"
          value={inputPage}
          onChange={(e) => setInputPage(parseInt(e.target.value, 10) || "")}
          onKeyPress={(e) => e.key === "Enter" && jumpToPage(inputPage)}
        />
        <TiChevronRight
          size="1.4em"
          onClick={() => pokemons.next_page && jumpToPage(page + 1)}
          // esconde se não existir essa opção
          data-active={pokemons.next_page ? true : false}
        />
      </div>
      <div id="search-bar">
        <ImSearch size="2rem" />
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          spellCheck="false"
          onKeyPress={(e) => e.key === "Enter" && searchPokemon(inputSearch)}
          placeholder="Procurar"
        />
      </div>
      <main>
        {/* {console.log(page)} */}
        {pokemons.data ? (
          pokemons.data.map((pokemon) => {
            return (
              <Pokemon
                pokemon={pokemon}
                starred={pokerites.some(
                  (pokerite) => pokerite.id === pokemon.id
                )}
                addPokerite={() => addPokerite(pokemon)}
                removePokerite={() => removePokerite(pokemon)}
                selectSelf={() => selectPokemon(pokemon)}
                key={pokemon.id}
              />
            );
          })
        ) : (
          <span className="carregando">Carregando . . . </span>
        )}
      </main>
    </div>
  );
}
