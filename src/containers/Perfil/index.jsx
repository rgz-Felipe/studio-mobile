import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ClienteComponente = () => {
  const [cliente, setCliente] = useState({
    nome: 'Joao Das Couves',
    telefone: '62 9874662248',
    tipoPerfil: 'Ouro',
  });



  const handleTipoPerfilChange = (event) => {
    setCliente({
      ...cliente,
      tipoPerfil: event.target.value,
    });
  };


  return (
    <div>
      <h1>Meu Perfil</h1>
      <p>Óla, {cliente.nome}</p>
      <p>Telefone: {cliente.telefone}</p>
      <p>Tipo de Plano: {cliente.tipoPerfil}</p>

      <p>
        Monte seu <Link to="/Home">Book</Link>.
      </p>
      <p>
        <Link to="/"><button>Sair</button></Link>
      </p>

    </div>
  );
};

export default ClienteComponente;
