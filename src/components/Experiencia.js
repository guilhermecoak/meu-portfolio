// src/components/Experiencia.js
import React from 'react';
import './Experiencia.css';

function Experiencia() {
  return (
    <section id="experiencia" className="experiencia">
      <h2>Experiência Profissional</h2>

      <div className="experiencia__item">
        <h3>Desenvolvedor Full-Stack Freelancer</h3>
        <p><strong>Boss Tech</strong> | Setembro 2023 – Novembro 2023</p>
        <ul>
          <li>Criação e consumo de endpoints utilizando React para o Front-end e Node.js para o Back-end.</li>
          <li>Implementação de lógica de negócios no backend.</li>
          <li>Utilização de sistemas de controle de versão como Git.</li>
        </ul>
      </div>

      <div className="experiencia__item">
        <h3>Desenvolvedor Front-End (React) Freelancer</h3>
        <p><strong>CRN Nutrition</strong> | Junho 2023 – Agosto 2023</p>
        <ul>
          <li>Desenvolvimento FullStack utilizando React no Front e Node.js no Backend.</li>
          <li>Implementação de chamadas assíncronas usando Fetch API.</li>
          <li>Criação de telas seguindo padrões de UI/UX baseado no Figma, priorizando a abordagem Mobile First.</li>
        </ul>
      </div>

      <div className="experiencia__item">
        <h3>Desenvolvedor Back-End (Python) Freelancer</h3>
        <p><strong>VitaMax Nutrition</strong> | Março 2023 – Maio 2023</p>
        <ul>
          <li>Desenvolvimento e manutenção de endpoints, utilizando framework Flask para uma aplicação de gestão de estoque de suplementos.</li>
          <li>Operações de CRUD integradas a banco de dados utilizando SQLAlchemy.</li>
          <li>Manutenção da documentação atualizada (Swagger) e utilização de GitLab para versionamento do projeto.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experiencia;
