import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './contexts/UserContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
