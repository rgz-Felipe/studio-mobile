import React, { useState } from 'react';
//import { Link, NavLink, useNavigate } from 'react-router-dom';
//import './styles.css';

const Home= () => {

   const [selectedCount, setSelectedCount] = useState(0);
  

    const photoUrls = [
      
      { url: 'https://i.pinimg.com/564x/d8/b0/65/d8b065fac8fd0cbd35ecc8e1f85bc8aa.jpg' },
      { url: 'https://i.pinimg.com/564x/d8/b0/65/d8b065fac8fd0cbd35ecc8e1f85bc8aa.jpg' },
      { url: 'https://i.pinimg.com/564x/d8/b0/65/d8b065fac8fd0cbd35ecc8e1f85bc8aa.jpg' },
      { url: 'https://i.pinimg.com/564x/d8/b0/65/d8b065fac8fd0cbd35ecc8e1f85bc8aa.jpg' }
 
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
      </div>
    );
  };
  
  export default Home;