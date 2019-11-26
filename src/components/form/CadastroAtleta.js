import React from 'react';
import '../Cadastro/cadastro.css';
import InputsAtleta from './Inputs';


export default function Form(props) {


  return (
    <div className="boxtudo">
      <h1>CADASTRO DE ATLETAS</h1>

      <div className="boxdentro alterar">
        <InputsAtleta {...props} />
      </div>

    </div>
  );
}
