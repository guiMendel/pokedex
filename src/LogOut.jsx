import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./css/styles.css";
import "./css/pop-up.css";

export default function LogOut({ username, setUsername }) {
  const history = useHistory();

  return (
    <Link to="/" className="curtain">
      {username ? null : <Redirect to="/" />}
      <div className="pop-up" onClick={(e) => e.preventDefault()}>
        <h1>Log Out</h1>
        <span>
          Deseja sair da conta de{" "}
          <strong>{window.localStorage.getItem("username")}</strong>?
        </span>
        <button
          onClick={() => {
            setUsername(null);
          }}
        >
          Sim
        </button>
        <button
          style={{ background: "var(--red-color)" }}
          onClick={history.goBack}
        >
          Cancelar
        </button>
      </div>
    </Link>
  );
}
