// src/components/Header.js

import React from 'react';
import './Header.css';

function Header() {
  // Função para lidar com o clique nos links
  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Rola suavemente até a seção alvo
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // Remove qualquer destaque anterior
      document.querySelectorAll('.highlight').forEach((el) => {
        el.classList.remove('highlight');
      });

      // Adiciona a classe de destaque
      targetElement.classList.add('highlight');

      // Remove a classe após 2 segundos
      setTimeout(() => {
        targetElement.classList.remove('highlight');
      }, 2000);
    }
  };

  return (
    <header className="header">
      <h1>Guilherme Camargo de Oliveira Andrade</h1>
      <p>Desenvolvedor Full-Stack</p>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#sobre" onClick={(e) => handleNavClick(e, 'sobre')}>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#experiencia" onClick={(e) => handleNavClick(e, 'experiencia')}>
              Experiência
            </a>
          </li>
          <li>
            <a href="#educacao" onClick={(e) => handleNavClick(e, 'educacao')}>
              Educação
            </a>
          </li>
          <li>
            <a href="#competencias" onClick={(e) => handleNavClick(e, 'competencias')}>
              Competências
            </a>
          </li>
          <li>
            <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
