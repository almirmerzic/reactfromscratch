import React from 'react';

const Button = ({ name, sendTodo }) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={sendTodo}>{name}</button>
  );
}

export default Button;