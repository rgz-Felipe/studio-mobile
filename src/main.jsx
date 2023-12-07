import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes as RoutesProvider, Route } from 'react-router-dom';
import Login from './containers/Login';
import Perfil from './containers/Perfil'
import Home from './containers/Home';
import  Header from './components/Header';
import CadastroContato from './containers/Registro';
import FecharBook from './containers/FecharBook';


const App = () => (
  <BrowserRouter>
    <RoutesProvider>
      
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
      <Route path="Perfil" element={<Perfil />} />
      <Route path="Registro" element={<CadastroContato />} />
      <Route path="FecharBook" element={<FecharBook/>}/>
   
    </RoutesProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header/>
    <App />
    
  </React.StrictMode>,
);
