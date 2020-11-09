import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import "./styles.css";

export default function Pokedex() {
  const [page, setPage] = useState({});

  useEffect(() => {
    setPage({
      data: [
        {
          id: 1,
          name: "bulbasaur",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          number: 1,
          weight: 69,
          height: 7,
          kind: "grass;poison",
          created_at: "2020-05-25T04:48:23.225Z",
          updated_at: "2020-05-25T04:48:23.225Z"
        },
        {
          id: 2,
          name: "ivysaur",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          number: 2,
          weight: 130,
          height: 10,
          kind: "grass;poison",
          created_at: "2020-05-25T04:48:23.261Z",
          updated_at: "2020-05-25T04:48:23.261Z"
        },
        {
          id: 3,
          name: "venusaur",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
          number: 3,
          weight: 1000,
          height: 20,
          kind: "grass;poison",
          created_at: "2020-05-25T04:48:23.306Z",
          updated_at: "2020-05-25T04:48:23.306Z"
        },
        {
          id: 4,
          name: "charmander",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
          number: 4,
          weight: 85,
          height: 6,
          kind: "fire",
          created_at: "2020-05-25T04:48:23.318Z",
          updated_at: "2020-05-25T04:48:23.318Z"
        },
        {
          id: 5,
          name: "charmeleon",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
          number: 5,
          weight: 190,
          height: 11,
          kind: "fire",
          created_at: "2020-05-25T04:48:23.326Z",
          updated_at: "2020-05-25T04:48:23.326Z"
        },
        {
          id: 6,
          name: "charizard",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
          number: 6,
          weight: 905,
          height: 17,
          kind: "fire;flying",
          created_at: "2020-05-25T04:48:23.343Z",
          updated_at: "2020-05-25T04:48:23.343Z"
        },
        {
          id: 7,
          name: "squirtle",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
          number: 7,
          weight: 90,
          height: 5,
          kind: "water",
          created_at: "2020-05-25T04:48:23.366Z",
          updated_at: "2020-05-25T04:48:23.366Z"
        },
        {
          id: 8,
          name: "wartortle",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
          number: 8,
          weight: 225,
          height: 10,
          kind: "water",
          created_at: "2020-05-25T04:48:23.377Z",
          updated_at: "2020-05-25T04:48:23.377Z"
        },
        {
          id: 9,
          name: "blastoise",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
          number: 9,
          weight: 855,
          height: 16,
          kind: "water",
          created_at: "2020-05-25T04:48:23.393Z",
          updated_at: "2020-05-25T04:48:23.393Z"
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
          id: 11,
          name: "metapod",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
          number: 11,
          weight: 99,
          height: 7,
          kind: "bug",
          created_at: "2020-05-25T04:48:23.414Z",
          updated_at: "2020-05-25T04:48:23.414Z"
        },
        {
          id: 12,
          name: "butterfree",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
          number: 12,
          weight: 320,
          height: 11,
          kind: "flying;bug",
          created_at: "2020-05-25T04:48:23.423Z",
          updated_at: "2020-05-25T04:48:23.423Z"
        },
        {
          id: 13,
          name: "weedle",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
          number: 13,
          weight: 32,
          height: 3,
          kind: "poison;bug",
          created_at: "2020-05-25T04:48:23.435Z",
          updated_at: "2020-05-25T04:48:23.435Z"
        },
        {
          id: 14,
          name: "kakuna",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
          number: 14,
          weight: 100,
          height: 6,
          kind: "bug;poison",
          created_at: "2020-05-25T04:48:23.451Z",
          updated_at: "2020-05-25T04:48:23.451Z"
        },
        {
          id: 15,
          name: "beedrill",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
          number: 15,
          weight: 295,
          height: 10,
          kind: "bug;poison",
          created_at: "2020-05-25T04:48:23.461Z",
          updated_at: "2020-05-25T04:48:23.461Z"
        },
        {
          id: 16,
          name: "pidgey",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
          number: 16,
          weight: 18,
          height: 3,
          kind: "normal;flying",
          created_at: "2020-05-25T04:48:23.475Z",
          updated_at: "2020-05-25T04:48:23.475Z"
        },
        {
          id: 17,
          name: "pidgeotto",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
          number: 17,
          weight: 300,
          height: 11,
          kind: "normal;flying",
          created_at: "2020-05-25T04:48:23.486Z",
          updated_at: "2020-05-25T04:48:23.486Z"
        },
        {
          id: 18,
          name: "pidgeot",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
          number: 18,
          weight: 395,
          height: 15,
          kind: "flying;normal",
          created_at: "2020-05-25T04:48:23.496Z",
          updated_at: "2020-05-25T04:48:23.496Z"
        },
        {
          id: 19,
          name: "rattata",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
          number: 19,
          weight: 35,
          height: 3,
          kind: "normal",
          created_at: "2020-05-25T04:48:23.503Z",
          updated_at: "2020-05-25T04:48:23.503Z"
        },
        {
          id: 20,
          name: "raticate",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
          number: 20,
          weight: 185,
          height: 7,
          kind: "normal",
          created_at: "2020-05-25T04:48:23.522Z",
          updated_at: "2020-05-25T04:48:23.522Z"
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
        },
        {
          id: 22,
          name: "fearow",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
          number: 22,
          weight: 380,
          height: 12,
          kind: "normal;flying",
          created_at: "2020-05-25T04:48:23.568Z",
          updated_at: "2020-05-25T04:48:23.568Z"
        },
        {
          id: 23,
          name: "ekans",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
          number: 23,
          weight: 69,
          height: 20,
          kind: "poison",
          created_at: "2020-05-25T04:48:23.589Z",
          updated_at: "2020-05-25T04:48:23.589Z"
        },
        {
          id: 24,
          name: "arbok",
          image_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
          number: 24,
          weight: 650,
          height: 35,
          kind: "poison",
          created_at: "2020-05-25T04:48:23.615Z",
          updated_at: "2020-05-25T04:48:23.615Z"
        },
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
        }
      ],
      size: 25,
      next_page: 2,
      prev_page: null
    });
  }, []);

  return (
    <main>
      {page.data.map((pokemon) => {
        return <Pokemon {...pokemon} />;
      })}
    </main>
  );
}
