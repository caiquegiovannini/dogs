import React, { useContext, useEffect } from 'react';
import useForm from '../../../Hooks/useForm';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import Button from '../../Form/Button';
import Input from '../../Form/Input';
import Error from '../../Hepler/Error';

import './styles.css';
import '../../Form/Button/styles.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading
          ? <Button disabled>Carregando...</Button>
          : <Button>Entrar</Button>
        }

        <Error error={error} />
      </form>

      <Link className="perdeu" to="/login/perdeu">Perdeu a senha?</Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link to="/login/criar" className="button">Cadastro</Link>
      </div>
    </section>
  );
};

export default LoginForm;
