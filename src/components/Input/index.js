import React from 'react';

getTodo = (e) => this.setState({ todo: e.target.value });

const Input = ({ type, placeholder, todo, value}) => {()
    return (
        <div>
            <input 
            type={type} 
            className="form-control" 
            placeholder={placeholder}
            value = {value}
            onChange = {todo}
            />
        </div>
    );
}

export default Input;