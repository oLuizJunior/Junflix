import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
          Imersão React da Alura
        
      </p>
        <p>
        <a href='https://github.com/Jundrigues/Junflix'>
          Criador por Jr Projetos
        </a>
        </p>
    </FooterBase>
  );
}

export default Footer;
