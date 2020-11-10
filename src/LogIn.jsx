import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/styles.css";
import "./css/pop-up.css";

export default function LogIn() {
  const [input, setInput] = useState("");
  const [newUser, setNewUser] = useState("");

  function getUser() {
    // Fazer uma requisição GET na rota https://pokedex20201.herokuapp.com/users/{input}. Verificar se houve erro. Se sim, aplicar setNewUser(input), para que a página pergunte ao usuário se ele deseja criar esse novo usuário.
    // Enquanto você não aplica as APIs, já faz o set direto, mas depois que voê fizer, deixe ele só quando der erro.
    setNewUser(input);
  }

  function createUser() {
    // Fazer uma requisição POST na rota https://pokedex20201.herokuapp.com/users, com uma body {username=newUser}
    console.log(`Enviando requisição para criar o usuário ${newUser}...`);
  }

  return (
    <Link to="/" className="curtain">
      <div className="pop-up" onClick={(e) => e.preventDefault()}>
        <h1>Log In</h1>
        <label htmlFor="username" name="username">
          Nome de Usuário
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={getUser}>Enviar</button>
        {newUser ? (
          <section>
            <hr />
            <span>
              Não encontramos o usuário <strong>"{newUser}"</strong>.<br />
              Deseja criar um novo com esse nome?
            </span>
            <button onClick={createUser}>Sim</button>
            <button
              style={{ background: "var(--red-color)" }}
              onClick={() => setNewUser("")}
            >
              Cancelar
            </button>
          </section>
        ) : null}
      </div>
    </Link>
  );
}
