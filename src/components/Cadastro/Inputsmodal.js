import React, { useMemo, useState } from 'react';

import api from '../../services/api';
import camera from './../Cadastro/camera.svg'

export default function Inputsmodal({ history }) {

  const [foto, setFoto] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmacao, setConfirmacao] = useState();
  const [nome, setNome] = useState();
  const [modalidade, setModalidade] = useState();
  const [fone, setFone] = useState();
  const [rg, setRg] = useState();
  const [cpf, setCpf] = useState();
  const [erro, setErro] = useState();
  const [senhaerr, setSenhaerr] = useState();

  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto]);

  async function Logar(e) {
    e.preventDefault()

    if (!email || !foto || !cpf || !rg || !senha) {
      return setErro('Preencha o todos os campos')
    }
    setSenhaerr('')
    if (senha !== confirmacao) {
      return setSenhaerr('Senha não confere')
    }
    setSenhaerr('')

    const data = new FormData();
    data.append('foto', foto);
    data.append('email', email);
    data.append('senha', senha);
    data.append('nome', nome);
    data.append('modalidade', modalidade);
    data.append('fone', fone);
    data.append('rg', rg);
    data.append('cpf', cpf);

    try {
      await api.post('/adminfoto', data, {
        nome,
        email,
        senha,
        modalidade,
        fone,
        cpf,
        rg,
        photo_name: foto
      })

      /* const { token } = response.data;
      await localStorage.setItem('@SportAtletas:token', token); */

      history.push('/dashboard')
    } catch (err) {
      console.log(err)
      setErro('Algo de errado aconteceu com seu cadastro')
    }

  }
  function nomeHandler(e) {
    setNome(e.target.value)
  }
  function emailHandler(e) {
    setEmail(e.target.value)
  }
  function senhaHandler(e) {
    setSenha(e.target.value)
  }
  function confHandler(e) {
    setConfirmacao(e.target.value)
  }
  function modalidadeHandler(e) {
    setModalidade(e.target.value)
  }
  function foneHandler(e) {
    setFone(e.target.value)
  }
  function rgHandler(e) {
    setRg(e.target.value)
  }
  function cpfHandler(e) {
    setCpf(e.target.value)
  }
  return (
    <>
      <label
        id="foto"
        style={{ backgroundImage: `url(${preview})` }}
        className={foto ? 'has-foto' : ''}
      >
        <input type="file" onChange={e => setFoto(e.target.files[0])} />
        <img src={camera} alt="select img" />
      </label>

      <div className="divinput">
        <label htmlFor="">NOME</label>
        <input className="inputLogin2 inputLogin "
          type="text"
          placeholder="Digite seu Nome"
          onChange={nomeHandler}

        />
      </div>

      <div className="divinput">
        <label htmlFor="">EMAIL</label>
        <input className="inputLogin2 inputLogin"
          type="text"
          placeholder="Digite seu Email"
          onChange={emailHandler}

        />
      </div>

      <div className="divinput">
        <label htmlFor="">SENHA</label>
        <input className="inputLogin2 inputLogin"
          type="password"
          placeholder="Digite seu Senha"
          onChange={senhaHandler}

        />
      </div>

      <div className="divinput">
        <label htmlFor="">CONFIRME SENHA</label>
        <input className="inputLogin2 inputLogin"
          type="password"
          placeholder="Confirme sua senha"
          onChange={confHandler}

        />
        {senhaerr && <p>{senhaerr}</p>}
      </div>

      <div className="divinput">
        <label htmlFor="">MODALIDADE</label>
        <input className="inputLogin2 inputLogin"
          type="text"
          placeholder="Digite sua Modalidade"
          onChange={modalidadeHandler}

        />
      </div>
      <div className="divinput">
        <label htmlFor="">FONE</label>
        <input className="inputLogin2 inputLogin"
          type="text"
          placeholder="Digite seu fone"
          onChange={foneHandler}

        />
      </div>

      <div className="divinput">
        <label htmlFor="">RG</label>
        <input className="inputLogin2 inputLogin"
          type="text"
          placeholder="Digite seu RG"
          onChange={rgHandler}

        />
      </div>
      <div className="divinput">
        <label htmlFor="">CPF</label>
        <input className="inputLogin2 inputLogin"
          type="text"
          placeholder="Digite CPF"
          onChange={cpfHandler}

        />
      </div>
      {erro && <p>{erro}</p>}

      <button className="button buttonmenor" onClick={Logar}>Cadastrar</button>
    </>
  );
}
