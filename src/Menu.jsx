import React from "react";
import "./styles.css";
// icons
import { AiFillStar } from "react-icons/ai";
import { RiLoginBoxFill } from "react-icons/ri";

export default function Menu() {
  return (
    <header>
      <AiFillStar size="2rem" />
      <RiLoginBoxFill size="2rem" />
    </header>
  );
}
