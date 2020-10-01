import React, { useContext, useEffect } from 'react';
import useForm from '../../../Hooks/useForm';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

import Button from '../../Form/Button';
import Input from '../../Form/Input';

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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading
          ? <Button disabled>Carregando...</Button>
          : <Button>Entrar</Button>
        }

        {error && <p>{error}</p>}
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
