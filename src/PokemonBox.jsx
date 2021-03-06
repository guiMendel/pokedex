import React from "react";
import "./css/styles.css";

// cores dos tipos de pokemon
import kind_color, { get_kind } from "./assets/color-relations";

// icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Pokemon({
  pokemon,
  starred,
  addPokerite,
  removePokerite,
  selectSelf
}) {
  function switchStar(event) {
    if (starred) removePokerite();
    else addPokerite();
    event.stopPropagation();
  }

  return (
    <div className="pokemon">
      {starred ? (
        <AiFillStar size="2em" className="pokerite" onClick={switchStar} />
      ) : (
        <AiOutlineStar size="2em" onClick={switchStar} />
      )}
      <div
        style={{
          "--color1": kind_color[get_kind(pokemon.kind, 0)],
          "--color2": kind_color[get_kind(pokemon.kind, 1)]
        }}
        onClick={selectSelf}
      >
        <img src={pokemon.image_url} alt="" />
      </div>
      <span>{pokemon.name}</span>
    </div>
  );
}
