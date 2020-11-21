import React, { useEffect, useState } from "react";
import "./css/styles.css";
import "./css/pop-up.css";
import axios from "axios";

export default function LogIn({ username, setUsername, clearPopup }) {
  const [input, setInput] = useState("");
  const [requestedUsername, setRequestedUsername] = useState("");

  function getUser() {
    axios
      .get(`https://pokedex20201.herokuapp.com/users/${input}`)
      .then((result) => {
        setUsername(input);
        history.goBack();
      })
      .catch((result) => {
        setRequestedUsername(input);
      });
    //(feito) Fazer uma requisição GET na rota https://pokedex20201.herokuapp.com/users/{input}. Verificar se houve erro. Se sim, aplicar setRequestedUsername(input), para que a página pergunte ao usuário se ele deseja criar esse novo usuário.
    //(feito) Enquanto você não aplica as APIs, já faz o set direto, mas depois que voê fizer, deixe ele só quando der erro.
    //(feito)Se não der erro, coloca para chamar a função setUsername(input), como no comentário

    // Se houver erro:
    //setRequestedUsername(input);
    // Se não houver erro:
    // setUsername(input)
    // history.goBack();
  }

  function createUser() {
    //(feito) Fazer uma requisição POST na rota https://pokedex20201.herokuapp.com/users, com uma body {username=requestedUsername}
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
    // Somente permita a chamada da função setUsername se a requisição POST não retornar erro. Se der erro, mostre a mensagem de erro.

    // Se não houver erro:
    //setUsername(requestedUsername);
    // history.goBack();
    // Se houver erro:
    // alert(
    //   "Não foi possível se conectar com o servidor.\nPor favor, tente novamente mais tarde."
    // );
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
