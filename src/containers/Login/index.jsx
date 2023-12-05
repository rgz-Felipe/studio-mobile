import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './styles.css';
const Login = () => {
  const [username, setUsername] = useState('Jhon');
  const [password, setPassword] = useState('123');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username && password) {
      navigate('/perfil');
    }
    
   
    return null;
  };

  return (
    <div>
      <h1>Area do Cliente</h1>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
      <p>
        Gostaria de ser atendido ? <NavLink to="/Registro">Preencha as informações</NavLink>.
      </p>
    </div>
  );
};
    export default Login;
