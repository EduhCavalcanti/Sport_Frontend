import React, { useState, useMemo, useEffect } from 'react';
import api from '../../services/api';
import camera from './../Cadastro/camera.svg'


export default function Inputs({ history }) {
  const [nome, setNome] = useState();
  const [pai, setPai] = useState();
  const [nacionalidade, setNacionalidade] = useState();
  const [categoria, setCategoria] = useState();
  const [foto, setFoto] = useState();
  const [modalidade, setModalidade] = useState();
  const [getModalidade, setGetmodalidade] = useState([]);
  const [natural, setNatural] = useState();
  const [data_nasc, setNascimento] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [cep, setCep] = useState();
  const [n, setNumero] = useState();
  const [fone, setFone] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [escolaridade, setEscolaridade] = useState();
  const [mae, setMae] = useState();
  /* const [erro, setErro] = useState(); */


  const preview = useMemo(() => {
    return foto ? URL.createObjectURL(foto) : null;
  }, [foto]);

  useEffect(() => {
    async function pegarmodalidade() {
      try {
        const responsemodal = await api.get('/adminlist')
        setGetmodalidade(responsemodal.data)

      } catch (error) {
        console.log(error)
      }

    } pegarmodalidade()
  }, [])

  //Tratamento de alguns campos obrigatorios
  async function Enviar(e) {

    if (!email || !foto || !cpf || !rg || !categoria || !data_nasc) {
      return alert('Preencha o todos os campos')
    }

    e.preventDefault()

    const data = new FormData();
    data.append('foto', foto);
    data.append('email', email);
    data.append('n', n);
    data.append('bairro', bairro);
    data.append('cidade', cidade);
    data.append('estado', estado);
    data.append('categoria', categoria);
    data.append('natural', natural);
    data.append('rua', rua);
    data.append('cep', cep);
    data.append('nome', nome);
    data.append('pai', pai);
    data.append('mae', mae);
    data.append('nacionalidade', nacionalidade);
    data.append('data_nasc', data_nasc);
    data.append('fone', fone);
    data.append('rg', rg);
    data.append('cpf', cpf);
    data.append('escolaridade', escolaridade);

    try {
      api.post()
      /* const response = */ await api.post(`/${modalidade}/registrar`, data, {
        pai,
        mae,
        rua,
        bairro,
        cidade,
        estado,
        cep,
        photo_name: foto,
        n,
        fone,
        email,
        nome,
        nacionalidade,
        natural,
        data_nasc,
        categoria,
        cpf,
        rg,
        escolaridade
      })
      history.push(`/main/${modalidade}`)
    } catch (err) {
      console.log(err, 'deu merda')
    }

  }

  function nomeHandler(e) { setNome(e.target.value); }
  function paiHandler(e) { setPai(e.target.value); }
  function nacionalidadeHandler(e) { setNacionalidade(e.target.value); }
  function categoriaHandler(e) { setCategoria(e.target.value); }
  function naturalHandler(e) { setNatural(e.target.value); }
  function nascimentoHandler(e) { setNascimento(e.target.value); }
  function ruaHandler(e) { setRua(e.target.value); }
  function bairroHandler(e) { setBairro(e.target.value); }
  function cidadeHandler(e) { setCidade(e.target.value); }
  function estadoHandler(e) { setEstado(e.target.value); }
  function cepHandler(e) { setCep(e.target.value); }
  function numeroHandler(e) { setNumero(e.target.value); }
  function foneHandler(e) { setFone(e.target.value); }
  function emailHandler(e) { setEmail(e.target.value); }
  function cpfHandler(e) { setCpf(e.target.value); }
  function rgHandler(e) { setRg(e.target.value); }
  function escolaridadeHandler(e) { setEscolaridade(e.target.value); }
  function maeHandler(e) { setMae(e.target.value); }

  function modalidadeHandler(id) {
    setModalidade(id.target.value)
  }


  return (
    <>

      <div className='supremo'>

        <label
          id="foto2"
          style={{ backgroundImage: `url(${preview})` }}
          className={foto ? 'has-foto ' : ''}
        >
          <input type="file" onChange={e => setFoto(e.target.files[0])} />
          <img src={camera} alt="select img" />
        </label>



        <div className="divinput divnova ">
          <label className='formLabel' htmlFor="nome" >Nome</label>
          <input onChange={nomeHandler} className="inputLogin inputAtleta" type="text" id="nome" required />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="pai">pai</label>
          <input onChange={paiHandler} className="inputLogin inputAtleta" type="text" id="pai" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="mae">mae</label>
          <input onChange={maeHandler} className="inputLogin inputAtleta" type="text" id="mae" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="nacionalidade">nacionalidade</label>
          <input onChange={nacionalidadeHandler} className="inputLogin inputAtleta" type="text" id="nacionalidade" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="categoria">categoria</label>
          <input onChange={categoriaHandler} className="inputLogin inputAtleta" type="text" id="categoria" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="modalidade">modalidade</label>
          <select name="modalidade" onChange={modalidadeHandler} id="modalidade" className="inputLogin inputAtleta">
            {
              getModalidade.map((modalidadeItem, i) => (
                <>
                  <option value={modalidadeItem.id} key={i}>{modalidadeItem.modalidade}</option>

                </>
              ))
            }
          </select>
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="natural">natural</label>
          <input onChange={naturalHandler} className="inputLogin inputAtleta" type="text" id="natural" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="nascimento">nascimento</label>
          <input onChange={nascimentoHandler}
            className="inputLogin inputAtleta"
            type="date"
            id="data_nasc"
          />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="rua">rua</label>
          <input onChange={ruaHandler} className="inputLogin inputAtleta" type="text" id="rua" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="bairro">bairro</label>
          <input onChange={bairroHandler} className="inputLogin inputAtleta" type="text" id="bairro" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="cidade">cidade</label>
          <input onChange={cidadeHandler} className="inputLogin inputAtleta" type="text" id="cidade" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="estado">estado</label>
          <input onChange={estadoHandler} className="inputLogin inputAtleta" type="text" id="estado" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="cep">cep</label>
          <input onChange={cepHandler} className="inputLogin inputAtleta" type="text" id="cep" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="fone">fone</label>
          <input onChange={foneHandler} className="inputLogin inputAtleta" type="text" id="fone" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="email">email</label>
          <input onChange={emailHandler}
            className="inputLogin inputAtleta"
            type="email"
            id="email"
          />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="cpf">cpf</label>
          <input onChange={cpfHandler} className="inputLogin inputAtleta" type="text" id="cpf" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="rg">rg</label>
          <input onChange={rgHandler} className="inputLogin inputAtleta" type="text" id="rg" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="escolaridade">escolaridade</label>
          <input onChange={escolaridadeHandler} className="inputLogin inputAtleta" type="text" id="escolaridade" />
        </div>
        <div className="divinput divnova">
          <label className='formLabel' htmlFor="numero">numero</label>
          <input onChange={numeroHandler} className="inputLogin inputAtleta" type="text" id="numero" />
        </div>
      </div>
      <button className="button buttonmenor" onClick={Enviar}>ENTRAR</button>

    </>
  );
}
