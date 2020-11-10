import React from "react";
import "./css/styles.css";
// icons
import { AiFillStar } from "react-icons/ai";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Menu({ username }) {
  return (
    <header>
      <Link to="#">
        <AiFillStar size="2rem" />
      </Link>
      {/* Retorna o ícone de logar ou de deslogar */}
      {username ? (
        <div>
          <span>{username}</span>
          <Link to="/log-out">
            <RiLogoutBoxFill size="2rem" />
          </Link>
        </div>
      ) : (
        <Link to="/log-in">
          <RiLoginBoxFill size="2rem" />
        </Link>
      )}
    </header>
  );
}
