import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
