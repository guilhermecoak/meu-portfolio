// src/App.js
import React from 'react';
import './App.css';

import Header from './components/Header';
import Sobre from './components/Sobre';
import Experiencia from './components/Experiencia';
import Educacao from './components/Educacao';
import Competencias from './components/Competencias';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sobre />
      <Experiencia />
      <Educacao />
      <Competencias />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
