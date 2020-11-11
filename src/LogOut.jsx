import React, { useEffect } from "react";
import "./css/styles.css";
import "./css/pop-up.css";

export default function LogOut({ username, setUsername, clearPopup }) {
  useEffect(() => {
    if (!username) clearPopup();
  }, [username, clearPopup]);

  return (
    <div className="pop-up" onClick={(e) => e.stopPropagation()}>
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
      <button style={{ background: "var(--red-color)" }} onClick={clearPopup}>
        Cancelar
      </button>
    </div>
  );
}
