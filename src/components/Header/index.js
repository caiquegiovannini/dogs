import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" aria-label="Dogs | Home" className="logo">
          <Dogs />
        </Link>
        <Link to="/login" className="login">
          Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
