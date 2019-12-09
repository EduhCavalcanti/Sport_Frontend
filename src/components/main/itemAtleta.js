import React, { useState } from 'react';
import edit from '../../assets/edit.png';
import { Form, Input, FileInput } from '@rocketseat/unform';
import fechar from '../../assets/icon-x.png';


export default function ItemAtleta({ atleta }) {
  const [estrutura, setEstrutura] = useState(false);

  function handleSubmit(data) {
    console.tron.log(data)
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

            <Form initialData={atleta} onSubmit={handleSubmit} className="formedit">

              <label htmlFor="nome">Nome do atleta
              <Input className="inputEdit" name="nome" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Nome do pai
              <Input className="inputEdit" name="pai" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Nome da mãe
              <Input className="inputEdit" name="mae" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Nacionalidade
              <Input className="inputEdit" name="nacionalidade" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Categoria
              <Input className="inputEdit" name="categoria" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Natural
              <Input className="inputEdit" name="natural" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Rua
              <Input className="inputEdit" name="rua" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="n">Numero (Complemento)
              <Input className="inputEdit" name="n" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Bairro
              <Input className="inputEdit" name="bairro" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Cidade
              <Input className="inputEdit" name="cidade" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Estado
              <Input className="inputEdit" name="estado" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Cep
              <Input className="inputEdit" name="cep" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nome">Fone
              <Input className="inputEdit" name="fone" type="text" placeholder="Digite nome" required />
              </label>
              <label htmlFor="nascimento">nascimento
              <Input className="inputEdit" name="data_nasc" placeholder="Digite nome" required />
              </label>
              <label htmlFor="email">email
              <Input className="inputEdit" name="email" placeholder="Digite nome" required />
              </label>
              <label htmlFor="cpf"> Indentificação CPF
              <Input className="inputEdit" name="cpf" placeholder="Digite nome" required />
              </label>
              <label htmlFor="rg">Indentificação RG
              <Input className="inputEdit" name="rg" placeholder="Digite nome" required />
              </label>
              <label htmlFor="escolaridade">escolaridade
              <Input className="inputEdit" name="escolaridade" placeholder="Digite nome" required />
              </label>


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
