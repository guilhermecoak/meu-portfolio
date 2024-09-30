// src/App.js

import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Competencias from './components/Competencias';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Sobre />
      <Experiencia />
      <Competencias /> {/* Adicione esta linha se ainda não estiver no seu App.js */}
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
