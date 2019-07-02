import React from 'react';

const Button = ({ name, param, type }) => {
  return (
    <button type={type} className="btn btn-primary" onClick={param}>{name}</button>
  );
}

export default Button;