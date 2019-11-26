import React, { useState } from 'react';
import './estilo.css';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [erro, setErro] = useState(false);

  async function Logar(e) {
    e.preventDefault()
    try {
      const response = await api.post('/adminSession', {
        email,
        senha,
      })
      const { token } = response.data;
      await localStorage.setItem('@SportAtletas:token', token);
      return history.push('/dashboard')
    } catch (err) {
      console.log(err)
      setErro(true)
    }
  }
  function loginHandler(e) {
    setEmail(e.target.value)
  }

  function inputHandler(e) {
    setSenha(e.target.value)
    setErro(false)
  }
  return (
    <div className="box">
      <div className={erro ? "loginErro" : "login"}>
        <input
          className=" inputLogin"
          type="email"
          placeholder="Digite seu Email"
          onChange={loginHandler}
        />

        <input
          className="inputLogin"
          type="password"
          placeholder="Digite a senha"
          onChange={inputHandler}
        />
        <button className="button" onClick={Logar}>ENTRAR</button>
      </div>
    </div>
  );
}
