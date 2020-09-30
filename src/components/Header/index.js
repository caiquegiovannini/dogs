import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

import './styles.css';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" aria-label="Dogs | Home" className="logo">
          <Dogs />
        </Link>
        {user
          ? (
            <Link to="/conta" className="login">
              {user.nome}
            </Link>
          )
          : (
            <Link to="/login" className="login">
              Login | Criar
            </Link>
          )
        }
      </nav>
    </header>
  );
};

export default Header;
