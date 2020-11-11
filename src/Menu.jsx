import React from "react";
import "./css/styles.css";
// icons
import { AiFillStar } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { Link, Route } from "react-router-dom";

export default function Menu({ username, openLogOut, openLogIn }) {
  return (
    <header>
      <Route exact path="/">
        <Link to="/pokerites">
          <div>
            <AiFillStar
              size="1.4em"
              // Previne que o usuário acesse uma página de favoritos vazia
              onClick={(event) => {
                if (!username) {
                  event.preventDefault();
                  openLogIn();
                }
              }}
              style={{ color: "var(--piss-color)" }}
            />
            <span className="on-large">pokerites</span>
          </div>
        </Link>
      </Route>
      <Route exact path="/pokerites">
        <Link to="/">
          <div>
            <HiHome size="1.4em" />
            <span className="on-large">pokedex</span>
          </div>
        </Link>
      </Route>
      {/* Retorna o ícone de logar ou de deslogar */}
      {username ? (
        <div>
          <span>{username}</span>
          <RiLogoutBoxFill size="1.4em" onClick={openLogOut} />
        </div>
      ) : (
        <RiLoginBoxFill size="1.4em" onClick={openLogIn} />
      )}
    </header>
  );
}
