import React from 'react';

import './styles.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="input"
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
