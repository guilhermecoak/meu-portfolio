// src/components/Contato.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contato.css';

/* Importe os ícones do react-icons */
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contato() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  // Inicialize o EmailJS com sua Chave Pública
  emailjs.init('PDLZy4T7uA3c1yJcG');

  const handleEmailClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.from_name,
      to_name: 'Guilherme',
      message: formData.message,
      reply_to: formData.reply_to
    };

    emailjs.send(
      'service_1n37tjt',
      'template_itakzsi',
      templateParams
    )
    .then((result) => {
      console.log(result.text);
      alert('Mensagem enviada com sucesso!');
      setShowForm(false);
      setFormData({
        from_name: '',
        reply_to: '',
        message: ''
      });
    }, (error) => {
      console.log(error.text);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    });
  };

  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <p>
        <FaPhone /> Telefone:
        <a href="tel:+5511985286023"> (+55) 11 98528-6023</a>
      </p>
      <p>
        <FaEnvelope /> Email:
        <a href="#" onClick={handleEmailClick}> guilhermecoak@gmail.com</a>
      </p>
      <p>
        <FaMapMarkerAlt /> São Paulo, Brasil
      </p>
      <div className="redes-sociais">
        <a href="https://www.linkedin.com/in/guilhermecoak/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/guilhermecoak/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>

      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowForm(false)}>&times;</button>
            <h3>Enviar Mensagem</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Seu Nome:
                <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
              </label>
              <label>
                Seu E-mail:
                <input type="email" name="reply_to" value={formData.reply_to} onChange={handleChange} required />
              </label>
              <label>
                Mensagem:
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              </label>
              <div className="form-buttons">
                <button type="submit">Enviar</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contato;
