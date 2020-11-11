import React from "react";
import Pokemon from "./PokemonBox";
import "./css/styles.css";

// Pokemon + Favorites = Pokerites (genial demais)
export default function Pokerites({
  pokerites,
  addPokerite,
  removePokerite,
  selectPokemon
}) {
  return (
    <main>
      {pokerites.length > 0 ? (
        pokerites.map((pokemon) => {
          return (
            <Pokemon
              pokemon={pokemon}
              starred={true}
              addPokerite={addPokerite}
              removePokerite={removePokerite}
              key={pokemon.id}
              selectSelf={() => selectPokemon(pokemon)}
            />
          );
        })
      ) : (
        <h2>Você ainda não salvou nenhum pokerite :(</h2>
      )}
    </main>
  );
}
