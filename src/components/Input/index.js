import React from 'react';

const Input = ({ type, placeholder, value, onChange}) => {
    return (
        <div>
            <input 
            type={type} 
            className="form-control" 
            placeholder={placeholder}
            value = {value}
            onChange = {onChange}
            />
        </div>
    );
}

export default Input; 