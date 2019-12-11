import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput({ atleta }) {
  // const { } = useField();

  const [preview, setPreview] = useState();
  const [fotoUrl, setFotoUrl] = useState([]);

  useEffect(() => {
    async function getFotoUrl() {
      try {
        const response = await api.get(`/atletas`);
        setFotoUrl(response.data);
      } catch (err) {
        console.tron.log(err, 'Algo deu errado na chamada')
      }
    } getFotoUrl()
  }, [])


  function handlerChange(e) {

  };

  return (
    <Container >
      <label htmlFor="avatar">
        <img src={atleta.url} alt="" />

        <input
          type="file"
          name=""
          accept="image/*"
          id="avatar"
          onChange={handlerChange}
        />

      </label>
    </Container>
  );
}
