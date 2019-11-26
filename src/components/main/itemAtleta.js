import React, { useState } from 'react';
import edit from '../../assets/edit.png';
import { Form, Input, FileInput } from '@rocketseat/unform';
import fechar from '../../assets/icon-x.png';


export default function ItemAtleta({ atleta }) {
  const [estrutura, setEstrutura] = useState(false);

  function handleSubmit() {

  }


  function openHandler() {
    setEstrutura(true);
  };

  function closeHandler() {
    setEstrutura(false);
  };


  return (
    <>
      {estrutura ?

        <div className="atletaInfo">
          <div className="dentroInfo">
            <img className="imgAtle2" src={atleta.url} />

            <Form initialData={atleta} onSubmit={handleSubmit}>

              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="nome" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="pai" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="mae" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="nacionalidade" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="categoria" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="natural" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="rua" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="bairro" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="cidade" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="estado" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="cep" type="text" placeholder="Digite nome" required />
              <label htmlFor="nome">Nome</label>
              <Input className="inputEdit" name="fone" type="text" placeholder="Digite nome" required />
              <label htmlFor="nascimento">nascimento</label>
              <Input className="inputEdit" name="data_nasc" placeholder="Digite nome" required />
              <label htmlFor="email">email</label>
              <Input className="inputEdit" name="email" placeholder="Digite nome" required />
              <label htmlFor="cpf">cpf</label>
              <Input className="inputEdit" name="cpf" placeholder="Digite nome" required />
              <label htmlFor="rg">Rg</label>
              <Input className="inputEdit" name="rg" placeholder="Digite nome" required />
              <label htmlFor="escolaridade">escolaridade</label>
              <Input className="inputEdit" name="escolaridade" placeholder="Digite nome" required />
              <label htmlFor="n">numero</label>
              <Input className="inputEdit" name="n" placeholder="Digite nome" required />

              <button className="btnForm" type="submit">Atualizar dados</button>
            </Form>
          </div>

          <img src={fechar} alt="fechar" className="imgFechar" onClick={closeHandler} />
        </div> :

        <div onClick={openHandler} className="nomeAtleta">

          <div className="imgNome">
            <img className="imgAtle" src={atleta.url} />
            <p className="nome">Nome: {atleta.nome}</p>
          </div>

          <p className="nome">Categoria: {atleta.categoria}</p>
          <p className="nome">Cpf: {atleta.cpf}</p>
          <img className="imgEdit" src={edit} alt="edicao" />
        </div>
      }
    </>

  );
}
