import React, { useEffect, useState } from "react";
import Pokemon from "./PokemonBox";
import "./css/styles.css";
import axios from "axios";

import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

export default function Pokedex({
  selectPokemon,
  pokerites,
  addPokerite,
  removePokerite
}) {
  // Quando colocar a API, tira essa inicialização do useState e deixa um objeto vazio {}
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(page);
  const [pokemons, setPokemons] = useState({});

  // Pega a lista de pokemons da primeira pagina
  // (feito) Colocar uma API aqui, GET, na rota "https://pokedex20201.herokuapp.com/pokemons"
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
    console.log(`Buscando a página ${target}...`);
    axios
      .get(`https://pokedex20201.herokuapp.com/pokemons?page=${target}`)
      .then((result) => {
        if (result.sizze <= 0) setInputPage(page);
        else {
          setPage(target);
          setPokemons(result.data);
        }
      })
      .catch((result) => {
        alert("Erro no servidor");
      });
    // (feito) Colocar uma API aqui, GET, na rota https://pokedex20201.herokuapp.com/pokemons?page=${target}``, colocar o resultado nessa variacvel result. Pode apagar essa inicialização padrão, ela só existe por enquanto que não tem a requisição.
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
          onChange={(e) =>
            setInputPage(parseInt(e.target.value, 10) || inputPage)
          }
          onKeyPress={(e) => e.key === "Enter" && jumpToPage(inputPage)}
        />
        <TiChevronRight
          size="1.4em"
          onClick={() => pokemons.next_page && jumpToPage(page + 1)}
          // esconde se não existir essa opção
          data-active={pokemons.next_page ? true : false}
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
                addPokerite={addPokerite}
                removePokerite={removePokerite}
                selectSelf={() => selectPokemon(pokemon)}
                key={pokemon.id}
              />
            );
          })
        ) : (
          <span>carregando... </span>
        )}
      </main>
    </div>
  );
}
