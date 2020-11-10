import React from "react";
import "./css/styles.css";
// icons
import { AiFillStar } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <Link to="#">
        <AiFillStar size="2rem" />
      </Link>
      <Link to="/log-in">
        <RiLoginBoxFill size="2rem" />
      </Link>
    </header>
  );
}
