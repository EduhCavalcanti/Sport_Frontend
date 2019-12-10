import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import ItemAtleta from './itemAtleta';
import Header from '../estilos/Header';
import plus from '../../assets/plus.png'

export default function Main(props, { history }) {
    const [atletlas, setAtletas] = useState([]);
    const [modalidade, setModalidade] = useState({});
    /* const [pesquisa, setPresquisa] = useState(''); */

    /* function pesquisaHandler(e) {
        setPresquisa(e.target.value)
    } */

    useEffect(() => {
        async function getAtletas() {
            try {
                const response = await api.get(`/atletas/${props.match.params.modalidade_id}/modalidades`);
                setAtletas(response.data.atletas);
                setModalidade(response.data)

            } catch (err) {
                console.log(err)
            }
        } getAtletas()
        /* console.log("chamou") */
    }, [])

    /* const atletasFiltrados = atletlas.filter((atleta) => {
        return atleta.nome.indexOf(pesquisa) !== -1;
    }) */
    function cadastrar() {
        props.history.push('/cadastroatleta')
    }

    return (
        <div className='tudoMain'>
            <Header {...props} />


            <section>
                <div className="divLeft">
                    <input onChange='' className="search" type="search" placeholder="Nome do atleta" />
                    <div className="lista">
                        <h1 className="categoria">{modalidade.modalidade}</h1>
                        <ul>
                            <li className='imgLi' style={{ backgroundImage: `url(${modalidade.url})` }}></li>
                            <p className="teste">Nome</p>
                            <li>{modalidade.nome}</li>
                            <p className="teste">Email</p>
                            <li>{modalidade.email}</li>
                            <p className="teste">Fone</p>
                            <li>{modalidade.fone}</li>
                            <p className="teste">Cpf</p>
                            <li>{modalidade.cpf}</li>
                            <p className="teste">Rg</p>
                            <li>{modalidade.rg}</li>

                        </ul>
                    </div>

                    <div className="img1" style={{ backgroundColor: '#616060' }} onClick={cadastrar} >
                        <div className='imgplus1'>
                            <img src={plus} alt="add" />
                        </div>
                        <div className="p">
                            <p>Adicionar Atleta</p>
                        </div>
                    </div>
                </div>

                <div className="divRight">
                    {atletlas.map((atleta, i) => (
                        <ItemAtleta key={i}
                            atleta={atleta}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
