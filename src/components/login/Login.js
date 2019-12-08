import React, { useState } from 'react';
//Usado para disparar um action
import { useDispatch } from 'react-redux';
//Usado para selecionar um estado do redux
import { useSelector } from 'react-redux'

import './estilo.css';
import { Form, Input } from '@rocketseat/unform'
import api from '../../services/api';
//Importando a action
import { signInRequest } from '../../store/modules/auth/actions';

export default function Login({ history }) {
  // const [email, setEmail] = useState();
  // const [senha, setSenha] = useState();
  const [erro, setErro] = useState(false);

  // async function Logar(e) {
  //   e.preventDefault()
  //   try {
  //     const response = await api.post('/adminSession', {
  //       email,
  //       senha,
  //     })
  //     const { token } = response.data;
  //     await localStorage.setItem('@SportAtletas:token', token);
  //     return history.push('/dashboard')
  //   } catch (err) {
  //     console.log(err)
  //     setErro(true)
  //   }
  // }
  // function loginHandler(e) {
  //   setEmail(e.target.value)
  // }

  // function inputHandler(e) {
  //   setSenha(e.target.value)
  //   setErro(false)
  // }
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)


  function loginHandler({ email, senha }) {
    //Vai disparar a action 
    dispatch(signInRequest({ email, senha }))

  }

  return (
    <Form onSubmit={loginHandler} className="box">
      <div className={erro ? "loginErro" : "login"}>
        <Input
          className=" inputLogin"
          type="email"
          placeholder="Digite seu Email"
          name='email'
        />

        <Input
          className="inputLogin"
          type="password"
          placeholder="Digite a senha"
          name='senha'
        />
        <button className="button" type='submit'>{loading ? 'Logando...' : 'ENTRAR'}</button>
      </div>
    </Form>
  );
}

