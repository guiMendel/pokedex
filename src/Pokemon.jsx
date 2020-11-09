import React from "react";
import "./styles.css";

// icons
import { AiOutlineStar } from "react-icons/ai";

export default function Pokemon({ name, image_url, kind }) {
  return (
    <div className="pokemon">
      <div>
        <img src={image_url} alt="" />
      </div>
      <AiOutlineStar size="3rem" />
      <span>{name}</span>
    </div>
  );
}
