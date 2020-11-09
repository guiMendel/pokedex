import React from "react";
import "./styles.css";

export default function Pokemon({ name, image_url, kind }) {
  return (
    <div>
      <img src={image_url} alt="" />
      <span>{name}</span>
    </div>
  );
}
