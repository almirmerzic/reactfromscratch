import React from 'react';

const Button = ({ name, sendTodo }) => {
  return (
    <button className="btn btn-primary" onClick={sendTodo}>{name}</button>
  );
}

export default Button;