import React from 'react';

const Button = ({ name, sendTodo, type }) => {
  return (
    <button type={type} className="btn btn-primary" onClick={sendTodo}>{name}</button>
  );
}

export default Button;