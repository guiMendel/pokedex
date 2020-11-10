import React from "react";
import "./css/styles.css";

// cores dos tipos de pokemon
import kind_color, { get_kind } from "./color-relations";

// icons
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Pokemon({ name, image_url, kind }) {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="pokemon">
        <div
          style={{
            "--color1": kind_color[get_kind(kind, 0)],
            "--color2": kind_color[get_kind(kind, 1)]
          }}
        >
          <img src={image_url} alt="" />
        </div>
        <AiOutlineStar size="3rem" />
        <span>{name}</span>
      </div>
    </Link>
  );
}
