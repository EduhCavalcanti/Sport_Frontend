import React from 'react';
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { singOut } from '../../store/modules/auth/actions';


import './style.css';

export default function Header({ history }) {
  const dispatch = useDispatch();
  // const signed = useSelector(state => state.auth.signed);
  
  function inicoHandler() {
    history.push('/dashboard')
  }
  function handlerout(){
    localStorage.removeItem('persist:Sport');
    dispatch(singOut());
    history.push('/');
  };

  return (
    <>
      <header>
        <img onClick={inicoHandler} src={require('./logo_sport.png')} alt="sport" />
        <div className="btn">
          <button onClick={handlerout} className="buttonSair">Sair</button>
        </div>
      </header>
    </>
  )
};
