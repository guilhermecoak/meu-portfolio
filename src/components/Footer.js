// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Guilherme Camargo de Oliveira Andrade</p>
    </footer>
  );
}

export default Footer;
