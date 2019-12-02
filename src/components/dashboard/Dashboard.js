import React, { useState, useEffect } from 'react';

import Header from '../estilos/Header';
import './style.css';
import api from '../../services/api';
import plus from '../../assets/plus.png';

export default function Dashboard({ history }) {

  const [modalidade, setModalidade] = useState([]);

  useEffect(() => {
    async function getModalidade() {
      try {
        const response = await api.get('/adminlist');
        setModalidade(response.data)

      } catch (err) {
        console.log(err)
      }
    } getModalidade()
  }, []);

  function cadastrar() {
    history.push('/cadastromodalidade')
  }

  function entrar(id) {
    history.push(`/main/${id}`)
  }


  return (
    < div className='tudoMain'>
      <Header />

      <div className="tudo">

        <div className="modalidades">

          <div className="img" style={{ backgroundColor: '#616060' }} onClick={cadastrar} >
            <div className='imgplus'>
              <img src={plus} alt="add" />
            </div>
            <div className="p">
              <p>Adicionar modalidade</p>
            </div>
          </div>

          {
            modalidade.map((modalidadeitem, i) => (
              <div className="img" key={i} onClick={() => entrar(modalidadeitem.id)} style={{ backgroundImage: `url(${modalidadeitem.url})` }}>
                <div className="p"><p>{modalidadeitem.modalidade}</p></div>
              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}
