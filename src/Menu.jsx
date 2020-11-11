import React from "react";
import "./css/styles.css";
// icons
import { AiFillStar, AiFillHome } from "react-icons/ai";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { Link, Route } from "react-router-dom";

export default function Menu({ username, openLogOut, openLogIn }) {
  return (
    <header>
      <Route exact path="/">
        <Link to="/pokerites">
          <AiFillStar
            size="2rem"
            // Previne que o usuário acesse uma página de favoritos vazia
            onClick={(event) => {
              if (!username) {
                event.preventDefault();
                openLogIn();
              }
            }}
          />
        </Link>
      </Route>
      <Route exact path="/pokerites">
        <Link to="/">
          <AiFillHome size="2rem" />
        </Link>
      </Route>
      {/* Retorna o ícone de logar ou de deslogar */}
      {username ? (
        <div>
          <span>{username}</span>
          <RiLogoutBoxFill size="2rem" onClick={openLogOut} />
        </div>
      ) : (
        <RiLoginBoxFill size="2rem" onClick={openLogIn} />
      )}
    </header>
  );
}
