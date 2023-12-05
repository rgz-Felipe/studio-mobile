// hooks/useAuth.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    // Aqui você normalmente faria uma solicitação ao servidor para autenticação.
    // Por exemplo, usando fetch() para enviar as credenciais ao backend.

    // Simulação de sucesso (substitua com autenticação real)
    if (username === 'usuario' && password === 'senha') {
      setIsLoggedIn(true);
      // Redirecionar apenas se o login for bem-sucedido
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    // Você pode adicionar lógica adicional de logout aqui, se necessário
  };

  return { isLoggedIn, login, logout };
};

export default useAuth;
