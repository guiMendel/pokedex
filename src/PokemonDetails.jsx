import React from "react";
import "./css/styles.css";
import "./css/pop-up.css";

// icons
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaWeightHanging } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";

// cores dos tipos de pokemon
import kind_color from "./assets/color-relations";

export default function PokemonDetails({
  starred,
  requested_pokemon,
  addPokerite,
  removePokerite,
  pokemon
}) {
  function switchStar(event) {
    if (starred) removePokerite(pokemon);
    else addPokerite(pokemon);
    // event.stopPropagation();
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {starred ? (
        <AiFillStar size="5rem" className="pokerite" onClick={switchStar} />
      ) : (
        <AiOutlineStar size="5rem" onClick={switchStar} />
      )}
      <div className="pop-up">
        {console.log(requested_pokemon)}
        <h1>
          <span>{pokemon.name}</span>
          <small>p#{pokemon.number}</small>
        </h1>
        <img src={pokemon.image_url} alt="" />
        <div>
          {pokemon.kind.split(";").map((kind) => {
            return (
              <span
                key={kind}
                style={{
                  "--color": kind_color[kind]
                }}
              >
                {kind}
              </span>
            );
          })}
        </div>
        <span>
          <FaWeightHanging size="1em" />
          {pokemon.weight / 10} kg
        </span>
        <span>
          <GiBodyHeight size="1em" />
          {pokemon.height / 10} m
        </span>
      </div>
    </div>
  );
}
