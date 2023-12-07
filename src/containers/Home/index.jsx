import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const photoUrls = [
    { id: 1, url: 'https://bookstudioapp.s3.amazonaws.com/assets/4.jpg' },
    { id: 2, url: 'https://bookstudioapp.s3.amazonaws.com/assets/5.jpg' },
    { id: 3, url: 'https://bookstudioapp.s3.amazonaws.com/assets/6.jpg' },
    { id: 4, url: 'https://bookstudioapp.s3.amazonaws.com/assets/7.jpg' },
    { id: 5, url: 'https://bookstudioapp.s3.amazonaws.com/assets/8.jpg' },
    { id: 6, url: 'https://bookstudioapp.s3.amazonaws.com/assets/9.jpg' },
    { id: 7, url: 'https://bookstudioapp.s3.amazonaws.com/assets/10.jpg' },
    { id: 8, url: 'https://bookstudioapp.s3.amazonaws.com/assets/11.jpeg' }
  ];

  const toggleSelection = (photoId) => {
    if (selectedPhotos.includes(photoId)) {
      setSelectedPhotos(selectedPhotos.filter((id) => id !== photoId));
    } else {
      setSelectedPhotos([...selectedPhotos, photoId]);
    }
  };

  return (
    <div>
      <h1>Monte seu Book</h1>
      <p>Quantidade selecionada: {selectedPhotos.length}</p>
      <div className="photo-container">
        {photoUrls.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={`Foto ${photo.id}`}
            className={`photo ${selectedPhotos.includes(photo.id) ? 'selected' : ''}`}
            onClick={() => toggleSelection(photo.id)}
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







