import React from 'react';
import './style.css'

export default function Header({ history }) {

  function inicoHandler() {
    history.push('/dashboard')
  }

  return (
    <>
      <header>
        <img onClick={inicoHandler} src={require('./logo_sport.png')} alt="sport" />
        <div className="btn">
          <button className="buttonSair">Sair</button>
        </div>
      </header>
    </>
  )
};
