import React, { useEffect, useState } from "react";
import "./css/styles.css";
import "./css/pop-up.css";
import axios from "axios";
import { goBack } from "history";

export default function LogIn({ username, setUsername, clearPopup }) {
  const [input, setInput] = useState("");
  const [requestedUsername, setRequestedUsername] = useState("");

  function getUser() {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${input}`)
      .then((result) => {
        setUsername(input);
        clearPopup();
      })
      .catch((result) => {
        setRequestedUsername(input);
      });
  }

  function createUser() {
    console.log(
      `Enviando requisição para criar o usuário ${requestedUsername}...`
    );
    axios
      .post(`https://pokedex20201.herokuapp.com/users`, {
        username: requestedUsername
      })
      .then((result) => {
        setUsername(requestedUsername);
      })
      .catch((result) => {
        alert(
          "Não foi possível se conectar com o servidor.\nPor favor, tente novamente mais tarde."
        );
      });
  }

  useEffect(() => {
    if (username) clearPopup();
  }, [username, clearPopup]);

  return (
    <div className="pop-up" onClick={(e) => e.stopPropagation()}>
      <h1>Log In</h1>
      <label htmlFor="username" name="username">
        Nome de Usuário
      </label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && getUser()}
      />
      <button onClick={getUser}>Enviar</button>
      {requestedUsername ? (
        <section>
          <hr />
          <span>
            Não encontramos o usuário <strong>"{requestedUsername}"</strong>.
            <br />
            Deseja criar um novo com esse nome?
          </span>
          <button onClick={createUser}>Sim</button>
          <button
            style={{ background: "var(--red-color)" }}
            onClick={() => setRequestedUsername("")}
          >
            Cancelar
          </button>
        </section>
      ) : null}
    </div>
  );
}
