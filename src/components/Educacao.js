// src/components/Educacao.js
import React from 'react';
import './Educacao.css';

function Educacao() {
  return (
    <section id="educacao" className="educacao">
      <h2>Educação e Formação</h2>

      <div className="educacao__item">
        <h3>Curso de Desenvolvimento Front-End</h3>
        <p><strong>Impacta Tecnologia</strong> | Abril 2022 – Outubro 2022</p>
      </div>

      <div className="educacao__item">
        <h3>HTML e CSS: Ambientes de Desenvolvimento, Estrutura de Arquivos e Tags</h3>
        <p><strong>Alura</strong> | Novembro 2022</p>
      </div>

      <div className="educacao__item">
        <h3>JavaScript: Programando a Orientação a Objetos</h3>
        <p><strong>Alura</strong> | Dezembro 2022</p>
      </div>

      <div className="educacao__item">
        <h3>Python: Avance na Orientação a Objetos e Consuma API</h3>
        <p><strong>Alura</strong> | Março 2023</p>
      </div>

      <div className="educacao__item">
        <h3>React: Comece Seu Projeto Full Stack</h3>
        <p><strong>Alura</strong> | Abril 2023 – Maio 2023</p>
      </div>
    </section>
  );
}

export default Educacao;
