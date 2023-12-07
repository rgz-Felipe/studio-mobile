import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Importe seus estilos aqui se necessário
// import './styles.css';

const Home = () => {
  const [selectedCount, setSelectedCount] = useState(0);

  const photoUrls = [
    { url: 'https://conteudo.imguol.com.br/c/noticias/1d/2021/12/21/aliancas-casamento-festa-1640114144428_v2_900x506.jpg' },
    { url: 'https://i0.wp.com/grupobisutti.com.br/wp-content/uploads/2022/09/CHB_CA_22.10.21-@rafaelcruz_fotografia-57.jpeg?resize=900%2C601&ssl=1' },
    { url: 'https://conteudo.imguol.com.br/c/noticias/1d/2021/12/21/aliancas-casamento-festa-1640114144428_v2_900x506.jpg' },
    { url: 'https://i0.wp.com/grupobisutti.com.br/wp-content/uploads/2022/09/CHB_CA_22.10.21-@rafaelcruz_fotografia-57.jpeg?resize=900%2C601&ssl=1' }
  ];

  return (
    <div>
      <h1>Monte seu Book</h1>
      <p>Quantidade selecionada: {selectedCount}</p>
      <div className="photo-container">
        {photoUrls.map((photo, index) => (
          <img
            key={index}
            src={photo.url}
            alt={`Foto ${index + 1}`}
            className={`photo ${index < selectedCount ? 'selected' : ''}`}
            onClick={() => setSelectedCount(index + 1)}
          />
        ))}
      </div>

      <Link to="/FecharBook">
        <button>Fechar Book</button>
      </Link>
    </div>
  );
};

export default Home;
