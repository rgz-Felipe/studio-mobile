import React, { useState } from 'react';

const CadastroContato = () => {
  const [formValues, setFormValues] = useState({
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    dataNascimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Valores do formulário:', formValues);
  };

  return (
    <div>
      <h1>Cadastro Rapido</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={formValues.telefone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={formValues.cpf}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Data de Nascimento:
          <input
            type="date"
            name="dataNascimento"
            value={formValues.dataNascimento}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CadastroContato;
