// src/components/Competencias.js

import React, { useState } from 'react';
import './Competencias.css';

// Importe os ícones das tecnologias que você utiliza
import { FaReact, FaNodeJs, FaPython, FaGit, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDocker } from 'react-icons/si';

function Competencias() {
  const [selectedTech, setSelectedTech] = useState(null);

  const techList = [
    {
      name: 'React',
      icon: <FaReact />,
      description: 'Este portfólio foi construído utilizando React para criar componentes reutilizáveis e uma experiência de usuário dinâmica.',
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Embora não utilizado neste projeto, Node.js é minha ferramenta preferida para criar servidores rápidos e escaláveis. Uma vez, criei um servidor tão rápido que ele respondeu antes mesmo de receber a requisição!',
    },
    {
      name: 'Python',
      icon: <FaPython />,
      description: 'Utilizo Python para automação de tarefas. Certa vez, automatizei meu café da manhã... pena que o computador não conseguiu fritar os ovos.',
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      description: 'JavaScript é a linguagem que dá vida às minhas aplicações web. Sem ela, este portfólio seria tão interativo quanto um quadro na parede.',
    },
    {
      name: 'Git',
      icon: <FaGit />,
      description: 'Controle de versão com Git é essencial. Já perdi código suficiente para saber que "commit cedo e commit frequentemente" é o caminho!',
    },
    {
      name: 'Docker',
      icon: <SiDocker />,
      description: 'Containerização com Docker torna o deployment um passeio no parque. Uma vez, coloquei meu site dentro de um container... agora ele não quer sair de lá!',
    },
    {
      name: 'Banco de Dados',
      icon: <FaDatabase />,
      description: 'Adoro trabalhar com bancos de dados. Eles guardam segredos melhor do que meus amigos!',
    },
  ];

  const handleIconClick = (tech) => {
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
  };

  return (
    <section id="competencias" className="competencias">
      <h2>Competências Técnicas</h2>
      <div className="tech-icons">
        {techList.map((tech, index) => (
          <div key={index} className="tech-icon" onClick={() => handleIconClick(tech)}>
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>

      {selectedTech && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedTech.name}</h3>
            <p>{selectedTech.description}</p>
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Competencias;
