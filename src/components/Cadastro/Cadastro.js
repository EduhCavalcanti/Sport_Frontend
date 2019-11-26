import React from 'react';
import './cadastro.css';

import Inputmodal from './Inputsmodal'

export default function Login(props) {

  return (
    <div className="boxtudo">
      <h1>CADASTRO DE MODALIDADE</h1>

      <div className="boxdentro">
        <Inputmodal {...props} />
      </div>


    </div>
  );
}
