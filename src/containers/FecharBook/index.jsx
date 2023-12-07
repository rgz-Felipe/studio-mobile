import React, { useState, useEffect } from 'react';

const StatusSelecao = () => {
  const [status, setStatus] = useState('A seleção foi encaminhada.');

  useEffect(() => {
    // Simulando um atraso de 2 segundos para informar que está em preparação
    const timeoutId = setTimeout(() => {
      setStatus('A seleção está em preparação.');
    }, 2000);

    // Limpando o timeout quando o componente é desmontado
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <p>{status}</p>
    </div>
  );
};

export default StatusSelecao;
